import { useState } from 'react';
import { motion } from 'motion/react';

const QUESTIONS = [
  // ================= 情感频率 (F) =================
  {
    id: 1,
    dimension: "情感频率",
    scenario: "场景：消息回复",
    text: "你们分隔两地。你发了条消息说'好想你'，等了两个小时对方才回复一个'我也是'，然后没了下文。此刻你的感受更接近哪种？",
    options: [
      { label: "这让我隐隐有些失落——我需要知道对方也在想我这件事", value: "F_high" },
      { label: "还好，知道对方有回应就够了，我不需要被密集确认", value: "F_low" }
    ]
  },
  {
    id: 2,
    dimension: "情感频率",
    scenario: "场景：恋爱状态",
    text: "你理想中的恋爱状态，是哪一种？",
    options: [
      { label: "每天都有联系，会分享今天吃了什么、遇到了什么蠢事，感觉随时都有人在场", value: "F_high" },
      { label: "没消息不代表没感情，不用每天报备，见面的时候才是真正在一起", value: "F_low" }
    ]
  },
  {
    id: 3,
    dimension: "情感频率",
    scenario: "场景：情绪低谷",
    text: "你某天心情很差，但说不清楚为什么。发消息给对方，对方回复：'怎么了？发生什么事了吗？'你更希望接下来发生什么？",
    options: [
      { label: "他/她能主动来找我，或者持续问候，让我感觉被人'接住'了", value: "F_high" },
      { label: "有人问一声就够了，我需要自己先消化，不太想被过度追问", value: "F_low" }
    ]
  },
  {
    id: 4,
    dimension: "情感频率",
    scenario: "场景：特殊日子",
    text: "周年纪念日到了，你记得，但对方没有主动提起。到了晚上你提醒了他/她，对方说'啊对了！抱歉，最近太忙了'，你内心的第一反应是？",
    options: [
      { label: "有些受伤——这个日子对我有仪式感，被遗忘让我觉得自己不够重要", value: "F_high" },
      { label: "理解，成年人的生活真的很忙，实质性的关心比记不记日子更重要", value: "F_low" }
    ]
  },
  {
    id: 5,
    dimension: "情感频率",
    scenario: "场景：深夜情绪",
    text: "凌晨一点，你突然睡不着，莫名想哭。这时候你对伴侣的期待是？",
    options: [
      { label: "可以打电话过去，哪怕只是听对方的声音，不用说什么", value: "F_high" },
      { label: "不会打扰他/她，自己刷刷手机，等情绪过去就好了", value: "F_low" }
    ]
  },
  {
    id: 6,
    dimension: "情感频率",
    scenario: "场景：异地通讯",
    text: "异地恋的你们，对方最近每天发消息的频率明显减少了。你会怎么看待这件事？",
    options: [
      { label: "开始担心——是不是感情淡了？我需要弄清楚", value: "F_high" },
      { label: "生活节奏变化很正常，感情的深度不体现在消息数量上", value: "F_low" }
    ]
  },
  {
    id: 7,
    dimension: "情感频率",
    scenario: "场景：日常报备",
    text: "你下班到家了，给对方发了一条'到家了'。你更希望收到什么回复？",
    options: [
      { label: "'辛苦了，今天怎么样？' —— 然后我们聊起来", value: "F_high" },
      { label: "'好的'或者一个表情，知道你看到就行，不用展开聊", value: "F_low" }
    ]
  },

  // ================= 爱之货币 (C) =================
  {
    id: 8,
    dimension: "爱之货币",
    scenario: "场景：生病照顾",
    text: "你发烧了，烧到38.5度，一个人躺在家里。告诉了伴侣之后，你更希望他/她怎么做？",
    options: [
      { label: "买退烧药、外卖粥、直接出现在门口——就算没说什么，人在就是安慰", value: "C_action" },
      { label: "发来一段很长的消息，说'你生病我好担心你，要照顾好自己，需要我就说'——感觉被在乎", value: "C_emotion" }
    ]
  },
  {
    id: 9,
    dimension: "爱之货币",
    scenario: "场景：节日送礼",
    text: "你们的生日礼物风格，更接近哪一种？",
    options: [
      { label: "他/她提前很久就在默默观察我最近需要什么，然后静悄悄地买好了", value: "C_action" },
      { label: "他/她会很认真地说'你对我来说很重要，生日快乐'，加上一个精心挑选的卡片——礼物是次要的", value: "C_emotion" }
    ]
  },
  {
    id: 10,
    dimension: "爱之货币",
    scenario: "场景：疲惫下班",
    text: "你工作很累，今天回家发现对方把家里打扫干净了、饭也做好了，但什么都没说。你的感受是？",
    options: [
      { label: "比什么都好——这就是爱的语言，我立刻充了电", value: "C_action" },
      { label: "感谢，但我更希望他/她坐下来说'今天还好吗'，陪我聊聊天", value: "C_emotion" }
    ]
  },
  {
    id: 11,
    dimension: "爱之货币",
    scenario: "场景：未来规划",
    text: "关于你们的未来，你更倾向于哪种表达方式？",
    options: [
      { label: "他/她已经在看两个人未来要住的区域的房子了——这比说一百遍'我爱你'更有说服力", value: "C_action" },
      { label: "他/她会认真地说'我想过很多，我想和你一起变老'，然后我们一起谈论未来的模样", value: "C_emotion" }
    ]
  },
  {
    id: 12,
    dimension: "爱之货币",
    scenario: "场景：社交局促",
    text: "你在一个你不熟悉的聚会上有点局促。对方注意到了，他/她更可能怎么做——而你更希望哪种？",
    options: [
      { label: "默默走过来站在你身边，或者帮你递一杯饮料，什么都不用说", value: "C_action" },
      { label: "找到一个空档，附在你耳边说'你好厉害的，你刚才那个回答很棒'", value: "C_emotion" }
    ]
  },
  {
    id: 13,
    dimension: "爱之货币",
    scenario: "场景：短暂分离",
    text: "你要出差一周。临走的早晨，你更需要的是？",
    options: [
      { label: "对方早起帮你检查行李、打包了一份早饭，塞进你的包里", value: "C_action" },
      { label: "在出发前，对方认真地看着你说'一个人注意安全，我会想你的'", value: "C_emotion" }
    ]
  },
  {
    id: 14,
    dimension: "爱之货币",
    scenario: "场景：高压状态",
    text: "你最近工作压力很大，精神状态不好。你更希望伴侣如何回应？",
    options: [
      { label: "主动承担更多家务，让我不用操心这些，就算不说什么", value: "C_action" },
      { label: "拉着我坐下来，认真问我'最近是不是很难熬，你跟我说说'", value: "C_emotion" }
    ]
  },

  // ================= 空间边界 (B) =================
  {
    id: 15,
    dimension: "空间边界",
    scenario: "场景：隐私边界",
    text: "你们在一起了。对方有一次拿起你的手机看了一眼消息（没有恶意，只是随手），你的内心反应是？",
    options: [
      { label: "有点不舒服，即使是最亲近的人，我的手机是我的私人空间", value: "B_private" },
      { label: "无所谓，我们之间没什么需要藏着的，这是正常的亲密", value: "B_shared" }
    ]
  },
  {
    id: 16,
    dimension: "空间边界",
    scenario: "场景：社交分配",
    text: "周末你想和老朋友单独出去吃饭，不带对方。他/她说'好啊，你去玩'，没多问。你的感受是？",
    options: [
      { label: "很舒适——我需要自己的社交空间，他/她不追问是信任", value: "B_private" },
      { label: "有点奇怪，不是说不行，但我希望他/她表达一句'下次带上我'或者稍微有点在乎", value: "B_shared" }
    ]
  },
  {
    id: 17,
    dimension: "空间边界",
    scenario: "场景：同居空间",
    text: "同居之后，你更倾向于哪种状态？",
    options: [
      { label: "我们有各自的书桌、各自的抽屉，有时候各自做事互不干扰，在一起但又有各自的世界", value: "B_private" },
      { label: "我喜欢我们的东西混在一起——他/她的书放到我这里，我的东西飘到那边，分不清你我就对了", value: "B_shared" }
    ]
  },
  {
    id: 18,
    dimension: "空间边界",
    scenario: "场景：过往情史",
    text: "你有一段过去的感情经历，细节比较复杂。在现在的关系里，你的态度是？",
    options: [
      { label: "过去是过去，不是所有事情都必须讲清楚，保留一点自己的历史也没什么", value: "B_private" },
      { label: "我希望我们对彼此是透明的，说出来之后双方都更安心", value: "B_shared" }
    ]
  },
  {
    id: 19,
    dimension: "空间边界",
    scenario: "场景：日常失联",
    text: "工作日你们各自忙碌，你觉得一天不怎么互动是…？",
    options: [
      { label: "正常，甚至有点享受——各自的生活是健康关系的一部分", value: "B_private" },
      { label: "有点空，我喜欢那种'虽然各忙各的，但始终有感知'的感觉", value: "B_shared" }
    ]
  },
  {
    id: 20,
    dimension: "空间边界",
    scenario: "场景：社交圈重叠",
    text: "对方和你的好朋友们越来越熟了，开始单独约出去玩（没有你）。你的感受？",
    options: [
      { label: "挺好的，说明他/她融入了我的生活——但我不需要随时知道他们在聊什么", value: "B_private" },
      { label: "有点微妙——我的朋友、我的伴侣，我希望我在场，或者至少知道他们聊了什么", value: "B_shared" }
    ]
  },
  {
    id: 21,
    dimension: "空间边界",
    scenario: "场景：个人决策",
    text: "你突然决定报一个周末的课程，事先没有和对方商量。他/她知道后说'没问题啊'。你的感受是？",
    options: [
      { label: "理所当然——这是我自己的决定，不需要提前批准", value: "B_private" },
      { label: "感激他/她理解，但我下次会提前告诉他/她——共同的生活需要同步", value: "B_shared" }
    ]
  },

  // ================= 冲突卸载 (K) =================
  {
    id: 22,
    dimension: "冲突卸载",
    scenario: "场景：激烈争吵",
    text: "你们刚刚大吵了一架，气氛很差。你更接近哪种状态？",
    options: [
      { label: "我需要立刻把这件事说清楚——带着情绪也要继续谈，不解决我睡不着", value: "K_instant" },
      { label: "我需要先冷静下来，让我一个人待一会儿，等情绪退去再谈才有意义", value: "K_delayed" }
    ]
  },
  {
    id: 23,
    dimension: "冲突卸载",
    scenario: "场景：隔夜冷战",
    text: "昨晚发生了争执，今天早上醒来两个人都没说话。你的期待是？",
    options: [
      { label: "有人先开口，继续昨晚没说完的——不管结论是什么，先把这件事关掉", value: "K_instant" },
      { label: "大家先正常生活，吃个早饭、各做各的事，等时机成熟自然就化解了", value: "K_delayed" }
    ]
  },
  {
    id: 24,
    dimension: "冲突卸载",
    scenario: "场景：产生误解",
    text: "对方误解了你的一句话，生气了。你觉得最好的处理方式是？",
    options: [
      { label: "当场解释清楚，哪怕他/她在气头上——误会不澄清，会越积越深", value: "K_instant" },
      { label: "给他/她一点时间冷静，等对方情绪稳定了再解释，这时候说什么都更容易被听进去", value: "K_delayed" }
    ]
  },
  {
    id: 25,
    dimension: "冲突卸载",
    scenario: "场景：单方过错",
    text: "你做了一件让对方受伤的事。你的道歉方式更接近？",
    options: [
      { label: "马上道歉，哪怕词不达意，先让对方知道我意识到了，我们可以继续聊", value: "K_instant" },
      { label: "先想清楚自己哪里做错了，整理好之后，给对方一个完整、真诚的道歉", value: "K_delayed" }
    ]
  },
  {
    id: 26,
    dimension: "冲突卸载",
    scenario: "场景：反复摩擦",
    text: "同一个问题，你们已经吵了不止一次了。你的感受是？",
    options: [
      { label: "必须彻底谈清楚——这个问题一直没被解决，我感到焦虑", value: "K_instant" },
      { label: "每次吵完都会有新的理解，也许不需要'彻底解决'，接受彼此的差异本身就是答案", value: "K_delayed" }
    ]
  },
  {
    id: 27,
    dimension: "冲突卸载",
    scenario: "场景：言语过激",
    text: "你刚刚说了一些很重的话，事后觉得自己过激了。你会怎么做？",
    options: [
      { label: "立刻找对方说'我刚才那句话太过分了，对不起'，不管他/她在不在状态接受", value: "K_instant" },
      { label: "先给自己和对方一些空间冷却，再找合适的时机去修复", value: "K_delayed" }
    ]
  },
  {
    id: 28,
    dimension: "冲突卸载",
    scenario: "场景：情绪波及",
    text: "你最近压力很大，某天对方说了一句无心的话惹到了你，你爆发了。事后你更希望？",
    options: [
      { label: "对方能理解我只是压力太大，我们继续聊，把这件事快速收尾", value: "K_instant" },
      { label: "对方给我一点空间，不要急着'解决'，等我自己平静下来再说", value: "K_delayed" }
    ]
  }
];

export function Quiz({ onComplete }: { onComplete: (answers: Record<string, string>) => void, key?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleOptionClick = (value: string) => {
    const currentQ = QUESTIONS[currentIndex];
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);
    
    // Automatically move to next after a short delay
    setTimeout(() => {
      if (currentIndex < QUESTIONS.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentQ = QUESTIONS[currentIndex];
  const isAnswered = !!answers[currentQ.id];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#1E1E1E]"
    >
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 mr-6 h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-indigo-500"
              initial={{ width: `${(currentIndex / QUESTIONS.length) * 100}%` }}
              animate={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-400 font-mono">{currentIndex + 1} / {QUESTIONS.length}</span>
        </div>

        {/* Dimension Pill */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#333] text-xs text-gray-300 mb-8 tracking-wider">
          {currentQ.dimension}
        </div>

        {/* Scenario Context */}
        <div className="border-l-2 border-[#333] pl-4 mb-6">
          <p className="text-sm text-gray-500">{currentQ.scenario}</p>
        </div>

        {/* Question */}
        <h2 className="text-2xl md:text-3xl font-light text-white mb-12 leading-relaxed">
          {currentQ.text}
        </h2>

        {/* Options */}
        <div className="space-y-4 mb-12">
          {currentQ.options.map((option, idx) => {
            const isSelected = answers[currentQ.id] === option.value;
            const badge = idx === 0 ? 'A' : 'B';
            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(option.value)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 group ${
                  isSelected 
                    ? 'border-indigo-500/50 bg-indigo-500/10' 
                    : 'border-[#333] bg-[#252525] hover:border-gray-500 hover:bg-[#2A2A2A]'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border text-sm font-mono transition-colors ${
                  isSelected ? 'border-indigo-500 text-indigo-400' : 'border-gray-600 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-300'
                }`}>
                  {badge}
                </div>
                <div className={`pt-1 text-lg leading-relaxed transition-colors ${
                  isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {option.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`flex-1 py-4 rounded-full border text-sm tracking-widest transition-colors ${
              currentIndex === 0 
                ? 'border-[#333] text-[#333] cursor-not-allowed' 
                : 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
            }`}
          >
            ← 上一题
          </button>
          <button 
            onClick={handleNext}
            disabled={!isAnswered}
            className={`flex-1 py-4 rounded-full border text-sm tracking-widest transition-colors ${
              !isAnswered
                ? 'border-[#333] text-[#333] cursor-not-allowed'
                : 'border-indigo-500 text-indigo-400 hover:bg-indigo-500/10'
            }`}
          >
            {currentIndex === QUESTIONS.length - 1 ? '查看报告 →' : '下一题 →'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

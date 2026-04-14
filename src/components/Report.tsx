import { motion } from 'motion/react';

const PROFILES: Record<string, { title: string, desc: string }> = {
  "EAMR": { 
    title: "EAMR 炽热重力型", 
    desc: "外放高频、行为支撑、融合共生、即时清空。你用高密度的行动和存在感全面覆盖对方的生活，遇到摩擦必须当场解决，绝不留过夜。最适配同样全情投入的实干派，最大风险是遇到低频独立型，你的高压推进会触发对方的逃避机制。" 
  },
  "EAMD": { 
    title: "EAMD 恒温堡垒型", 
    desc: "外放高频、行为支撑、融合共生、延时自愈。你渴望无缝衔接的陪伴并乐于付出实际行动，但在冲突爆发时会选择物理或心理撤退来消化情绪。最适配温和包容的伴侣，遇到即时清空型时，对方的步步紧逼会让你彻底宕机。" 
  },
  "EASR": { 
    title: "EASR 游侠骑士型", 
    desc: "外放高频、行为支撑、独立驻守、即时清空。你愿意频繁互动并用行动表达爱，但坚守个人领地，且有话直说绝不隔夜。最适配边界感清晰的直球选手，最大风险是遇到融合共生型，你会觉得个人空间被严重侵犯。" 
  },
  "EASD": { 
    title: "EASD 极地守望型", 
    desc: "外放高频、行为支撑、独立驻守、延时自愈。你喜欢高频的日常分享，用做事来表达爱，但内心有不可触碰的孤岛，冲突时需要绝对的独处。最适配懂你节奏的独立伴侣，遇到情绪索取型会让你迅速耗竭。" 
  },
  "EVMR": { 
    title: "EVMR 太阳风暴型", 
    desc: "外放高频、言语情绪、融合共生、即时清空。你像太阳一样散发热量，用高密度的表达填满对方的生活，且遇到问题必须立刻解决。最适配同样投入且坦诚的伴侣，遇到低频独立型会感到窒息，也会把对方逼疯。" 
  },
  "EVMD": { 
    title: "EVMD 潮汐回望型", 
    desc: "外放高频、言语情绪、融合共生、延时自愈。你渴望灵魂深处的共鸣和甜言蜜语，但在冲突爆发时会陷入情绪漩涡，选择逃避。最适配能提供稳定情绪价值的伴侣，最大风险是遇到暴躁直率型，会让你彻底封闭。" 
  },
  "EVSR": { 
    title: "EVSR 极光投射型", 
    desc: "外放高频、言语情绪、独立驻守、即时清空。你擅长提供情绪价值，喜欢高频聊天，但拒绝生活被完全绑定，有问题当场解决。最适配精神独立且有趣的伴侣，遇到过度依赖型会让你迅速撤退。" 
  },
  "EVSD": { 
    title: "EVSD 迷雾幻影型", 
    desc: "外放高频、言语情绪、独立驻守、延时自愈。你用言语编织浪漫，但随时准备退回自己的世界，遇到矛盾会习惯性冷处理。最适配能享受当下不问未来的伴侣，最大风险是遇到极度缺乏安全感的人，你会成为对方的噩梦。" 
  },
  "IAMR": { 
    title: "IAMR 磐石基建型", 
    desc: "内收低频、行为支撑、融合共生、即时清空。你不爱闲聊，但会把对方的生活打理得井井有条，认为伴侣应该不分你我，有问题直接解决。最适配踏实过日子的伴侣，遇到高频情绪型会觉得对方无理取闹。" 
  },
  "IAMD": { 
    title: "IAMD 沉默齿轮型", 
    desc: "内收低频、行为支撑、融合共生、延时自愈。你用默默做事来维系关系，习惯两个人绑在一起，但面对冲突时会像蚌壳一样闭嘴。最适配懂你沉默的伴侣，最大风险是遇到需要言语确认的人，对方会被你的沉默逼疯。" 
  },
  "IASR": { 
    title: "IASR 孤狼实干型", 
    desc: "内收低频、行为支撑、独立驻守、即时清空。你极度独立，不黏人，用实际行动解决问题，吵架也像开会一样直击痛点。最适配同样理智高效的伴侣，遇到情绪化、需要哄的伴侣会让你觉得浪费生命。" 
  },
  "IASD": { 
    title: "IASD 深海灯塔型", 
    desc: "内收低频、行为支撑、独立驻守、延时自愈。你用实质的付出来表达爱，但极度需要私人空间。冲突后你会消失一段时间来整理情绪。最适配同样独立的人，最大风险是遇到言语型+高频型伴侣，对方会长期感到被冷暴力。" 
  },
  "IVMR": { 
    title: "IVMR 篝火夜话型", 
    desc: "内收低频、言语情绪、融合共生、即时清空。你平时不怎么黏人，但关键时刻能提供极高的情绪价值，渴望深度融合，有问题当面说清。最适配注重精神交流的伴侣，遇到纯行动派会让你觉得生活索然无味。" 
  },
  "IVMD": { 
    title: "IVMD 静水流深型", 
    desc: "内收低频、言语情绪、融合共生、延时自愈。你渴望融合但表达克制，习惯用隐晦的言语传递情感，冲突时倾向于内部消化。最大风险是遇到行动型伴侣，产生严重的货币错配。" 
  },
  "IVSR": { 
    title: "IVSR 风筝旅人型", 
    desc: "内收低频、言语情绪、独立驻守、即时清空。你像风筝一样需要自由，偶尔给予情绪甜头，遇到问题快刀斩乱麻，绝不拖泥带水。最适配同样洒脱不羁的伴侣，遇到渴望稳定融合的人，你会成为对方抓不住的风。" 
  },
  "IVSD": { 
    title: "IVSD 冰川隐士型", 
    desc: "内收低频、言语情绪、独立驻守、延时自愈。你极度需要个人空间，偶尔用言语表达关心，遇到冲突会立刻缩回壳里。最适配对亲密关系需求极低的伴侣，最大风险是遇到任何需要高浓度陪伴的人，你们会互相折磨。" 
  }
};

const DEFAULT_PROFILE = { 
  title: "SYNC 未知观测体", 
  desc: "你的接口组合非常独特，既有独立的一面，也有渴望融合的瞬间。建议在关系中保持真实的自我表达，寻找能接纳你复杂性的伴侣。" 
};

export function Report({ answers, onRestart }: { answers: Record<string, string>, onRestart: () => void, key?: string }) {
  let fHigh = 0, fLow = 0;
  let cAction = 0, cEmotion = 0;
  let bShared = 0, bPrivate = 0;
  let kInstant = 0, kDelayed = 0;

  Object.values(answers).forEach(val => {
    if (val === 'F_high') fHigh++;
    if (val === 'F_low') fLow++;
    if (val === 'C_action') cAction++;
    if (val === 'C_emotion') cEmotion++;
    if (val === 'B_shared') bShared++;
    if (val === 'B_private') bPrivate++;
    if (val === 'K_instant') kInstant++;
    if (val === 'K_delayed') kDelayed++;
  });

  const fResult = fHigh >= fLow ? 'E' : 'I';
  const cResult = cAction >= cEmotion ? 'A' : 'V';
  const bResult = bShared >= bPrivate ? 'M' : 'S';
  const kResult = kInstant >= kDelayed ? 'R' : 'D';

  const resultString = `${fResult}${cResult}${bResult}${kResult}`;
  const profile = PROFILES[resultString] || DEFAULT_PROFILE;

  const fTotal = fHigh + fLow || 1;
  const cTotal = cAction + cEmotion || 1;
  const bTotal = bShared + bPrivate || 1;
  const kTotal = kInstant + kDelayed || 1;

  const fPct = Math.round((fHigh / fTotal) * 100);
  const cPct = Math.round((cAction / cTotal) * 100);
  const bPct = Math.round((bShared / bTotal) * 100);
  const kPct = Math.round((kInstant / kTotal) * 100);

  const bars = [
    { label: '情感频率', left: '内收低频 (I)', right: '外放高频 (E)', pct: fPct },
    { label: '爱之货币', left: '言语情绪 (V)', right: '行为支撑 (A)', pct: cPct },
    { label: '空间边界', left: '独立驻守 (S)', right: '融合共生 (M)', pct: bPct },
    { label: '冲突卸载', left: '延时自愈 (D)', right: '即时清空 (R)', pct: kPct },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-6 md:p-12 flex flex-col items-center bg-[#1E1E1E]"
    >
      <div className="w-full max-w-2xl mt-8">
        <header className="mb-16 text-center">
          <h1 className="text-xl font-light text-white tracking-widest">S.Y.N.C 诊断报告</h1>
          <div className="w-12 h-px bg-indigo-500/50 mx-auto mt-6"></div>
        </header>

        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">{profile.title}</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg mx-auto">{profile.desc}</p>
          </div>

          <div className="space-y-10">
            {bars.map((bar, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between text-xs font-mono text-gray-500 mb-3 tracking-widest uppercase">
                  <span>{bar.left}</span>
                  <span className="text-indigo-400/70">{bar.label}</span>
                  <span>{bar.right}</span>
                </div>
                <div className="h-1 w-full bg-[#2A2A2A] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-500 transition-all duration-1000 ease-out" 
                    style={{ width: `${bar.pct}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-12">
            <button
              onClick={onRestart}
              className="px-12 py-4 rounded-full border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-colors tracking-widest text-sm"
            >
              重新测试
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

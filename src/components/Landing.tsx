import { motion } from 'motion/react';

export function Landing({ onStart }: { onStart: () => void, key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#1E1E1E]"
    >
      <div className="max-w-2xl w-full text-center space-y-16">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white font-sans">
            S.Y.N.C 同步率测试
          </h1>
          <p className="text-lg text-gray-400 font-light tracking-wide">
            测一测你为什么单身，以及你该避开谁
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="w-full md:w-auto px-16 py-4 bg-white text-[#1E1E1E] hover:bg-gray-100 font-medium rounded-full transition-colors tracking-widest"
        >
          开始测试
        </motion.button>
      </div>
    </motion.div>
  );
}

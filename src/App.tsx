/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Landing } from './components/Landing';
import { Quiz } from './components/Quiz';
import { Report } from './components/Report';
import { AnimatePresence } from 'motion/react';

export type AppState = 'landing' | 'quiz' | 'report';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white font-sans selection:bg-indigo-500/30">
      <AnimatePresence mode="wait">
        {appState === 'landing' && (
          <Landing key="landing" onStart={() => setAppState('quiz')} />
        )}
        {appState === 'quiz' && (
          <Quiz 
            key="quiz" 
            onComplete={(finalAnswers) => {
              setAnswers(finalAnswers);
              setAppState('report');
            }} 
          />
        )}
        {appState === 'report' && (
          <Report 
            key="report" 
            answers={answers} 
            onRestart={() => setAppState('landing')} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

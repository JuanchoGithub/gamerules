
import React, { useState, useEffect } from 'react';
import { GameId, Language, RuleContent, FAQ } from '../types.ts';
import { UI_TEXT, GAMES, PIECE_NAMES } from '../constants.ts';
import { GAME_CONTENT } from '../data/gameData.ts';
import BoardSimulator from './BoardSimulator.tsx';

interface GameViewerProps {
  gameId: GameId;
  lang: Language;
}

type ChessPiece = 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king';

const CHESS_MOVES: Record<ChessPiece, { index: number; icon: string; moves: number[] }> = {
  pawn: { index: 52, icon: 'fa-chess-pawn', moves: [44, 36] },
  knight: { index: 36, icon: 'fa-chess-knight', moves: [19, 21, 30, 46, 53, 51, 42, 26] },
  bishop: { index: 36, icon: 'fa-chess-bishop', moves: [0, 9, 18, 27, 45, 54, 63, 15, 22, 29, 43, 50, 57] },
  rook: { index: 36, icon: 'fa-chess-rook', moves: [4, 12, 20, 28, 44, 52, 60, 32, 33, 34, 35, 37, 38, 39] },
  queen: { index: 36, icon: 'fa-chess-queen', moves: [0, 9, 18, 27, 45, 54, 63, 15, 22, 29, 43, 50, 57, 4, 12, 20, 28, 44, 52, 60, 32, 33, 34, 35, 37, 38, 39] },
  king: { index: 36, icon: 'fa-chess-king', moves: [27, 28, 29, 35, 37, 43, 44, 45] },
};

const GameViewer: React.FC<GameViewerProps> = ({ gameId, lang }) => {
  const [content, setContent] = useState<RuleContent | null>(null);
  const [selectedFaq, setSelectedFaq] = useState<FAQ | null>(null);
  const [activeTab, setActiveTab] = useState<'manual' | 'official' | 'guide' | 'strategy' | 'scenarios'>('manual');
  const [selectedPiece, setSelectedPiece] = useState<ChessPiece>('pawn');
  const [activeRuleConfig, setActiveRuleConfig] = useState<string | undefined>(undefined);

  const game = GAMES.find(g => g.id === gameId);
  const t = UI_TEXT[lang];

  useEffect(() => {
    const data = GAME_CONTENT[gameId][lang];
    setContent(data);
    setSelectedFaq(null);
    setActiveTab('manual');
    setActiveRuleConfig(undefined);
  }, [gameId, lang]);

  if (!content) return null;

  const renderMovementGuide = () => {
    const pieceData = CHESS_MOVES[selectedPiece];
    const pieceLabels = PIECE_NAMES[lang];
    const pieceRule = content.rules.find(r => r.title.toLowerCase().includes(pieceLabels[selectedPiece].toLowerCase()));

    return (
      <div className="mt-8 pt-8 border-t border-slate-100">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <i className="fas fa-arrows-alt text-indigo-600"></i>
          {t.movementGuide}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            {(Object.keys(CHESS_MOVES) as ChessPiece[]).map((piece) => (
              <button
                key={piece}
                onClick={() => setSelectedPiece(piece)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl border transition-all ${
                  selectedPiece === piece
                    ? 'bg-indigo-600 border-indigo-700 text-white shadow-md scale-[1.02]'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedPiece === piece ? 'bg-indigo-500' : 'bg-slate-100'}`}>
                  <i className={`fas ${CHESS_MOVES[piece].icon} text-lg`}></i>
                </div>
                <div className="text-left">
                  <span className="font-bold block">{pieceLabels[piece]}</span>
                </div>
                {selectedPiece === piece && <i className="fas fa-chevron-right ml-auto"></i>}
              </button>
            ))}
            {pieceRule && (
              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 mt-4 animate-in slide-in-from-left-2">
                <p className="text-indigo-900 text-sm font-medium leading-relaxed italic">
                   <i className="fas fa-info-circle mr-2"></i>
                   {pieceRule.text}
                </p>
              </div>
            )}
          </div>

          <div className="relative group bg-slate-100 p-6 rounded-2xl">
            <BoardSimulator 
              gameId="chess" 
              mainPiece={{ index: pieceData.index, icon: pieceData.icon }}
              highlightSquares={pieceData.moves}
            />
            <p className="text-center text-slate-400 text-xs mt-4 uppercase tracking-widest font-bold">
              {t.selectPiece}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Fixed Quick Ref */}
      <div className="lg:col-span-1 space-y-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
          <h2 className="text-xl font-bold mb-4 font-serif flex items-center gap-2">
            <i className="fas fa-eye text-indigo-600"></i>
            {lang === 'en' ? 'Board Reference' : 'Tablero de Referencia'}
          </h2>
          <div className="bg-slate-50 p-4 rounded-xl mb-6">
            <BoardSimulator gameId={gameId} config={activeRuleConfig} />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 font-serif">{game?.name[lang]}</h3>
            <p className="text-slate-600 text-sm italic mb-4">{content.overview}</p>
            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
               <h4 className="text-indigo-900 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-1">
                 <i className="fas fa-child"></i> {t.kidFriendly}
               </h4>
               <p className="text-indigo-800 text-xs leading-relaxed">{content.kidFriendly.substring(0, 100)}...</p>
               <button 
                onClick={() => setActiveTab('manual')}
                className="text-indigo-600 text-xs font-bold mt-2 hover:underline"
               >
                 {lang === 'en' ? 'Read full kid-guide' : 'Leer guía completa'}
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Column */}
      <div className="lg:col-span-2 space-y-6">
        <nav className="flex flex-wrap gap-2 p-1 bg-slate-200 rounded-xl overflow-hidden sticky top-20 z-40">
          {[
            { id: 'manual', icon: 'fa-book-open', label: lang === 'en' ? 'The Rulebook' : 'El Manual' },
            { id: 'official', icon: 'fa-scroll', label: t.officialRules },
            { id: 'guide', icon: 'fa-map-signs', label: t.guide },
            { id: 'strategy', icon: 'fa-lightbulb', label: t.strategies },
            { id: 'scenarios', icon: 'fa-chess-board', label: t.scenarios }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setActiveRuleConfig(undefined);
              }}
              className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === tab.id ? 'bg-white text-indigo-600 shadow-sm scale-[1.02]' : 'text-slate-600 hover:bg-slate-300'}`}
            >
              <i className={`fas ${tab.icon} text-xs`}></i>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm min-h-[600px]">
          {activeTab === 'manual' && (
            <div className="animate-fade-in space-y-8 font-serif">
              <div className="border-b border-slate-100 pb-8 text-center">
                 <h2 className="text-4xl font-black text-slate-900 mb-4">{lang === 'en' ? 'Welcome to' : 'Bienvenidos a'} {game?.name[lang]}</h2>
                 <p className="text-slate-500 italic max-w-xl mx-auto">
                    {lang === 'en' ? 'A beginner\'s guide for parents and little champions.' : 'Una guía para principiantes, padres y pequeños campeones.'}
                 </p>
              </div>
              
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-lg">
                <div className="whitespace-pre-wrap font-sans">
                  {content.manual}
                </div>
              </div>

              <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 font-sans shadow-sm">
                 <h3 className="text-2xl font-black text-amber-900 mb-4 flex items-center gap-3">
                   <i className="fas fa-magic"></i>
                   {lang === 'en' ? 'Special "House" Rules for Kids' : 'Reglas Especiales "de Casa" para Chicos'}
                 </h3>
                 <p className="text-amber-800 text-lg mb-6 leading-relaxed italic">
                   {content.kidFriendly}
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {content.houseRules.map((hr, i) => (
                     <div key={i} className="bg-white p-4 rounded-2xl border border-amber-200 text-sm text-slate-700 flex items-start gap-3">
                        <i className="fas fa-home text-amber-500 mt-1"></i>
                        {hr}
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'official' && (
            <div className="space-y-6 animate-fade-in font-sans">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-layer-group text-indigo-600"></i>
                  {lang === 'en' ? 'How to Set Up the Board' : 'Cómo Preparar el Tablero'}
                </h3>
                <div className="text-slate-700 leading-relaxed text-lg bg-slate-50 p-8 rounded-2xl border border-slate-200 whitespace-pre-wrap font-sans">
                  {content.setup}
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-6 mt-12">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <i className="fas fa-scroll text-indigo-600"></i>
                    {t.officialRules}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium italic hidden md:block">
                    {lang === 'en' ? 'Click a rule to see it on the board' : 'Tocá una regla para verla en el tablero'}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {content.rules.map((rule, i) => (
                    <div 
                      key={i} 
                      onClick={() => setActiveRuleConfig(rule.boardConfig)}
                      className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${activeRuleConfig === rule.boardConfig ? 'bg-indigo-600 border-indigo-700 shadow-lg' : 'bg-white border-slate-100 hover:border-indigo-200 hover:bg-slate-50'}`}
                    >
                      <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${activeRuleConfig === rule.boardConfig ? 'bg-white text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                        {i + 1}
                      </span>
                      <div className="flex-grow">
                        <h4 className={`font-bold text-sm uppercase tracking-wider mb-1 ${activeRuleConfig === rule.boardConfig ? 'text-indigo-100' : 'text-slate-400'}`}>{rule.title}</h4>
                        <p className={`text-sm leading-relaxed ${activeRuleConfig === rule.boardConfig ? 'text-white' : 'text-slate-700'}`}>
                          {rule.text}
                        </p>
                      </div>
                      {rule.boardConfig && <i className={`fas fa-play-circle text-xl transition-all ${activeRuleConfig === rule.boardConfig ? 'text-white scale-125' : 'text-slate-200 group-hover:text-indigo-400'}`}></i>}
                    </div>
                  ))}
                </div>
              </div>
              {gameId === 'chess' && renderMovementGuide()}
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-8 animate-fade-in font-sans">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-3 flex items-center justify-center gap-3">
                  <i className="fas fa-map-signs text-indigo-600"></i>
                  {lang === 'en' ? 'First Game Walkthrough' : 'Tu Primer Partida'}
                </h3>
                <p className="text-slate-500">{lang === 'en' ? 'Follow these steps to understand how a typical match flows.' : 'Seguí estos pasos para entender cómo fluye una partida típica.'}</p>
              </div>
              <div className="space-y-16">
                {content.stepByStep.map((step, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-indigo-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-indigo-100">
                          {step.round}
                        </div>
                        <div>
                          <h4 className="font-black text-2xl text-slate-900">{lang === 'en' ? `Turn ${step.round}` : `Jugada ${step.round}`}</h4>
                          <div className="h-1 w-12 bg-indigo-200 rounded-full mt-1"></div>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-xl font-medium">{step.description}</p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">
                          {lang === 'en' ? 'The Logic' : 'La Lógica'}
                        </span>
                      </div>
                    </div>
                    {step.boardConfig && (
                      <div className="flex-1 w-full bg-slate-100 p-6 rounded-[2rem] border border-slate-200 shadow-inner group transition-all hover:scale-[1.02]">
                        <BoardSimulator gameId={gameId} config={step.boardConfig} />
                        <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                           <i className="fas fa-mouse-pointer animate-bounce"></i>
                           {lang === 'en' ? 'Live Simulator' : 'Simulador Vivo'}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'strategy' && (
            <div className="space-y-12 animate-fade-in font-sans">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 shadow-sm">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-emerald-800">
                    <i className="fas fa-trophy"></i>
                    {t.strategies}
                  </h3>
                  <div className="space-y-4">
                    {content.strategies.map((tip, i) => (
                      <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-emerald-100 group transition-all hover:-translate-y-1">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          <i className="fas fa-check text-xs"></i>
                        </div>
                        <span className="text-emerald-900 text-lg font-bold leading-tight">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100 shadow-sm">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-rose-800">
                    <i className="fas fa-skull-crossbones"></i>
                    {t.pitfalls}
                  </h3>
                  <div className="space-y-4">
                    {content.pitfalls.map((error, i) => (
                      <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-rose-100 group transition-all hover:-translate-y-1">
                        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                          <i className="fas fa-times text-xs"></i>
                        </div>
                        <span className="text-rose-900 text-lg font-bold leading-tight">{error}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-indigo-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 opacity-10">
                   <i className="fas fa-brain text-[20rem]"></i>
                </div>
                <h3 className="text-3xl font-black mb-8 relative z-10 flex items-center gap-3">
                  <i className="fas fa-question-circle"></i>
                  {lang === 'en' ? 'Expert FAQ' : 'Consultas Expertas'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  {content.faqs.map((faq, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                      <h4 className="font-bold text-lg mb-2 text-indigo-200">Q: {faq.question}</h4>
                      <p className="text-white/80 leading-relaxed italic">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scenarios' && (
            <div className="space-y-8 animate-fade-in font-sans">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-2">{t.scenarios}</h3>
                <p className="text-slate-500">{lang === 'en' ? 'Special situations and how to handle them like a pro.' : 'Situaciones especiales y cómo manejarlas como un experto.'}</p>
              </div>
              <div className="grid grid-cols-1 gap-12">
                {content.scenarios.map((scenario, i) => (
                  <div key={i} className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-10 space-y-6">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${scenario.isPitfall ? 'bg-red-100 text-red-600' : 'bg-indigo-100 text-indigo-600'}`}>
                            {scenario.isPitfall ? (lang === 'en' ? 'DANGER ZONE' : 'ZONA DE PELIGRO') : (lang === 'en' ? 'SPECIAL MOVE' : 'JUGADA ESPECIAL')}
                          </span>
                        </div>
                        <h4 className="text-3xl font-black text-slate-900">{scenario.title}</h4>
                        <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">{scenario.description}</p>
                        <button 
                          onClick={() => setActiveRuleConfig(scenario.boardConfig)}
                          className="flex items-center gap-2 text-indigo-600 font-bold group-hover:translate-x-2 transition-transform"
                        >
                          {lang === 'en' ? 'Visualise on Board' : 'Visualizar en Tablero'}
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                      <div className="bg-slate-100 p-8 flex items-center justify-center min-h-[300px] border-l border-slate-200">
                        {scenario.boardConfig && (
                          <div className="w-full max-w-[280px]">
                            <BoardSimulator gameId={gameId} config={scenario.boardConfig} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameViewer;

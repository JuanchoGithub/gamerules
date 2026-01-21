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
  const [activeTab, setActiveTab] = useState<'official' | 'kids' | 'guide' | 'strategy' | 'scenarios'>('official');
  const [selectedPiece, setSelectedPiece] = useState<ChessPiece>('pawn');
  const [activeRuleConfig, setActiveRuleConfig] = useState<string | undefined>(undefined);

  const game = GAMES.find(g => g.id === gameId);
  const t = UI_TEXT[lang];

  useEffect(() => {
    const data = GAME_CONTENT[gameId][lang];
    setContent(data);
    setSelectedFaq(null);
    setActiveTab('official');
    setActiveRuleConfig(undefined);
  }, [gameId, lang]);

  if (!content) return null;

  const renderMovementGuide = () => {
    const pieceData = CHESS_MOVES[selectedPiece];
    const pieceLabels = PIECE_NAMES[lang];
    const pieceRule = content.rules.find(r => r.text.toLowerCase().includes(pieceLabels[selectedPiece].toLowerCase()));

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
      {/* Left Column */}
      <div className="lg:col-span-1 space-y-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold mb-4 font-serif flex items-center gap-2">
            <i className="fas fa-eye text-indigo-600"></i>
            {lang === 'en' ? 'Quick Reference' : 'Referencia Rápida'}
          </h2>
          <BoardSimulator gameId={gameId} config={activeRuleConfig} />
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2 font-serif">{game?.name[lang]}</h3>
            <p className="text-slate-600 text-sm italic">{content.overview}</p>
          </div>
        </div>

        <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-4 font-serif flex items-center gap-2">
            <i className="fas fa-question-circle"></i>
            {lang === 'en' ? 'Common Questions' : 'Preguntas Frecuentes'}
          </h2>
          <div className="space-y-3">
            {content.faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setSelectedFaq(faq)}
                className={`w-full text-left p-3 rounded-xl border transition-all text-sm font-medium ${
                  selectedFaq?.question === faq.question 
                    ? 'bg-white text-indigo-900 border-white' 
                    : 'bg-indigo-800 border-indigo-700 hover:bg-indigo-700 text-indigo-100'
                }`}
              >
                {faq.question}
              </button>
            ))}
          </div>
          {selectedFaq && (
            <div className="mt-6 p-4 bg-indigo-800/50 rounded-xl border border-indigo-700/50 animate-fade-in">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{selectedFaq.answer}</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Column */}
      <div className="lg:col-span-2 space-y-6">
        <nav className="flex flex-wrap gap-2 p-1 bg-slate-200 rounded-xl overflow-hidden">
          {['official', 'kids', 'guide', 'strategy', 'scenarios'].map((tab) => (
            <button 
              key={tab}
              onClick={() => {
                setActiveTab(tab as any);
                setActiveRuleConfig(undefined);
              }}
              className={`flex-1 min-w-[120px] py-2 px-4 rounded-lg font-semibold text-sm transition-all ${activeTab === tab ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:bg-slate-300'}`}
            >
              {tab === 'guide' ? (lang === 'en' ? 'Guided Start' : 'Inicio Guiado') : (t as any)[tab + 'Rules'] || (t as any)[tab] || tab}
            </button>
          ))}
        </nav>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm min-h-[400px]">
          {activeTab === 'official' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <i className="fas fa-layer-group text-indigo-600"></i>
                  {lang === 'en' ? 'Setup' : 'Preparación'}
                </h3>
                <p className="text-slate-600 leading-relaxed">{content.setup}</p>
              </div>
              <hr className="border-slate-100" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <i className="fas fa-scroll text-indigo-600"></i>
                    {t.officialRules}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium italic">
                    {lang === 'en' ? 'Click a rule to see it on the board' : 'Tocá una regla para verla en el tablero'}
                  </span>
                </div>
                <ul className="space-y-2">
                  {content.rules.map((rule, i) => (
                    <li 
                      key={i} 
                      onClick={() => setActiveRuleConfig(rule.boardConfig)}
                      className={`group flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${activeRuleConfig === rule.boardConfig ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-transparent hover:bg-slate-50'}`}
                    >
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${activeRuleConfig === rule.boardConfig ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {i + 1}
                      </span>
                      <span className={`text-sm leading-relaxed ${activeRuleConfig === rule.boardConfig ? 'text-indigo-900 font-medium' : 'text-slate-700'}`}>
                        {rule.text}
                      </span>
                      {rule.boardConfig && <i className={`fas fa-eye ml-auto text-xs mt-1 transition-opacity ${activeRuleConfig === rule.boardConfig ? 'opacity-100 text-indigo-500' : 'opacity-0 group-hover:opacity-100 text-slate-300'}`}></i>}
                    </li>
                  ))}
                </ul>
              </div>
              {gameId === 'chess' && renderMovementGuide()}
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <i className="fas fa-map-signs text-indigo-600"></i>
                {lang === 'en' ? 'Step-by-Step Training' : 'Entrenamiento Paso a Paso'}
              </h3>
              <div className="space-y-12">
                {content.stepByStep.map((step, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start border-b border-slate-100 pb-12 last:border-0 last:pb-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-200">
                          {step.round}
                        </span>
                        <h4 className="font-bold text-xl">{lang === 'en' ? `Round ${step.round}` : `Jugada ${step.round}`}</h4>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                    </div>
                    {step.boardConfig && (
                      <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 shadow-inner">
                        <BoardSimulator gameId={gameId} config={step.boardConfig} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'kids' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-800">
                  <i className="fas fa-child"></i>
                  {t.kidFriendly}
                </h3>
                <p className="text-amber-900 leading-relaxed whitespace-pre-wrap">{content.kidFriendly}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                   <i className="fas fa-home"></i>
                   {lang === 'en' ? 'House Rules' : 'Reglas de la Casa'}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {content.houseRules.map((hr, i) => (
                    <li key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700 text-sm italic">
                      {hr}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'strategy' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-600">
                    <i className="fas fa-lightbulb"></i>
                    {t.strategies}
                  </h3>
                  <ul className="space-y-3">
                    {content.strategies.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                        <i className="fas fa-check-circle mt-1 text-indigo-500"></i>
                        <span className="text-indigo-900 text-sm font-medium">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600">
                    <i className="fas fa-times-circle"></i>
                    {t.pitfalls}
                  </h3>
                  <ul className="space-y-3">
                    {content.pitfalls.map((error, i) => (
                      <li key={i} className="flex items-start gap-3 bg-red-50/50 p-3 rounded-xl border border-red-100">
                        <i className="fas fa-exclamation-circle mt-1 text-red-400"></i>
                        <span className="text-red-900 text-sm font-medium">{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scenarios' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-chess-board text-indigo-600"></i>
                {t.scenarios}
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {content.scenarios.map((scenario, i) => (
                  <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 transition-colors">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-indigo-700">{scenario.title}</h4>
                        <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-wrap">{scenario.description}</p>
                      </div>
                      {scenario.boardConfig && (
                        <div className="scale-90 origin-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                          <BoardSimulator gameId={gameId} config={scenario.boardConfig} />
                        </div>
                      )}
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
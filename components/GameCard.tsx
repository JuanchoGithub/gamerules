
import React from 'react';
import { GameInfo, Language, GameId } from '../types';

interface GameCardProps {
  game: GameInfo;
  lang: Language;
  onClick: () => void;
}

const BoardHero: React.FC<{ gameId: GameId; color: string }> = ({ gameId, color }) => {
  const colorMap: Record<string, string> = {
    indigo: 'bg-indigo-600',
    rose: 'bg-rose-600',
    amber: 'bg-amber-600',
    emerald: 'bg-emerald-600',
    orange: 'bg-orange-600',
    teal: 'bg-teal-600'
  };

  const renderVisual = () => {
    switch (gameId) {
      case 'chess':
        return (
          <div className="grid grid-cols-4 grid-rows-4 w-32 h-32 border-2 border-white/20 rotate-12 shadow-2xl">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={(Math.floor(i / 4) + (i % 4)) % 2 === 0 ? 'bg-white/10' : 'bg-black/10'}>
                {i === 5 && <i className="fas fa-chess-knight text-white/80 text-xl flex items-center justify-center h-full"></i>}
              </div>
            ))}
          </div>
        );
      case 'checkers':
        return (
          <div className="grid grid-cols-4 grid-rows-4 w-32 h-32 border-2 border-white/20 -rotate-12 shadow-2xl">
            {Array.from({ length: 16 }).map((_, i) => {
               const isDark = (Math.floor(i / 4) + (i % 4)) % 2 === 1;
               return (
                <div key={i} className={`flex items-center justify-center ${isDark ? 'bg-slate-800/40' : 'bg-white/5'}`}>
                  {isDark && i < 4 && <div className="w-4 h-4 rounded-full bg-white/40 border border-white/20"></div>}
                  {isDark && i > 11 && <div className="w-4 h-4 rounded-full bg-rose-500/60 border border-rose-400/40"></div>}
                </div>
               );
            })}
          </div>
        );
      case 'backgammon':
        return (
          <div className="flex w-36 h-24 bg-amber-900/40 rounded-sm border-2 border-white/20 p-1 gap-1 shadow-2xl">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={`flex-1 h-8 ${i % 2 === 0 ? 'bg-amber-100/20' : 'bg-amber-950/40'} clip-path-triangle-down`}></div>
                ))}
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={`flex-1 h-8 ${i % 2 !== 0 ? 'bg-amber-100/20' : 'bg-amber-950/40'} clip-path-triangle-up`}></div>
                ))}
              </div>
            </div>
            <div className="w-2 bg-amber-950/60 h-full rounded-sm"></div>
            <div className="flex-1 flex flex-col justify-between opacity-60">
              <div className="flex gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={`flex-1 h-8 ${i % 2 === 0 ? 'bg-amber-100/20' : 'bg-amber-950/40'} clip-path-triangle-down`}></div>
                ))}
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={`flex-1 h-8 ${i % 2 !== 0 ? 'bg-amber-100/20' : 'bg-amber-950/40'} clip-path-triangle-up`}></div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'mancala':
        return (
          <div className="w-40 h-20 bg-emerald-900/40 border-4 border-white/20 rounded-full flex items-center justify-around px-4 shadow-2xl">
            <div className="w-6 h-12 rounded-full border-2 border-white/10 bg-black/10"></div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                {[1, 2, 3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-white/20"></div>)}
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-white/20"></div>)}
              </div>
            </div>
            <div className="w-6 h-12 rounded-full border-2 border-white/10 bg-black/10"></div>
          </div>
        );
      case 'escoba':
      case 'chinchon':
        return (
          <div className="relative flex gap-2">
            <div className="w-20 h-28 bg-white rounded-lg shadow-xl flex flex-col p-2 transform -rotate-12 border border-slate-200">
               <span className="text-orange-600 font-bold text-lg">7</span>
               <div className="flex-1 flex items-center justify-center">
                 <i className="fas fa-coins text-3xl text-orange-400"></i>
               </div>
            </div>
            <div className="w-20 h-28 bg-white rounded-lg shadow-xl flex flex-col p-2 absolute left-10 top-2 border border-slate-200">
               <span className="text-slate-800 font-bold text-lg">1</span>
               <div className="flex-1 flex items-center justify-center">
                 <i className="fas fa-sword text-3xl text-slate-400"></i>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`aspect-video relative overflow-hidden flex items-center justify-center ${colorMap[color]}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
      <div className="absolute -right-4 -bottom-4 opacity-10">
        <i className={`fas fa-${gameId === 'chess' ? 'chess' : 'dice-six'} text-[12rem] rotate-12`}></i>
      </div>
      <div className="relative transform transition-transform group-hover:scale-110 duration-500">
        {renderVisual()}
      </div>
      <style>{`
        .clip-path-triangle-down { clip-path: polygon(0 0, 100% 0, 50% 100%); }
        .clip-path-triangle-up { clip-path: polygon(50% 0, 0 100%, 100% 100%); }
      `}</style>
    </div>
  );
};

const GameCard: React.FC<GameCardProps> = ({ game, lang, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <BoardHero gameId={game.id} color={game.color} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-slate-900 text-2xl font-bold font-serif">{game.name[lang]}</h3>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${game.color}-50 text-${game.color}-600`}>
             <i className={`fas ${game.icon} text-lg`}></i>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed line-clamp-2 h-12">
          {game.description[lang]}
        </p>
        <div className={`mt-6 flex items-center font-bold text-${game.color}-600 group-hover:translate-x-2 transition-transform`}>
          {lang === 'en' ? 'Start Learning' : 'Empezar a aprender'}
          <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </div>
      </div>
    </div>
  );
};

export default GameCard;

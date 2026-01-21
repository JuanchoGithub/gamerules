
import React from 'react';
import { GameId } from '../types';

interface BoardSimulatorProps {
  gameId: GameId;
  highlightSquares?: number[]; // For movement visualization
  mainPiece?: { index: number; icon: string };
  config?: string; // Predefined state string
}

type Suit = 'oros' | 'copas' | 'espadas' | 'bastos';

const Card: React.FC<{ val: number; suit: Suit; isSelected?: boolean }> = ({ val, suit, isSelected = false }) => {
  const suitIconMap: Record<Suit, string> = {
    oros: 'fa-coins text-orange-400',
    copas: 'fa-glass-whiskey text-red-400',
    espadas: 'fa-bolt text-blue-400',
    bastos: 'fa-tree text-green-700'
  };

  return (
    <div className={`w-14 h-20 sm:w-16 sm:h-24 bg-white rounded-md border-2 ${isSelected ? 'border-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.5)] scale-105' : 'border-slate-200 shadow-sm'} flex flex-col p-1.5 transition-all relative overflow-hidden group`}>
      <div className="flex items-center justify-between">
        <span className="font-black text-slate-800 text-xs sm:text-sm leading-none">{val}</span>
        <i className={`fas ${suitIconMap[suit].split(' ')[0]} text-[8px] sm:text-[10px] ${suitIconMap[suit].split(' ')[1]}`}></i>
      </div>
      <div className="flex-1 flex items-center justify-center py-1">
        <i className={`fas ${suitIconMap[suit]} text-lg sm:text-2xl drop-shadow-sm`}></i>
      </div>
      <div className="flex items-center justify-between self-end rotate-180">
        <span className="font-black text-slate-800 text-xs sm:text-sm leading-none">{val}</span>
        <i className={`fas ${suitIconMap[suit].split(' ')[0]} text-[8px] sm:text-[10px] ${suitIconMap[suit].split(' ')[1]}`}></i>
      </div>
      {isSelected && (
        <div className="absolute top-0 right-0 p-0.5">
          <i className="fas fa-check-circle text-indigo-500 text-[10px]"></i>
        </div>
      )}
    </div>
  );
};

const BoardSimulator: React.FC<BoardSimulatorProps> = ({ gameId, highlightSquares = [], mainPiece, config }) => {
  const renderPiece = (type: string, color: 'W' | 'B' | 'R', isKing: boolean = false) => {
    if (gameId === 'chess') {
      const colorClass = color === 'W' ? 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]' : 'text-slate-900';
      return <i className={`fas fa-chess-${type} ${colorClass} text-xl z-10`}></i>;
    }
    if (gameId === 'checkers') {
      const bgColor = color === 'R' ? 'bg-red-600 border-red-800' : 'bg-slate-100 border-slate-400';
      return (
        <div className={`w-4/5 h-4/5 rounded-full border-2 shadow-md ${bgColor} flex items-center justify-center z-10`}>
          {isKing && <i className="fas fa-crown text-[10px] text-amber-500 opacity-80"></i>}
        </div>
      );
    }
    return null;
  };

  if (gameId === 'chess') {
    const getSquareContent = (i: number) => {
      const initialMap: Record<number, React.ReactElement> = {
        0: renderPiece('rook', 'B'), 1: renderPiece('knight', 'B'), 2: renderPiece('bishop', 'B'), 3: renderPiece('queen', 'B'), 4: renderPiece('king', 'B'), 5: renderPiece('bishop', 'B'), 6: renderPiece('knight', 'B'), 7: renderPiece('rook', 'B'),
        8: renderPiece('pawn', 'B'), 9: renderPiece('pawn', 'B'), 10: renderPiece('pawn', 'B'), 11: renderPiece('pawn', 'B'), 12: renderPiece('pawn', 'B'), 13: renderPiece('pawn', 'B'), 14: renderPiece('pawn', 'B'), 15: renderPiece('pawn', 'B'),
        48: renderPiece('pawn', 'W'), 49: renderPiece('pawn', 'W'), 50: renderPiece('pawn', 'W'), 51: renderPiece('pawn', 'W'), 52: renderPiece('pawn', 'W'), 53: renderPiece('pawn', 'W'), 54: renderPiece('pawn', 'W'), 55: renderPiece('pawn', 'W'),
        56: renderPiece('rook', 'W'), 57: renderPiece('knight', 'W'), 58: renderPiece('bishop', 'W'), 59: renderPiece('queen', 'W'), 60: renderPiece('king', 'W'), 61: renderPiece('bishop', 'W'), 62: renderPiece('knight', 'W'), 63: renderPiece('rook', 'W')
      };

      if (!config) return initialMap[i];

      if (config === 'chess_round1') {
        const board = { ...initialMap }; delete board[52]; delete board[12];
        board[36] = renderPiece('pawn', 'W'); board[28] = renderPiece('pawn', 'B');
        return board[i];
      }
      if (config === 'chess_round2') {
        const board = { ...initialMap }; delete board[52]; delete board[12]; delete board[62]; delete board[1];
        board[36] = renderPiece('pawn', 'W'); board[28] = renderPiece('pawn', 'B');
        board[45] = renderPiece('knight', 'W'); board[18] = renderPiece('knight', 'B');
        return board[i];
      }
      if (config === 'chess_round3') {
        const board = { ...initialMap }; delete board[52]; delete board[12]; delete board[62]; delete board[1]; delete board[61]; delete board[6];
        board[36] = renderPiece('pawn', 'W'); board[28] = renderPiece('pawn', 'B');
        board[45] = renderPiece('knight', 'W'); board[18] = some piece;
        board[45] = renderPiece('knight', 'W'); board[18] = renderPiece('knight', 'B');
        board[34] = renderPiece('bishop', 'W'); board[21] = renderPiece('knight', 'B');
        return board[i];
      }
      if (config === 'chess_round4') {
        const board = { ...initialMap }; delete board[52]; delete board[12]; delete board[62]; delete board[1]; delete board[61]; delete board[6];
        delete board[60]; delete board[63]; board[62] = renderPiece('king', 'W'); board[61] = renderPiece('rook', 'W');
        board[36] = renderPiece('pawn', 'W'); board[28] = renderPiece('pawn', 'B');
        board[45] = renderPiece('knight', 'W'); board[18] = renderPiece('knight', 'B');
        board[34] = renderPiece('bishop', 'W'); board[21] = renderPiece('knight', 'B');
        return board[i];
      }
      if (config === 'chess_en_passant') {
        if (i === 24) return renderPiece('pawn', 'B');
        if (i === 25) return renderPiece('pawn', 'W');
        return null;
      }
      if (config === 'chess_promotion') {
        if (i === 3) return renderPiece('pawn', 'W');
        return null;
      }
      if (config === 'chess_stalemate') {
        if (i === 0) return renderPiece('king', 'B');
        if (i === 9) return renderPiece('queen', 'W');
        if (i === 18) return renderPiece('king', 'W');
        return null;
      }
      if (config === 'chess_king_move') {
        if (i === 36) return renderPiece('king', 'W');
        return null;
      }
      if (config === 'chess_queen_move') {
        if (i === 36) return renderPiece('queen', 'W');
        return null;
      }
      if (config === 'chess_knight_move') {
        if (i === 36) return renderPiece('knight', 'W');
        return null;
      }
      if (config === 'chess_pawn_move') {
        if (i === 52) return renderPiece('pawn', 'W');
        return null;
      }
      if (config === 'chess_rook_bishop') {
        if (i === 36) return renderPiece('rook', 'W');
        if (i === 18) return renderPiece('bishop', 'B');
        return null;
      }
      if (config === 'chess_check') {
        if (i === 4) return renderPiece('king', 'B');
        if (i === 32) return renderPiece('queen', 'W');
        if (i === 60) return renderPiece('king', 'W');
        return null;
      }
      if (config === 'chess_castling') {
        if (i === 62) return renderPiece('king', 'W');
        if (i === 61) return renderPiece('rook', 'W');
        if (i === 4) return renderPiece('king', 'B');
        return null;
      }
      if (config === 'chess_checkmate') {
        if (i === 0) return renderPiece('king', 'B');
        if (i === 8) return renderPiece('queen', 'W'); 
        if (i === 16) return renderPiece('king', 'W'); 
        return null;
      }
      return null;
    };

    let highlights = [...highlightSquares];
    if (config === 'chess_king_move') highlights = [27, 28, 29, 35, 37, 43, 44, 45];
    if (config === 'chess_pawn_move') highlights = [44, 36];
    if (config === 'chess_knight_move') highlights = [19, 21, 30, 46, 53, 51, 42, 26];

    return (
      <div className="w-full max-w-md mx-auto aspect-square grid grid-cols-8 grid-rows-8 border-4 border-slate-800 rounded-sm overflow-hidden shadow-xl">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const isDark = (row + col) % 2 === 1;
          return (
            <div key={i} className={`flex items-center justify-center relative ${isDark ? 'bg-[#779556]' : 'bg-[#ebecd0]'}`}>
              {highlights.includes(i) && (
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black/20"></div>
                </div>
              )}
              {mainPiece && mainPiece.index === i ? (
                <i className={`fas ${mainPiece.icon} text-indigo-700 text-3xl drop-shadow-md z-10 animate-bounce-short`}></i>
              ) : getSquareContent(i)}
            </div>
          );
        })}
      </div>
    );
  }

  if (gameId === 'checkers') {
    return (
      <div className="w-full max-w-md mx-auto aspect-square grid grid-cols-8 grid-rows-8 border-4 border-slate-900 rounded-sm overflow-hidden shadow-2xl">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const isDark = (row + col) % 2 === 1;
          
          let content = null;
          let highlight = false;
          
          if (!config) {
            if (isDark && row < 3) content = renderPiece('', 'R');
            if (isDark && row > 4) content = renderPiece('', 'W');
          } else if (config === 'checkers_move') {
            if (i === 44) content = renderPiece('', 'W');
            if (i === 35 || i === 37) highlight = true;
          } else if (config === 'checkers_jump' || config === 'checkers_jump_mandatory') {
            if (i === 44) content = renderPiece('', 'W');
            if (i === 35) content = renderPiece('', 'R');
            if (i === 26) highlight = true;
          } else if (config === 'checkers_multi_jump' || config === 'checkers_double') {
            if (i === 53) content = renderPiece('', 'W');
            if (i === 44 || i === 26) content = renderPiece('', 'R');
            if (i === 35 || i === 17) highlight = true;
          } else if (config === 'checkers_king_move') {
            if (i === 35) content = renderPiece('', 'W', true);
            if (i === 26 || i === 44) highlight = true;
          } else if (config === 'checkers_trap') {
             if (i === 35) content = renderPiece('', 'W');
             if (i === 26) content = renderPiece('', 'R');
             if (i === 46) content = renderPiece('', 'W');
             if (i === 28) content = renderPiece('', 'R');
          } else if (config.startsWith('checkers_round')) {
            const rd = parseInt(config.replace('checkers_round', ''));
            if (isDark && row < 3 && i !== 21 && i !== 23) content = renderPiece('', 'R');
            if (isDark && row > 4 && i !== 42 && i !== 40) content = renderPiece('', 'W');
            if (rd >= 1) {
              if (i === 35) content = renderPiece('', 'W');
              if (i === 28) content = renderPiece('', 'R');
            }
          }

          return (
            <div key={i} className={`flex items-center justify-center relative ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`}>
              {highlight && <div className="w-3 h-3 rounded-full bg-white/30 absolute z-0"></div>}
              {content}
            </div>
          );
        })}
      </div>
    );
  }

  if (gameId === 'backgammon') {
    const getCheckersAtPoint = (pt: number) => {
      const setup: Record<number, { count: number; type: 'W' | 'B' }> = {
        1: { count: 2, type: 'W' }, 6: { count: 5, type: 'B' }, 8: { count: 3, type: 'B' }, 12: { count: 5, type: 'W' },
        13: { count: 5, type: 'B' }, 19: { count: 5, type: 'W' }, 17: { count: 3, type: 'W' }, 24: { count: 2, type: 'B' },
      };
      if (!config || config === 'bg_setup') return setup[pt];
      if (config === 'bg_round1') {
        const board = { ...setup }; board[24] = { count: 1, type: 'B' }; board[21] = { count: 1, type: 'B' }; return board[pt];
      }
      if (config === 'bg_hit') { const board = { ...setup }; board[12] = { count: 1, type: 'W' }; return board[pt]; }
      if (config === 'bg_doubles') { return { 5: { count: 4, type: 'W' }, 10: { count: 4, type: 'B' } }[pt]; }
      if (config === 'bg_closed') { return { 5: { count: 3, type: 'B' }, 6: { count: 1, type: 'W' } }[pt]; }
      if (config === 'bg_prime') {
        const p: any = {}; for(let i=7; i<=12; i++) p[i] = { count: 2, type: 'W' }; return p[pt];
      }
      if (config === 'bg_bearing_off') {
        const p: any = {}; for(let i=1; i<=6; i++) p[i] = { count: 2, type: 'W' }; return p[pt];
      }
      if (config === 'bg_bar_reentry') { return { 24: { count: 1, type: 'B' } }[pt]; }
      return setup[pt];
    };

    const Point = ({ pt, isTop }: { pt: number; isTop: boolean; key?: React.Key }) => {
      const checker = getCheckersAtPoint(pt);
      const isOdd = pt % 2 !== 0;
      const bgColor = isTop 
        ? (isOdd ? 'border-t-amber-100' : 'border-t-amber-950')
        : (isOdd ? 'border-b-amber-950' : 'border-b-amber-100');
      return (
        <div className="flex-1 flex flex-col items-center relative h-full">
          <div className={`w-0 h-0 border-x-[15px] border-x-transparent ${isTop ? `border-t-[100px] ${bgColor}` : `mt-auto border-b-[100px] ${bgColor}`}`}></div>
          <div className={`absolute ${isTop ? 'top-0' : 'bottom-0'} inset-x-0 flex flex-col items-center ${!isTop ? 'flex-col-reverse' : ''}`}>
            {checker && Array.from({ length: checker.count }).map((_, idx) => (
              <div 
                key={idx} 
                className={`w-5 h-5 rounded-full border border-slate-800 shadow-sm ${checker.type === 'W' ? 'bg-slate-100' : 'bg-slate-900'} z-10`}
                style={{ marginTop: isTop && idx > 0 ? '-12px' : '0', marginBottom: !isTop && idx > 0 ? '-12px' : '0' }}
              ></div>
            ))}
          </div>
        </div>
      );
    };

    return (
      <div className="w-full max-md mx-auto aspect-video bg-amber-900 p-3 border-4 border-amber-950 rounded-sm flex gap-1 shadow-2xl relative overflow-hidden">
        <div className="flex-1 bg-amber-800 flex flex-col justify-between p-1 rounded-sm">
          <div className="flex h-1/2">{[12, 11, 10, 9, 8, 7].map(pt => <Point key={pt} pt={pt} isTop={true} />)}</div>
          <div className="flex h-1/2">{[13, 14, 15, 16, 17, 18].map(pt => <Point key={pt} pt={pt} isTop={false} />)}</div>
        </div>
        <div className="w-6 bg-amber-950 h-full flex flex-col items-center justify-center gap-2">
          {config === 'bg_hit' && <div className="w-5 h-5 rounded-full bg-slate-100 animate-pulse"></div>}
        </div>
        <div className="flex-1 bg-amber-800 flex flex-col justify-between p-1 rounded-sm">
          <div className="flex h-1/2">{[6, 5, 4, 3, 2, 1].map(pt => <Point key={pt} pt={pt} isTop={true} />)}</div>
          <div className="flex h-1/2">{[19, 20, 21, 22, 23, 24].map(pt => <Point key={pt} pt={pt} isTop={false} />)}</div>
        </div>
      </div>
    );
  }

  if (gameId === 'mancala') {
    const getMancalaState = () => {
      const defaultState = {
        topPits: [4, 4, 4, 4, 4, 4],
        bottomPits: [4, 4, 4, 4, 4, 4],
        topStore: 0,
        bottomStore: 0,
      };
      
      if (config === 'mancala_free_turn') {
        return { ...defaultState, bottomPits: [4, 4, 4, 0, 4, 4], bottomStore: 1 };
      }
      if (config === 'mancala_capture') {
        return { ...defaultState, bottomPits: [4, 1, 0, 4, 4, 4], topPits: [4, 4, 4, 4, 0, 4], bottomStore: 11 };
      }
      if (config === 'mancala_store_hit') {
        return { ...defaultState, bottomPits: [4, 4, 4, 4, 4, 0], bottomStore: 1, topPits: [5, 5, 5, 5, 5, 4] };
      }
      if (config === 'mancala_sowing_lap') {
        return { topPits: [5, 5, 5, 5, 5, 5], bottomPits: [5, 5, 5, 5, 5, 5], topStore: 1, bottomStore: 1 };
      }
      if (config === 'mancala_end') {
        return { topPits: [0, 0, 0, 0, 0, 0], bottomPits: [0, 0, 0, 0, 0, 0], topStore: 22, bottomStore: 26 };
      }
      return defaultState;
    };

    const state = getMancalaState();

    // Fix: Using React.FC to properly type the component so it accepts the 'key' prop in JSX
    const Gem: React.FC<{ index: number }> = ({ index }) => {
      const colors = [
        'bg-rose-400 shadow-rose-600/50',
        'bg-sky-400 shadow-sky-600/50',
        'bg-emerald-400 shadow-emerald-600/50',
        'bg-amber-400 shadow-amber-600/50',
        'bg-violet-400 shadow-violet-600/50',
        'bg-orange-400 shadow-orange-600/50'
      ];
      const color = colors[index % colors.length];
      
      return (
        <div 
          className={`w-2 h-2 rounded-full ${color} shadow-sm border border-white/20 relative overflow-hidden`}
          style={{ 
            transform: `rotate(${index * 45}deg) translate(${index % 2 === 0 ? '1px' : '-1px'}, ${index % 3 === 0 ? '1px' : '-1px'})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent"></div>
        </div>
      );
    };

    const GemGroup = ({ count }: { count: number }) => {
      if (count === 0) return null;
      return (
        <div className="flex flex-wrap gap-0.5 p-1 justify-center items-center">
          {Array.from({ length: Math.min(count, 12) }).map((_, i) => (
            <Gem key={i} index={i} />
          ))}
          {count > 12 && <div className="text-[8px] text-white font-black drop-shadow-md">+{count - 12}</div>}
        </div>
      );
    };

    return (
      <div className="w-full max-w-md mx-auto aspect-video bg-gradient-to-br from-amber-950 to-amber-900 p-4 border-[12px] border-amber-950 rounded-[4rem] flex items-center justify-around shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] relative">
        {/* Top Store */}
        <div className="w-14 h-[85%] rounded-full bg-gradient-to-b from-black/40 to-black/10 shadow-inner flex flex-col items-center justify-center border border-white/5">
          <GemGroup count={state.topStore} />
          <span className="text-[10px] text-amber-200/40 mt-2 font-black tracking-tighter">{state.topStore}</span>
        </div>
        
        {/* Pits Area */}
        <div className="flex-1 flex flex-col gap-6 px-4 h-full py-4">
          <div className="flex justify-between flex-row-reverse">
            {state.topPits.map((count, i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-b from-black/40 to-black/10 shadow-inner flex flex-col items-center justify-center relative border border-white/5">
                <GemGroup count={count} />
                <span className="absolute -top-5 text-[10px] text-amber-500/60 font-black">{count}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {state.bottomPits.map((count, i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-b from-black/40 to-black/10 shadow-inner flex flex-col items-center justify-center relative border border-white/5">
                <GemGroup count={count} />
                <span className="absolute -bottom-5 text-[10px] text-amber-500/60 font-black">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Store */}
        <div className="w-14 h-[85%] rounded-full bg-gradient-to-b from-black/40 to-black/10 shadow-inner flex flex-col items-center justify-center border border-white/5">
          <GemGroup count={state.bottomStore} />
          <span className="text-[10px] text-amber-200/40 mt-2 font-black tracking-tighter">{state.bottomStore}</span>
        </div>

        {/* Wood Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay overflow-hidden rounded-[3rem]">
           <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)]"></div>
        </div>
      </div>
    );
  }

  if (gameId === 'escoba') {
    const tableCards: { val: number; suit: Suit }[] = [
      { val: 1, suit: 'oros' }, { val: 2, suit: 'copas' }, { val: 7, suit: 'espadas' }, { val: 4, suit: 'bastos' }
    ];
    const handCards: { val: number; suit: Suit }[] = [{ val: 7, suit: 'oros' }, { val: 3, suit: 'copas' }, { val: 12, suit: 'espadas' }];
    
    let selectedHandIdx = 0;
    let selectedTableIdxs: number[] = [];

    if (config === 'escoba_sum15') { selectedTableIdxs = [2, 1, 3]; }
    if (config === 'escoba_clear') { selectedTableIdxs = [0, 1, 2, 3]; }

    return (
      <div className="w-full max-w-md mx-auto flex flex-col gap-6 p-4 bg-orange-50/50 rounded-2xl border border-orange-100 shadow-inner">
        <div className="space-y-2">
          <h4 className="text-[10px] uppercase font-black text-orange-900/40 text-center tracking-widest">En la Mesa</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {tableCards.map((c, i) => (
              <Card key={i} val={c.val} suit={c.suit} isSelected={selectedTableIdxs.includes(i)} />
            ))}
          </div>
        </div>
        <div className="h-px bg-orange-200/50 w-full"></div>
        <div className="space-y-2">
          <h4 className="text-[10px] uppercase font-black text-orange-900/40 text-center tracking-widest">Tu Mano</h4>
          <div className="flex justify-center gap-4">
            {handCards.map((c, i) => (
              <Card key={i} val={c.val} suit={c.suit} isSelected={i === selectedHandIdx} />
            ))}
          </div>
        </div>
        {config === 'escoba_sum15' && (
          <div className="bg-orange-600 text-white text-center py-1 rounded-full text-xs font-bold animate-pulse">
            7 (Mano) + 1 (Oro) + 7 (Espada) = 15!
          </div>
        )}
      </div>
    );
  }

  if (gameId === 'chinchon') {
    const meld: { val: number; suit: Suit }[] = [
      { val: 4, suit: 'copas' }, { val: 4, suit: 'oros' }, { val: 4, suit: 'espadas' }
    ];
    const run: { val: number; suit: Suit }[] = [
      { val: 1, suit: 'bastos' }, { val: 2, suit: 'bastos' }, { val: 3, suit: 'bastos' }
    ];
    const dead: { val: number; suit: Suit }[] = [{ val: 12, suit: 'oros' }];

    if (config === 'chinchon_meld') {
      return (
        <div className="w-full max-w-md mx-auto flex flex-col gap-6 p-4 bg-teal-50/50 rounded-2xl border border-teal-100 shadow-inner">
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase font-black text-teal-900/40 text-center tracking-widest">Juegos Armados</h4>
            <div className="flex justify-center gap-2">
              {meld.map((c, i) => <Card key={i} val={c.val} suit={c.suit} />)}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase font-black text-teal-900/40 text-center tracking-widest">Cartas Sueltas</h4>
            <div className="flex justify-center">
              <Card val={12} suit="oros" isSelected={true} />
            </div>
          </div>
        </div>
      );
    }

    if (config === 'chinchon_victory') {
      const fullRun: { val: number; suit: Suit }[] = [1,2,3,4,5,6,7].map(v => ({ val: v, suit: 'oros' }));
      return (
        <div className="w-full max-w-md mx-auto flex flex-col gap-4 p-4 bg-teal-600 rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 flex flex-wrap gap-4 rotate-12">
            {Array.from({ length: 20 }).map((_, i) => <i key={i} className="fas fa-crown text-4xl"></i>)}
          </div>
          <h4 className="text-white text-center font-black text-xl z-10 italic">¡CHINCHÓN!</h4>
          <div className="flex flex-wrap justify-center gap-1.5 z-10">
            {fullRun.map((c, i) => <div key={i} className="scale-75 origin-top"><Card val={c.val} suit={c.suit} /></div>)}
          </div>
        </div>
      );
    }

    return (
      <div className="w-full max-w-md mx-auto flex flex-wrap justify-center gap-2 p-4">
        {[...meld, ...run, ...dead].map((c, i) => <Card key={i} val={c.val} suit={c.suit} />)}
      </div>
    );
  }

  return null;
};

export default BoardSimulator;

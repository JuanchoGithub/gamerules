
import React from 'react';
import { GameId } from '../types';

interface BoardSimulatorProps {
  gameId: GameId;
  highlightSquares?: number[]; // For movement visualization
  mainPiece?: { index: number; icon: string };
  config?: string; // Predefined state string
}

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

      // Configuration-based overrides
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
      
      // Inherit basic ones
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

    // Calculate highlights for specific move rules
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
        <style>{`
          @keyframes bounce-short {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .animate-bounce-short {
            animation: bounce-short 1.5s ease-in-out infinite;
          }
        `}</style>
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
        1: { count: 2, type: 'W' },
        6: { count: 5, type: 'B' },
        8: { count: 3, type: 'B' },
        12: { count: 5, type: 'W' },
        13: { count: 5, type: 'B' },
        19: { count: 5, type: 'W' },
        17: { count: 3, type: 'W' },
        24: { count: 2, type: 'B' },
      };

      if (!config || config === 'bg_setup') return setup[pt];

      if (config === 'bg_round1') {
        const board = { ...setup };
        board[24] = { count: 1, type: 'B' };
        board[21] = { count: 1, type: 'B' };
        return board[pt];
      }
      
      if (config === 'bg_hit') {
        const board = { ...setup };
        board[12] = { count: 1, type: 'W' };
        return board[pt];
      }

      if (config === 'bg_doubles') {
        return { 5: { count: 4, type: 'W' }, 10: { count: 4, type: 'B' } }[pt];
      }

      if (config === 'bg_closed') {
        return { 5: { count: 3, type: 'B' }, 6: { count: 1, type: 'W' } }[pt];
      }

      if (config === 'bg_prime') {
        const p: any = {};
        for(let i=7; i<=12; i++) p[i] = { count: 2, type: 'W' };
        return p[pt];
      }

      if (config === 'bg_bearing_off') {
        const p: any = {};
        for(let i=1; i<=6; i++) p[i] = { count: 2, type: 'W' };
        return p[pt];
      }

      if (config === 'bg_bar_reentry') {
        return { 24: { count: 1, type: 'B' } }[pt];
      }

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
                style={{ 
                  marginTop: isTop && idx > 0 ? '-12px' : '0',
                  marginBottom: !isTop && idx > 0 ? '-12px' : '0'
                }}
              ></div>
            ))}
          </div>
          <span className={`absolute ${isTop ? '-top-4' : '-bottom-4'} text-[10px] text-amber-200/50 font-bold`}>{pt}</span>
        </div>
      );
    };

    return (
      <div className="w-full max-md mx-auto aspect-video bg-amber-900 p-3 border-4 border-amber-950 rounded-sm flex gap-1 shadow-2xl overflow-hidden relative">
        {/* Left Quadrant */}
        <div className="flex-1 bg-amber-800 flex flex-col justify-between p-1 rounded-sm">
          <div className="flex h-1/2">{[12, 11, 10, 9, 8, 7].map(pt => <Point key={pt} pt={pt} isTop={true} />)}</div>
          <div className="flex h-1/2">{[13, 14, 15, 16, 17, 18].map(pt => <Point key={pt} pt={pt} isTop={false} />)}</div>
        </div>
        
        {/* Central Bar */}
        <div className="w-6 bg-amber-950 h-full flex flex-col items-center justify-center gap-2 border-x border-amber-900 shadow-inner">
          {config === 'bg_hit' && (
            <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-400 shadow-lg animate-pulse"></div>
          )}
          {config === 'bg_bar_reentry' && (
            <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 shadow-lg"></div>
          )}
        </div>

        {/* Right Quadrant (Home Boards) */}
        <div className="flex-1 bg-amber-800 flex flex-col justify-between p-1 rounded-sm">
          <div className="flex h-1/2">{[6, 5, 4, 3, 2, 1].map(pt => <Point key={pt} pt={pt} isTop={true} />)}</div>
          <div className="flex h-1/2">{[19, 20, 21, 22, 23, 24].map(pt => <Point key={pt} pt={pt} isTop={false} />)}</div>
        </div>
        
        {/* Indicator labels */}
        <div className="absolute top-1 left-4 text-[8px] text-amber-500 font-mono uppercase opacity-50">Outer Board</div>
        <div className="absolute top-1 right-4 text-[8px] text-amber-500 font-mono uppercase opacity-50">Home Board</div>
      </div>
    );
  }

  if (gameId === 'mancala') {
    const getPits = () => {
      const initial = {
        top: [4, 4, 4, 4, 4, 4],
        bottom: [4, 4, 4, 4, 4, 4],
        storeLeft: 0,
        storeRight: 0,
        highlightedPits: [] as number[],
        specialMessage: '',
        direction: 'counter-clockwise' as const
      };

      if (!config || config === 'mancala_setup') return initial;

      if (config === 'mancala_free_turn') {
        return {
          ...initial,
          bottom: [4, 4, 0, 4, 4, 4],
          storeRight: 1,
          top: [4, 4, 4, 4, 4, 4],
          highlightedPits: [2],
          specialMessage: 'FREE TURN!'
        };
      }

      if (config === 'mancala_capture') {
        return {
          ...initial,
          top: [0, 4, 4, 4, 4, 4],
          bottom: [4, 4, 4, 1, 4, 4],
          storeLeft: 0,
          storeRight: 5,
          highlightedPits: [3],
          specialMessage: 'CAPTURE!'
        };
      }

      if (config === 'mancala_sowing_lap') {
        return {
          top: [5, 5, 5, 5, 5, 4],
          bottom: [0, 4, 4, 4, 4, 4],
          storeLeft: 0,
          storeRight: 1,
          highlightedPits: [0],
          specialMessage: 'LAPPING...'
        };
      }

      if (config === 'mancala_store_hit') {
        return {
          ...initial,
          bottom: [4, 4, 4, 4, 4, 0],
          storeRight: 1,
          top: [5, 5, 5, 4, 4, 4],
          highlightedPits: [5]
        };
      }

      if (config === 'mancala_end') {
        return {
          top: [0, 0, 0, 0, 0, 0],
          bottom: [0, 0, 0, 0, 0, 0],
          storeLeft: 23,
          storeRight: 25,
          highlightedPits: [],
          specialMessage: 'GAME OVER'
        };
      }
      return initial;
    };

    const pitsData = getPits();

    const Gem = ({ index }: { index: number; key?: React.Key }) => {
      const colors = ['bg-indigo-500', 'bg-emerald-500', 'bg-rose-500', 'bg-amber-500', 'bg-sky-500', 'bg-fuchsia-500'];
      const shapes = ['rounded-full', 'rounded-sm', 'rounded-tr-lg', 'rounded-bl-lg'];
      const color = colors[index % colors.length];
      const shape = shapes[index % shapes.length];
      return (
        <div className={`w-2.5 h-2.5 ${color} ${shape} shadow-sm border border-black/10 transition-transform hover:scale-125`}></div>
      );
    };

    const Pit = ({ count, isSelected, label }: { count: number; isSelected?: boolean; label: number; key?: React.Key }) => (
      <div className={`w-12 h-12 rounded-full border-2 border-amber-950/70 bg-amber-900/30 flex flex-col items-center justify-center relative shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] transition-all ${isSelected ? 'ring-4 ring-white/60 bg-amber-400/40' : ''}`}>
        <span className="text-amber-950 font-black text-lg z-10 drop-shadow-md select-none">{count}</span>
        <div className="flex flex-wrap gap-0.5 justify-center w-10 absolute bottom-1 overflow-hidden h-4">
          {Array.from({ length: Math.min(count, 12) }).map((_, i) => (
            <Gem key={i} index={i} />
          ))}
        </div>
        <span className="absolute -bottom-5 text-[8px] font-bold text-amber-950/60 uppercase tracking-tighter">Pit {label}</span>
      </div>
    );

    return (
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-8 py-4">
        <div className="w-full aspect-[2/1] bg-gradient-to-br from-[#d2b48c] to-[#a67c52] p-6 border-[14px] border-[#4e342e] rounded-[4rem] shadow-[0_25px_60px_rgba(0,0,0,0.4),inset_0_4px_12px_rgba(255,255,255,0.3)] flex items-center justify-between gap-4 relative">
          
          {/* Direction Indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-1/2 border-2 border-dashed border-amber-950/20 rounded-full pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2">
               <i className="fas fa-chevron-left text-[10px] text-amber-950/30"></i>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-2">
               <i className="fas fa-chevron-right text-[10px] text-amber-950/30"></i>
            </div>
          </div>

          {/* Left Store (P2 / Opponent) */}
          <div className="w-18 h-4/5 rounded-full border-4 border-amber-950/60 bg-amber-900/40 flex flex-col items-center justify-center shadow-[inset_0_8px_16px_rgba(0,0,0,0.5)] relative group">
             <span className="text-4xl font-black text-amber-950 drop-shadow-md">{pitsData.storeLeft}</span>
             <div className="absolute -top-6 text-[8px] uppercase font-black text-amber-950/70 tracking-widest text-center whitespace-nowrap">Opponent Almacén</div>
             <div className="flex flex-wrap gap-0.5 justify-center w-12 mt-4 px-1 max-h-16 overflow-hidden">
                {Array.from({ length: Math.min(pitsData.storeLeft, 24) }).map((_, i) => (
                  <Gem key={i} index={i + 10} />
                ))}
             </div>
          </div>

          {/* Play Area */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex justify-between px-3">
              {pitsData.top.map((c, i) => <Pit key={i} count={c} label={6-i} />)}
            </div>
            <div className="flex justify-between px-3">
              {pitsData.bottom.map((c, i) => <Pit key={i} count={c} label={i+1} isSelected={pitsData.highlightedPits.includes(i)} />)}
            </div>
          </div>

          {/* Right Store (P1 / Player) */}
          <div className="w-18 h-4/5 rounded-full border-4 border-amber-950/60 bg-amber-900/40 flex flex-col items-center justify-center shadow-[inset_0_8px_16px_rgba(0,0,0,0.5)] relative group">
             <span className="text-4xl font-black text-amber-950 drop-shadow-md">{pitsData.storeRight}</span>
             <div className="absolute -top-6 text-[8px] uppercase font-black text-amber-950/70 tracking-widest text-center whitespace-nowrap">Tu Almacén</div>
             <div className="flex flex-wrap gap-0.5 justify-center w-12 mt-4 px-1 max-h-16 overflow-hidden">
                {Array.from({ length: Math.min(pitsData.storeRight, 24) }).map((_, i) => (
                  <Gem key={i} index={i + 50} />
                ))}
             </div>
          </div>
        </div>
        
        {pitsData.specialMessage && (
          <div className="bg-amber-100 text-amber-900 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-md animate-bounce border-2 border-amber-300">
            {pitsData.specialMessage}
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default BoardSimulator;

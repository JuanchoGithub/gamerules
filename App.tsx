import React, { useState, useEffect } from 'react';
import { GameId, Language } from './types';
import { GAMES, UI_TEXT } from './constants';
import Layout from './components/Layout';
import GameCard from './components/GameCard';
import GameViewer from './components/GameViewer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [selectedGame, setSelectedGame] = useState<GameId | null>(null);

  // Sync hash with selectedGame
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const gameIds = GAMES.map(g => g.id);
      if (gameIds.includes(hash as GameId)) {
        setSelectedGame(hash as GameId);
      } else {
        setSelectedGame(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'es-ar' : 'en');
  };

  const handleGameSelect = (id: GameId) => {
    window.location.hash = id;
  };

  const t = UI_TEXT[lang];

  return (
    <Layout lang={lang} onLanguageToggle={toggleLanguage}>
      {!selectedGame ? (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-extrabold text-slate-900 font-serif">
              {t.selectGame}
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GAMES.map(game => (
              <GameCard 
                key={game.id} 
                game={game} 
                lang={lang} 
                onClick={() => handleGameSelect(game.id)} 
              />
            ))}
          </div>

          <div className="mt-20 p-12 bg-white rounded-[3rem] border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            <div className="flex-1 space-y-6">
              <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
                {lang === 'en' ? 'New to Board Games?' : '¿Sos nuevo en esto?'}
              </span>
              <h3 className="text-3xl font-bold font-serif">
                {lang === 'en' ? 'Master any game in minutes with our expert guides.' : 'Dominá cualquier juego en minutos con nuestras guías expertas.'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'en' 
                  ? 'We provide deep dives into rules, suggest proven strategies, and visualize complex board scenarios. No more thick manuals!' 
                  : 'Te explicamos las reglas a fondo, te tiramos estrategias probadas y visualizamos las situaciones más complejas. ¡Olvidate de los manuales densos!'}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative group">
                 <div className="absolute inset-0 bg-indigo-400 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <i className="fas fa-graduation-cap text-9xl text-indigo-600 relative"></i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-indigo-50 border-b border-indigo-100 py-4">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
               <button 
                onClick={() => window.location.hash = ''}
                className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
               >
                 <i className="fas fa-chevron-left"></i>
                 {t.back}
               </button>
               <div className="hidden sm:block text-slate-400 font-medium text-sm">
                 BoardMaster &gt; {GAMES.find(g => g.id === selectedGame)?.name[lang]}
               </div>
            </div>
          </div>
          <GameViewer gameId={selectedGame} lang={lang} />
        </div>
      )}
    </Layout>
  );
};

export default App;
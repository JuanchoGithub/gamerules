
import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  onLanguageToggle: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, onLanguageToggle }) => {
  const t = UI_TEXT[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.hash = ''}>
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <i className="fas fa-chess-knight text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-serif">
              {t.title}
            </h1>
          </div>
          
          <button 
            onClick={onLanguageToggle}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700"
          >
            <i className="fas fa-globe"></i>
            {lang === 'en' ? 'English' : 'Español (AR)'}
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} BoardMaster Simulator. {t.subtitle}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

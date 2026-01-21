
import { GameInfo } from './types';

export const GAMES: GameInfo[] = [
  {
    id: 'chess',
    name: {
      en: 'Chess',
      'es-ar': 'Ajedrez'
    },
    description: {
      en: 'A strategic battle of wits. Protect your King and capture the opponent\'s.',
      'es-ar': 'Una batalla estratégica de ingenio. Protegé a tu Rey y capturá al del oponente.'
    },
    icon: 'fa-chess-knight',
    color: 'indigo'
  },
  {
    id: 'checkers',
    name: {
      en: 'Checkers',
      'es-ar': 'Damas'
    },
    description: {
      en: 'Capture all opponent pieces by jumping over them on the grid.',
      'es-ar': 'Capturá todas las piezas del oponente saltando sobre ellas en el tablero.'
    },
    icon: 'fa-circle-dot',
    color: 'rose'
  },
  {
    id: 'backgammon',
    name: {
      en: 'Backgammon',
      'es-ar': 'Backgammon'
    },
    description: {
      en: 'One of the oldest board games, combining luck and deep strategy.',
      'es-ar': 'Uno de los juegos más antiguos, combinando azar y estrategia profunda.'
    },
    icon: 'fa-dice',
    color: 'amber'
  },
  {
    id: 'mancala',
    name: {
      en: 'Mancala',
      'es-ar': 'Mancala'
    },
    description: {
      en: 'A classic "sowing" game. Collect seeds in your store to win.',
      'es-ar': 'Un juego clásico de "siembra". Juntá semillas en tu almacén para ganar.'
    },
    icon: 'fa-gem',
    color: 'emerald'
  },
  {
    id: 'escoba',
    name: {
      en: 'Escoba del 15',
      'es-ar': 'Escoba del 15'
    },
    description: {
      en: 'A classic Spanish card game. Sum to 15 to clear the table!',
      'es-ar': 'Un clásico con cartas españolas. ¡Sumá 15 y barré la mesa!'
    },
    icon: 'fa-broom',
    color: 'orange'
  },
  {
    id: 'chinchon',
    name: {
      en: 'Chinchón',
      'es-ar': 'Chinchón'
    },
    description: {
      en: 'Form sequences or sets. The first to 0 points wins.',
      'es-ar': 'Formá juegos de cartas iguales o escaleras. El que llega a 0 gana.'
    },
    icon: 'fa-layer-group',
    color: 'teal'
  }
];

export const PIECE_NAMES = {
  en: {
    pawn: 'Pawn',
    knight: 'Knight',
    bishop: 'Bishop',
    rook: 'Rook',
    queen: 'Queen',
    king: 'King'
  },
  'es-ar': {
    pawn: 'Peón',
    knight: 'Caballo',
    bishop: 'Alfil',
    rook: 'Torre',
    queen: 'Reina',
    king: 'Rey'
  }
};

export const UI_TEXT = {
  en: {
    title: 'BoardMaster',
    subtitle: 'Learn. Play. Master.',
    selectGame: 'Choose your challenge',
    back: 'Back to Games',
    loading: 'Consulting the Grandmasters...',
    officialRules: 'Official Rules',
    kidFriendly: 'Kid-Friendly Rules',
    strategies: 'Strategy Tips',
    pitfalls: 'Common Pitfalls',
    scenarios: 'Special Situations',
    askAi: 'Ask anything about this game...',
    send: 'Ask',
    placeholder: 'e.g. How does the Knight move?',
    languageToggle: 'Change Language',
    error: 'Oops! The pieces fell off the table. Try again.',
    movementGuide: 'Piece Movement Guide',
    selectPiece: 'Select a piece to see its moves',
    guide: 'Guided Start'
  },
  'es-ar': {
    title: 'BoardMaster',
    subtitle: 'Aprendé. Jugá. Ganá.',
    selectGame: 'Elegí tu desafío',
    back: 'Volver a los Juegos',
    loading: 'Consultando a los Grandes Maestros...',
    officialRules: 'Reglas Oficiales',
    kidFriendly: 'Reglas para Chicos',
    strategies: 'Consejos de Estrategia',
    pitfalls: 'Errores Comunes',
    scenarios: 'Situaciones Especiales',
    askAi: 'Preguntá lo que quieras sobre el juego...',
    send: 'Consultar',
    placeholder: 'ej. ¿Cómo se mueve el caballo?',
    languageToggle: 'Cambiar Idioma',
    error: '¡Uy! Se cayeron las fichas. Probá de nuevo.',
    movementGuide: 'Guía de Movimiento',
    selectPiece: 'Elegí una pieza para ver cómo se mueve',
    guide: 'Inicio Guiado'
  }
};

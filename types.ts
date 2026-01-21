
export type Language = 'en' | 'es-ar';

export type GameId = 'chess' | 'checkers' | 'backgammon' | 'mancala';

export interface GameInfo {
  id: GameId;
  name: {
    en: string;
    'es-ar': string;
  };
  description: {
    en: string;
    'es-ar': string;
  };
  icon: string;
  color: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Step {
  round: number;
  description: string;
  boardConfig?: string;
}

export interface Scenario {
  title: string;
  description: string;
  boardConfig?: string;
}

export interface RuleDetail {
  text: string;
  boardConfig?: string;
}

export interface RuleContent {
  overview: string;
  setup: string;
  rules: RuleDetail[];
  houseRules: string[];
  kidFriendly: string;
  strategies: string[];
  pitfalls: string[];
  stepByStep: Step[];
  scenarios: Scenario[];
  faqs: FAQ[];
}

export type GameDataMap = Record<GameId, Record<Language, RuleContent>>;

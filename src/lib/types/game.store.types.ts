import gameConfig from '@/lib/config/game.config.json';

export type GameStore = typeof gameConfig & {
  prizes: number[];
  currentQuestionIndex: number;
  currentPrize: number;
};

import { createSelector } from 'reselect';

import gameConfig from '@/lib/config/game.config.json';
import { type GameStore } from '@/lib/types/game.store.types';
import { PrizeOptionShape } from '@/lib/types/prizes.types';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

const calculatePrizes = (
  totalPrize: number,
  questionsLength: number,
): number[] => {
  const prizes = [];
  let currentPrize = totalPrize / Math.pow(2, questionsLength - 1);

  for (let i = 0; i < questionsLength; i++) {
    const scalingFactor = currentPrize > 1000 ? 1000 : 100;
    const roundedPrize =
      Math.round(currentPrize / scalingFactor) * scalingFactor;

    prizes.push(roundedPrize > totalPrize ? totalPrize : roundedPrize);
    currentPrize *= 2;
  }

  return prizes;
};

const initialState: GameStore = {
  ...gameConfig,
  prizes: calculatePrizes(gameConfig.totalPrize, gameConfig.questions.length),
  currentQuestionIndex: 0,
  currentPrize: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    onSelectCorrectAnswer: (state) => {
      state.currentPrize = state.prizes[state.currentQuestionIndex];

      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },

    onClearResults: (state) => {
      state.currentQuestionIndex = 0;
      state.currentPrize = 0;
    },
  },
});

export const selectPrizesOptions = createSelector(
  (state: RootState) => state.game.prizes,
  (state: RootState) => state.game.currentQuestionIndex,
  (prizes, currentQuestionIndex): PrizeOptionShape[] =>
    prizes.map((value, idx) => {
      const state =
        currentQuestionIndex === idx
          ? 'active'
          : currentQuestionIndex > idx
            ? 'completed'
            : 'default';

      return { value, state };
    }),
);

export const selectCurrentQuestion = (state: RootState) => {
  const { questions, currentQuestionIndex } = state.game;
  return questions[currentQuestionIndex];
};

export const { onSelectCorrectAnswer, onClearResults } = gameSlice.actions;
export default gameSlice.reducer;

import { useCallback, useRef, useState } from 'react';

import { Theme, useMediaQuery } from '@mui/material';

import { TRANSITION_ACTION_TIMEOUT } from './game-view.constants';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { onChangeViewStep } from '@/lib/store/slices/core.slice';
import {
  onSelectCorrectAnswer,
  selectCurrentQuestion,
  selectPrizesOptions,
} from '@/lib/store/slices/game.slice';
import { Answer } from '@/lib/types/game.config.types';
import { PrizeOptionShape } from '@/lib/types/prizes.types';

export const useGameViewLogic = () => {
  const dispatch = useAppDispatch();
  const prizeOptions: PrizeOptionShape[] = useAppSelector(selectPrizesOptions);
  const { questionText, answers } = useAppSelector(selectCurrentQuestion);
  const { questions, currentQuestionIndex } = useAppSelector(
    (store) => store.game,
  );

  const isInitialOpen = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.up('md'),
  );

  const [open, setOpen] = useState(isInitialOpen);
  const onToggleDrawer = () => setOpen((prev) => !prev);

  const questionRef = useRef<HTMLElement>(null);
  const answersRef = useRef<HTMLElement>(null);

  const [inFade, setInFade] = useState(true);

  const onChooseAnswer = useCallback(
    ({ isCorrect }: Answer) => {
      if (isCorrect) {
        setInFade(false);

        setTimeout(() => {
          dispatch(onSelectCorrectAnswer());
          setInFade(true);
        }, TRANSITION_ACTION_TIMEOUT);
      }

      const isLastQuestion = currentQuestionIndex === questions.length - 1;

      if (isLastQuestion || !isCorrect) {
        setInFade(false);
        dispatch(onChangeViewStep());
      }
    },
    [currentQuestionIndex, dispatch, questions],
  );

  return {
    open,
    showNav: !isInitialOpen,
    prizeOptions,
    questionText,
    answers,
    inFade,
    questionRef,
    answersRef,
    onToggleDrawer,
    onChooseAnswer,
  };
};

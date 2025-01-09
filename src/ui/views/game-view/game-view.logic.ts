import { useState } from 'react';

import { Theme, useMediaQuery } from '@mui/material';

import { useAppSelector } from '@/lib/store/hooks';
import {
  selectCurrentQuestion,
  selectPrizesOptions,
} from '@/lib/store/slices/game.slice';
import { PrizeOptionShape } from '@/lib/types/prizes.types';

export const useGameViewLogic = () => {
  const prizes: PrizeOptionShape[] = useAppSelector(selectPrizesOptions);
  const { questionText, answers } = useAppSelector(selectCurrentQuestion);

  const isInitialOpen = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.up('md'),
  );

  const [open, setOpen] = useState(isInitialOpen);
  const onToggleDrawer = () => setOpen((prev) => !prev);

  return {
    open,
    showNav: !isInitialOpen,
    prizes,
    onToggleDrawer,
    questionText,
    answers,
  };
};

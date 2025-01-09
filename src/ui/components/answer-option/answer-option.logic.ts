import { useState } from 'react';

import { Theme, useMediaQuery } from '@mui/material';

import { type AnswerStatus } from './answer-option.types';
import { type Answer } from '@/lib/types/game.config.types';

const RESULT_REALIZING_DELAY = 1000;

type Props = {
  onClick: () => void;
};

export const useAnswerOptionLogic = ({ onClick }: Props) => {
  const [status, setStatus] = useState<AnswerStatus>('default');

  const handleAnswerClick = (answer: Answer) => {
    setStatus(answer.isCorrect ? 'correct' : 'wrong');
    setTimeout(onClick, RESULT_REALIZING_DELAY);
  };

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  return {
    isMobile,
    status,
    handleAnswerClick,
  };
};

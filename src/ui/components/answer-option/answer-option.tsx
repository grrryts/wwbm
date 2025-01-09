import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import { useAnswerOptionLogic } from './answer-option.logic';
import { useAnswerOptionStyles } from './answer-option.styles';
import { type Answer } from '@/lib/types/game.config.types';

type Props = {
  prefix: string;
  answer: Answer;
  onClick: () => void;
};

const AnswerOption = memo<Props>(({ prefix, answer, onClick }) => {
  const { isMobile } = useAnswerOptionLogic();
  const sx = useAnswerOptionStyles();

  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.shapeWrapper} onClick={onClick}>
        {isMobile ? (
          <svg
            width="288"
            height="56"
            viewBox="0 0 288 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z"
              fill="white"
              stroke="#D0D0D8"
            />
          </svg>
        ) : (
          <svg
            width="389"
            height="72"
            viewBox="0 0 389 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8137 5.09773C25.9857 2.2033 29.3933 0.5 33.012 0.5H355.988C359.607 0.5 363.014 2.2033 365.186 5.09773L388.375 36L365.186 66.9023C363.014 69.7967 359.607 71.5 355.988 71.5H33.012C29.3933 71.5 25.9857 69.7967 23.8137 66.9023L0.625116 36L23.8137 5.09773Z"
              fill="white"
              stroke="#D0D0D8"
            />
          </svg>
        )}

        <Box sx={sx.contentWrapper}>
          <Typography variant="body1" color="primary.main" sx={sx.prefix}>
            {prefix}
          </Typography>

          <Typography variant="body1">{answer.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
});

AnswerOption.displayName = 'AnswerOption';

export default AnswerOption;

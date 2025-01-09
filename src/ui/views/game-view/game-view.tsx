import React, { memo } from 'react';

import { Box, IconButton, SvgIcon, Typography } from '@mui/material';

import { SidebarDrawer } from './components';
import { useGameViewLogic } from './game-view.logic';
import { useGameViewStyles } from './game-view.styles';
import { icons } from '@/lib/constants/icons.constants';
import { AnswerOption } from '@/ui/components';
import PrizeOption from '@/ui/components/prize-option/prize-option';

const prefixMap: Record<number, string> = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
};

//* todo:
//* 2. draw the main content (with adaptive styles)
//* 3. add the logic for the game
//* 4. adaptive styles for large screens

const GameView = memo(() => {
  const { prizes, questionText, answers, showNav, open, onToggleDrawer } =
    useGameViewLogic();
  const sx = useGameViewStyles();

  return (
    <Box sx={sx.wrapper}>
      <SidebarDrawer open={open} onToggleDrawer={onToggleDrawer}>
        <Box sx={sx.prizeList}>
          {prizes.toReversed().map((prize) => (
            <PrizeOption key={prize.value} prize={prize} />
          ))}
        </Box>
      </SidebarDrawer>

      <Box sx={sx.content}>
        {showNav && (
          <Box sx={sx.navBar}>
            <IconButton sx={sx.menuButton} onClick={onToggleDrawer}>
              <SvgIcon component={icons.menuIcon} inheritViewBox />
            </IconButton>
          </Box>
        )}

        <Box sx={sx.questionWrapper}>
          <Typography variant="h2">{questionText}</Typography>
        </Box>

        <Box sx={sx.answersWrapper}>
          {answers.map((answer, idx) => (
            <AnswerOption
              key={answer.text}
              answer={answer}
              prefix={prefixMap[idx]}
              onClick={() => {}} //* todo: provide the action for the answer selection
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
});

GameView.displayName = 'GameView';

export default GameView;

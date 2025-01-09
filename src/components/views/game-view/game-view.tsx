import React, { memo } from 'react';

import { Box, IconButton, SvgIcon, Typography } from '@mui/material';

import { SidebarDrawer } from './components';
import { useGameViewLogic } from './game-view.logic';
import { useGameViewStyles } from './game-view.styles';
import { icons } from '@/constants/icons.constants';

//* todo:
//* 3. add redux toolkit to the project, move the context logic to the store

//* 4. emulate graphql requests with redux toolkit
//* 5. add config for the game

//* 6. draw the sidebar content (with adaptive styles)
//* 7. draw the main content (with adaptive styles)
//* 8. add the logic for the game

const GameView = memo(() => {
  const { showNav, open, onToggleDrawer } = useGameViewLogic();
  const sx = useGameViewStyles();

  return (
    <Box sx={sx.wrapper}>
      <SidebarDrawer open={open} onToggleDrawer={onToggleDrawer} />

      <Box sx={sx.content}>
        {showNav && (
          <Box sx={sx.navBar}>
            <IconButton sx={sx.menuButton} onClick={onToggleDrawer}>
              <SvgIcon component={icons.menuIcon} inheritViewBox />
            </IconButton>
          </Box>
        )}

        <Box sx={sx.questionWrapper}>
          <Typography variant="h2">
            How old your elder brother was 10 years before you was born, mate?
          </Typography>
        </Box>

        <Box sx={sx.answersWrapper}>some answers here</Box>
      </Box>
    </Box>
  );
});

GameView.displayName = 'GameView';

export default GameView;

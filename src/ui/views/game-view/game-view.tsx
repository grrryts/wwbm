import React, { memo } from 'react';

import { CSSTransition } from 'react-transition-group';

import { Box, IconButton, SvgIcon, Typography } from '@mui/material';

import { SidebarDrawer } from './components';
import { TRANSITION_WRAPPER_TIMEOUT, prefixMap } from './game-view.constants';
import { useGameViewLogic } from './game-view.logic';
import { useGameViewStyles } from './game-view.styles';
import { icons } from '@/lib/constants/icons.constants';
import { AnswerOption } from '@/ui/components';
import PrizeOption from '@/ui/components/prize-option/prize-option';
import '@/ui/css-transitions/fade-transition.css';

const GameView = memo(() => {
  const {
    prizeOptions,
    questionText,
    answers,
    showNav,
    open,
    inFade,
    questionRef,
    answersRef,
    onToggleDrawer,
    onChooseAnswer,
  } = useGameViewLogic();
  const sx = useGameViewStyles();

  return (
    <Box sx={sx.wrapper}>
      <SidebarDrawer open={open} onToggleDrawer={onToggleDrawer}>
        <Box sx={sx.prizeList}>
          {prizeOptions.toReversed().map((prize) => (
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
          <CSSTransition
            in={inFade}
            timeout={TRANSITION_WRAPPER_TIMEOUT}
            nodeRef={questionRef}
            classNames="fade"
            unmountOnExit
          >
            <Box ref={questionRef}>
              <Typography variant="h2">{questionText}</Typography>
            </Box>
          </CSSTransition>
        </Box>

        <Box sx={sx.answersWrapper}>
          <CSSTransition
            in={inFade}
            timeout={TRANSITION_WRAPPER_TIMEOUT}
            nodeRef={answersRef}
            classNames="fade"
            unmountOnExit
          >
            <Box ref={answersRef}>
              {answers.map(({ ...answer }, idx) => (
                <AnswerOption
                  key={answer.text}
                  answer={answer}
                  prefix={prefixMap[idx]}
                  onClick={() => onChooseAnswer(answer)}
                />
              ))}
            </Box>
          </CSSTransition>
        </Box>
      </Box>
    </Box>
  );
});

GameView.displayName = 'GameView';

export default GameView;

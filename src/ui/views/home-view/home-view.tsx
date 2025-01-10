'use client';

import React, { memo } from 'react';

import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { Box } from '@mui/material';

import GameView from '../game-view';
import ResultsView from '../results-view';
import WelcomeView from '../welcome-view';
import { useHomeViewLogic } from './home-view.logic';
import { useHomeViewStyles } from './home-view.styles';

const HomeView = memo(() => {
  const { currentStep, nodeRef } = useHomeViewLogic();
  const sx = useHomeViewStyles();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={currentStep}
        nodeRef={nodeRef}
        addEndListener={(done) => {
          nodeRef.current?.addEventListener('transitionend', done, false);
        }}
        classNames="fade"
        unmountOnExit
      >
        <Box ref={nodeRef} sx={sx.wrapper}>
          {(() => {
            switch (currentStep) {
              case 0:
                return <WelcomeView />;

              case 1:
                return <GameView />;

              case 2:
                return <ResultsView />;

              default:
                return <></>;
            }
          })()}
        </Box>
      </CSSTransition>
    </SwitchTransition>
  );
});

HomeView.displayName = 'HomeView';

export default HomeView;

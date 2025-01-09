'use client';

import React, { memo } from 'react';

import dynamic from 'next/dynamic';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { Box } from '@mui/material';

import ResultsView from '../results-view';
import WelcomeView from '../welcome-view';
import { useHomeViewLogic } from './home-view.logic';
import { useHomeViewStyles } from './home-view.styles';
import { GameContext } from '@/contexts/game-context';
import '@/css-transitions/fade-transition.css';

const GameView = dynamic(() => import('../game-view'), { ssr: false });

const HomeView = memo(() => {
  const { currentStep, onChangeCurrentStep, nodeRef } = useHomeViewLogic();
  const sx = useHomeViewStyles();

  return (
    <GameContext.Provider value={{ currentStep, onChangeCurrentStep }}>
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
    </GameContext.Provider>
  );
});

HomeView.displayName = 'HomeView';

export default HomeView;

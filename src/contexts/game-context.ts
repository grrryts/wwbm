import { createContext } from 'react';

import { type TGameContext } from '@/types/game-context.types';

export const GameContext = createContext<TGameContext>({
  currentStep: 0,
  onChangeCurrentStep: () => {},
});

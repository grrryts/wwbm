import { RefObject, useMemo, useRef } from 'react';

import { useAppSelector } from '@/lib/store/hooks';

export const useHomeViewLogic = () => {
  const currentStep = useAppSelector((state) => state.core.viewStep);

  const welcomeScreenRef = useRef(null);
  const gameScreenRef = useRef(null);
  const resultsScreenRef = useRef(null);

  const refsMap: Record<number, RefObject<HTMLElement | null>> = useMemo(
    () => ({
      0: welcomeScreenRef,
      1: gameScreenRef,
      2: resultsScreenRef,
    }),
    [],
  );

  const nodeRef = refsMap[currentStep];

  return {
    currentStep,
    nodeRef,
  };
};

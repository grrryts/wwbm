import { RefObject, useMemo, useRef, useState } from 'react';

export const useHomeViewLogic = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const onChangeCurrentStep = () => {
    setCurrentStep((prev) => (prev + 1) % 3);
  };

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
    onChangeCurrentStep,
    nodeRef,
  };
};

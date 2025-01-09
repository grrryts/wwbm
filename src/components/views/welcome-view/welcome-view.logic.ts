import { useGameContext } from '@/hooks/use-game-context';

export const useWelcomeViewLogic = () => {
  const { onChangeCurrentStep } = useGameContext();

  return {
    onChangeCurrentStep,
  };
};

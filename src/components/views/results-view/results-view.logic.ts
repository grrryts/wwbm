import { useGameContext } from '@/hooks/use-game-context';

export const useResultsViewLogic = () => {
  const { onChangeCurrentStep } = useGameContext();

  return {
    onChangeCurrentStep,
  };
};

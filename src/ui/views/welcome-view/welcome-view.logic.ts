import { useAppDispatch } from '@/lib/store/hooks';
import { onChangeViewStep } from '@/lib/store/slices/core.slice';
import { onClearResults } from '@/lib/store/slices/game.slice';

export const useWelcomeViewLogic = () => {
  const dispatch = useAppDispatch();

  const handleChangeViewStep = () => {
    dispatch(onClearResults());
    dispatch(onChangeViewStep());
  };

  return {
    handleChangeViewStep,
  };
};

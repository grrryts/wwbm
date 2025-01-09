import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { onChangeViewStep } from '@/lib/store/slices/core.slice';

export const useResultsViewLogic = () => {
  const dispatch = useAppDispatch();
  const currentPrize = useAppSelector((store) => store.game.currentPrize);

  const handleChangeViewStep = () => {
    dispatch(onChangeViewStep());
  };

  return {
    currentPrize,
    handleChangeViewStep,
  };
};

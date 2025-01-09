import { useAppDispatch } from '@/lib/store/hooks';
import { onChangeViewStep } from '@/lib/store/slices/core.slice';

export const useResultsViewLogic = () => {
  const dispatch = useAppDispatch();

  const handleChangeViewStep = () => {
    dispatch(onChangeViewStep());
  };

  return {
    handleChangeViewStep,
  };
};

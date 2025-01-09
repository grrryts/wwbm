import { useAppDispatch } from '@/lib/store/hooks';
import { onChangeViewStep } from '@/lib/store/slices/core.slice';

export const useWelcomeViewLogic = () => {
  const dispatch = useAppDispatch();

  const handleChangeViewStep = () => {
    console.log('handleChangeViewStep');
    dispatch(onChangeViewStep());
  };

  return {
    handleChangeViewStep,
  };
};

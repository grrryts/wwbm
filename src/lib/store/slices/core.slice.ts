import { createSlice } from '@reduxjs/toolkit';

const coreSlice = createSlice({
  name: 'core',
  initialState: {
    viewStep: 1, //* change to 0 when ready
  },
  reducers: {
    onChangeViewStep(state) {
      console.log('onChangeViewStep fired', {
        state,
        viewStep: state.viewStep,
      });

      state.viewStep = (state.viewStep + 1) % 3;
    },
  },
});

export const { onChangeViewStep } = coreSlice.actions;
export default coreSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const coreSlice = createSlice({
  name: 'core',
  initialState: {
    viewStep: 0,
  },
  reducers: {
    onChangeViewStep(state) {
      state.viewStep = (state.viewStep + 1) % 3;
    },
  },
});

export const { onChangeViewStep } = coreSlice.actions;
export default coreSlice.reducer;

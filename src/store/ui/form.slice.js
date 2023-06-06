import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requesting: false,
  errorMessage: '',
  errors: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    startRequesting(state) {
      state.requesting = true;
      state.errorMessage = '';
      state.errors = {};
    },

    stopRequesting(state, { payload = {} }) {
      const { errorMessage, errors } = payload;
      state.requesting = false;
      if (errorMessage) state.errorMessage = errorMessage;
      if (errors) state.errors = errors;
    },
  },
});

export const { startRequesting, stopRequesting } = formSlice.actions;
export default formSlice.reducer;

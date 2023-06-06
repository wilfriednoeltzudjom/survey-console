import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  successDialogShown: false,
  failureDialogShown: false,
  dialogArgs: {},
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    showSuccessDialog(state, { payload = {} }) {
      const { message } = payload;
      state.successDialogShown = true;
      state.dialogArgs = { message };
    },
    showFailureDialog(state, { payload = {} }) {
      const { message } = payload;
      state.failureDialogShown = true;
      state.dialogArgs = { message };
    },
    hideDialog(state) {
      state.successDialogShown = false;
      state.failureDialogShown = false;
      state.dialogArgs = {};
    },
  },
});

export const { showSuccessDialog, showFailureDialog, hideDialog } = dialogSlice.actions;
export default dialogSlice.reducer;

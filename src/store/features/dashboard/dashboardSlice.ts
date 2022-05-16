import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProject, IUsers, VariantDialog } from '~/interfaces';
import { IDashboardSlice } from '~/interfaces/dashboard';

const initialState: IDashboardSlice = {
  dialogVariant: 'idle',
  userDialogData: {} as IUsers,
  projectDialogData: {} as IProject
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetDialog(state) {
      state.dialogVariant = 'idle';
      state.userDialogData = {} as IUsers;
      state.projectDialogData = {} as IProject;
    },
    showDialog(state, action: PayloadAction<VariantDialog>) {
      state.dialogVariant = action.payload;
    },
    showDialogEditUser(state, action: PayloadAction<IUsers>) {
      state.userDialogData = action.payload;
      state.dialogVariant = 'users';
    },
    showDialogEditProject(state, action: PayloadAction<IProject>) {
      state.projectDialogData = action.payload;
      state.dialogVariant = 'projects';
    }
  }
});

export const { resetDialog, showDialogEditUser, showDialogEditProject, showDialog } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;

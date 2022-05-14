import { configureStore } from '@reduxjs/toolkit';

import projectReducer from '~/store/features/project/projectSlice';
import userReducer from '~/store/features/user/userSlice';

export const store = configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

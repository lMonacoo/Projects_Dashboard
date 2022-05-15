import { configureStore } from '@reduxjs/toolkit';

import dashboardReducer from '~/store/features/dashboard/dashboardSlice';
import projectReducer from '~/store/features/project/projectSlice';
import userReducer from '~/store/features/user/userSlice';

export const store = configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer,
    dashboard: dashboardReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from '~/store/features/project/projectSlice';
export * from '~/store/features/user/userSlice';
export * from '~/store/features/dashboard/dashboardSlice';

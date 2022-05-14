import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProject, IProjectSlice } from '~/interfaces';

import initialProjects from './mock';

const initialState: IProjectSlice = {
  allProjects: initialProjects
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<IProject>) {
      state.allProjects.push(action.payload);
    },
    removeProject(state, action: PayloadAction<number>) {
      const filteredProjects = state.allProjects.filter(project => project.id !== action.payload);
      state.allProjects = filteredProjects;
    }
  }
});

export const { addProject, removeProject } = projectSlice.actions;
export default projectSlice.reducer;

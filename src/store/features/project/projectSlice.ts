import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { COLLECTION_PROJECTS_KEY } from '~/constants';
import { IProject, IProjectSlice } from '~/interfaces';
import { findBiggerNumberInArray, getPropertyInArray } from '~/utils';

const initialState: IProjectSlice = {
  allProjects: [],
  filteredProjects: []
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    loadFirstProjectsPayload: (state, action: PayloadAction<IProject[]>) => {
      state.allProjects = action.payload;
      state.filteredProjects = action.payload;
    },
    addProject(state, action: PayloadAction<Omit<IProject, 'id'>>) {
      const allExistentIds = getPropertyInArray<IProject>(state.allProjects, 'id') as number[];
      const getBiggerId = findBiggerNumberInArray(allExistentIds);

      state.allProjects.push({ ...action.payload, id: getBiggerId + 1 });
      state.filteredProjects.push({ ...action.payload, id: getBiggerId + 1 });
      localStorage.setItem(COLLECTION_PROJECTS_KEY, JSON.stringify(state.allProjects));
    },
    editProject(state, action: PayloadAction<IProject>) {
      const projectsWithoutEdited = state.allProjects.filter(
        project => project.id !== action.payload.id
      );

      state.allProjects = [action.payload, ...projectsWithoutEdited];
      state.filteredProjects = [action.payload, ...projectsWithoutEdited];
      localStorage.setItem(COLLECTION_PROJECTS_KEY, JSON.stringify(state.allProjects));
    },
    removeProject(state, action: PayloadAction<number>) {
      const filteredProjects = state.allProjects.filter(project => project.id !== action.payload);

      state.allProjects = filteredProjects;
      state.filteredProjects = filteredProjects;
      localStorage.setItem(COLLECTION_PROJECTS_KEY, JSON.stringify(state.allProjects));
    },
    filterProjects(state, action: PayloadAction<string>) {
      const filteredProjects = state.allProjects.filter(project => {
        const stringToFind = action.payload.toLowerCase();
        return (
          project.name.toLowerCase().includes(stringToFind) ||
          project.description.toLowerCase().includes(stringToFind)
        );
      });

      const sortedFilteredProjects = filteredProjects.sort((firstProj, secondProj) => {
        if (firstProj.name < secondProj.name || firstProj.description < secondProj.description)
          return -1;
        if (firstProj.name > secondProj.name || firstProj.description > secondProj.description)
          return 1;
        return 0;
      });

      state.filteredProjects = sortedFilteredProjects.reverse();
    }
  }
});

export const { loadFirstProjectsPayload, addProject, editProject, removeProject, filterProjects } =
  projectSlice.actions;
export default projectSlice.reducer;

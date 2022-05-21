export interface IProject {
  id: number;
  name: string;
  description: string;
  owner: number;
}

export interface IProjectSlice {
  allProjects: IProject[];
  filteredProjects: IProject[];
}

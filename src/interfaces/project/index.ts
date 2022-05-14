import { IUsers } from '~/interfaces/users';

export interface IProject {
  id: number;
  name: string;
  description: string;
  owner: IUsers;
}

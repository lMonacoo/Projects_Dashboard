export interface IUsers {
  id: number;
  name: string;
  email: string;
}

export interface IUserSlice {
  allUsers: IUsers[];
}

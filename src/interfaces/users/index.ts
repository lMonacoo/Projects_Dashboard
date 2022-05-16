export interface IUsers {
  id: number;
  name: string;
  email: string;
}

export interface ILocalUser {
  username: string;
  password: string;
  keepConnected: boolean;
}

export interface IUserSlice {
  allUsers: IUsers[];
  currentUser: ILocalUser | null;
}

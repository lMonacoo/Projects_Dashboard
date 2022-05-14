import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUsers, IUserSlice } from '~/interfaces';
import initialUsers from '~/store/features/user/mock';

const initialState: IUserSlice = {
  allUsers: initialUsers
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUsers>) {
      state.allUsers.push(action.payload);
    },
    removeUser(state, action: PayloadAction<IUsers['id']>) {
      const filteredUsers = state.allUsers.filter(user => user.id !== action.payload);
      state.allUsers = filteredUsers;
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

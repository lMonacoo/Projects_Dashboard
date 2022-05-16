import FaceIcon from '@mui/icons-material/Face';
import { Chip, Paper, Stack } from '@mui/material';
import { useTheme } from 'styled-components';

import { DashboardShowcaseHeader } from '~/components/molecules';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { IUsers } from '~/interfaces';
import { removeUser, showDialog, showDialogEditUser } from '~/store';

export const DashboardViewUsers = () => {
  const { colors } = useTheme();
  const { allUsers } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const stackStyles = {
    width: '100%',
    overflow: 'auto',
    pb: 1,
    '&::-webkit-scrollbar': {
      height: 8
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: colors.bg
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: colors.greenPrimary,
      borderRadius: 5
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: colors.greenSecondary
    }
  };

  const chipStyles = {
    p: 1,
    fontSize: 11,
    color: colors.white,
    backgroundColor: colors.greenTertiary,
    '&:hover': { backgroundColor: colors.greenSecondary },
    '&:focus': { backgroundColor: colors.greenSecondary },
    '& .MuiSvgIcon-root': { fill: colors.white, fontSize: 20 },
    '& .MuiSvgIcon-root:hover': { fill: colors.greenPrimary }
  };

  const handleDeleteUser = (user: IUsers) => {
    dispatch(removeUser(user.id));
  };

  const handleCreateUser = () => {
    dispatch(showDialog('users'));
  };

  const handleEditUser = (user: IUsers) => {
    dispatch(showDialogEditUser(user));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, pb: 1, pt: 2 }}>
      <DashboardShowcaseHeader
        title='Users List'
        buttonLabel='Create User'
        buttonCallback={handleCreateUser}
      />

      <Stack direction={'row'} spacing={1} sx={stackStyles}>
        {allUsers.map(user => {
          return (
            <Chip
              key={user.id}
              sx={chipStyles}
              icon={<FaceIcon sx={{ fill: colors.white, fontSize: 20 }} />}
              label={user.name}
              onDelete={() => handleDeleteUser(user)}
              onClick={() => handleEditUser(user)}
            />
          );
        })}
      </Stack>
    </Paper>
  );
};

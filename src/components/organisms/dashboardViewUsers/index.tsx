import FaceIcon from '@mui/icons-material/Face';
import { Chip, Paper, Stack, Typography } from '@mui/material';
import { useTheme } from 'styled-components';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { IUsers } from '~/interfaces';
import { removeUser } from '~/store';

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
    '& .MuiSvgIcon-root': { fill: colors.white, fontSize: 20 },
    '& .MuiSvgIcon-root:hover': { fill: colors.greenPrimary }
  };

  const handleDeleteUser = (user: IUsers) => {
    dispatch(removeUser(user.id));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, pb: 2, pt: 2 }}>
      <Typography
        sx={{
          fontWeight: 700,
          color: colors.greenTertiary,
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          mb: 1.5
        }}
      >
        Users List
      </Typography>

      <Stack direction={'row'} spacing={1} sx={stackStyles}>
        {allUsers.map(user => {
          return (
            <Chip
              key={user.id}
              sx={chipStyles}
              icon={<FaceIcon sx={{ fill: colors.white, fontSize: 20 }} />}
              label={user.name}
              onDelete={() => handleDeleteUser(user)}
            />
          );
        })}
      </Stack>
    </Paper>
  );
};

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import { useTheme } from 'styled-components';

import { SpeedDialTooltipOpen } from '~/components/molecules';
import { useAppDispatch } from '~/hooks';
import { logout } from '~/store';

export const Dashboard = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <h1>DASHBOARD</h1>
      <Fab
        onClick={handleLogout}
        variant='extended'
        size='medium'
        color='primary'
        aria-label='logout'
      >
        <Typography sx={{ fontWeight: 700, color: colors.white }} variant='body1'>
          Logout
        </Typography>
        <LogoutIcon sx={{ ml: 1 }} style={{ fill: 'white', fontSize: 22 }} />
      </Fab>

      <SpeedDialTooltipOpen
        actions={[
          {
            name: 'New User',
            icon: <GroupAddIcon sx={{ fill: colors.greenTertiary }} />,
            callback: () => console.log('new user')
          },
          {
            name: 'New Project',
            icon: <BookmarkAddIcon sx={{ fill: colors.greenTertiary }} />,
            callback: () => console.log('new Project')
          }
        ]}
      />
    </Box>
  );
};

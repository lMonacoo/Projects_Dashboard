import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { useTheme } from 'styled-components';

import { HeaderContainer } from '~/components/organisms/dashboardHeader/styles';
import { useAppDispatch } from '~/hooks';
import { logout } from '~/store';

export const DashboardHeader = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <Typography
        sx={{
          fontWeight: 700,
          color: colors.white,
          fontSize: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}
        component='h1'
      >
        Dashboard
      </Typography>

      <Input
        id='input-search'
        fullWidth
        sx={{
          color: colors.greenTertiary,
          fontWeight: 700,
          border: `2px solid ${colors.greenTertiary}`,
          padding: 0.5,
          pl: 1.5,
          height: '100%',
          borderRadius: 10,
          overflow: 'hidden',
          '&::before': {
            display: 'none'
          },
          '&::after': {
            border: `1px solid ${colors.greenTertiary}`
          }
        }}
        // value={formValues.password}
        // onChange={handleInputChange}
        name='password'
        placeholder='Search for a project'
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => console.log('teste')}
            >
              <SearchIcon sx={{ fontSize: 25, fill: colors.greenTertiary }} />
            </IconButton>
          </InputAdornment>
        }
      />

      <Fab
        onClick={handleLogout}
        size='medium'
        aria-label='logout'
        sx={{
          '&.MuiButtonBase-root': { backgroundColor: colors.greenTertiary }
        }}
      >
        <LogoutIcon style={{ marginLeft: 5, fill: 'white', fontSize: 25 }} />
      </Fab>
    </HeaderContainer>
  );
};

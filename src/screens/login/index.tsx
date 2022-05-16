import { useCallback, useState } from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Input,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Avatar,
  Container,
  Paper,
  Box,
  InputLabel,
  IconButton,
  InputAdornment
} from '@mui/material';
import styled, { useTheme } from 'styled-components';

import { useAppDispatch } from '~/hooks';
import { login } from '~/store';

interface ILoginForm {
  username: string;
  password: string;
  keepConnected: boolean;
}

const defaultValues: ILoginForm = {
  username: '',
  password: '',
  keepConnected: true
};

const MainLoginContainer = styled.main`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.greenPrimary};
`;

export const Login = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const [formValues, setFormValues] = useState<ILoginForm>(defaultValues);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const fieldsAvailable = Object.keys(formValues) as Array<keyof ILoginForm>;
    const formHasAllFieldsFilled = fieldsAvailable.every(field => formValues[field] !== '');
    if (formHasAllFieldsFilled) {
      dispatch(login(formValues));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setFormValues({ ...formValues, [name]: !formValues.keepConnected });
  };

  const handleClickShowPassword = useCallback(() => {
    setShowPassword(prevState => !prevState);
  }, []);

  return (
    <MainLoginContainer>
      <Container
        sx={{
          width: 700,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Paper elevation={3}>
          <Box
            p={3}
            sx={{
              width: 300,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 5
            }}
          >
            <Avatar variant='rounded' sx={{ bgcolor: colors.greenPrimary, width: 60, height: 60 }}>
              <PersonIcon sx={{ fontSize: 40, fill: colors.greenTertiary }} />
            </Avatar>
            <form onSubmit={handleSubmitLogin}>
              <Box>
                <InputLabel htmlFor='input-username'>Username</InputLabel>
                <Input
                  fullWidth
                  id='input-username'
                  value={formValues.username}
                  onChange={handleInputChange}
                  name='username'
                  sx={{
                    '&::before': {
                      borderColor: colors.greenTertiary
                    },
                    '&::after': {
                      border: `1px solid ${colors.greenTertiary}`
                    }
                  }}
                  endAdornment={
                    <InputAdornment position='start'>
                      <AccountCircle sx={{ fill: colors.greenTertiary }} />
                    </InputAdornment>
                  }
                />
              </Box>
              <Box mt={2}>
                <InputLabel htmlFor='input-password'>Password</InputLabel>
                <Input
                  fullWidth
                  id='input-password'
                  value={formValues.password}
                  onChange={handleInputChange}
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  sx={{
                    '&::before': {
                      borderColor: colors.greenTertiary
                    },
                    '&::after': {
                      border: `1px solid ${colors.greenTertiary}`
                    }
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ fill: colors.greenTertiary }} />
                        ) : (
                          <Visibility sx={{ fill: colors.greenTertiary }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    name='keepConnected'
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 20, fill: colors.greenTertiary }
                    }}
                    checked={formValues.keepConnected}
                    onChange={handleCheckboxChange}
                  />
                }
                label={
                  <Typography sx={{ fontSize: 13, fontWeight: 500, color: colors.greyQuaternary }}>
                    Keep connected
                  </Typography>
                }
              />
              <Box mt={3}>
                <Button
                  type='submit'
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    backgroundColor: colors.greenTertiary,
                    '&:hover': { backgroundColor: colors.greenPrimary }
                  }}
                  variant='contained'
                  fullWidth
                  disableElevation
                >
                  Login
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Container>
    </MainLoginContainer>
  );
};

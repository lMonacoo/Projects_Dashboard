import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import { useTheme } from 'styled-components';

import { CustomDialogContentUserProps } from '~/interfaces';

export const CustomDialogContentUser = ({
  formValues,
  setFormValues,
  formErrors
}: CustomDialogContentUserProps) => {
  const { colors } = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const inputStyle = {
    '& .MuiInput-input': { padding: 0.5 },
    width: '100%',
    color: colors.greyQuaternary,
    border: `1px solid ${colors.greenTertiary}`,
    borderRadius: 10,
    overflow: 'hidden',
    '&::before': {
      display: 'none'
    },
    '&::after': {
      border: `1px solid ${colors.greenTertiary}`
    }
  };

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 5 }}>
      <Box sx={{ width: '100%' }}>
        <InputLabel htmlFor='input-name'>Name:</InputLabel>
        <Input
          autoFocus
          id='input-name'
          type='text'
          name='name'
          placeholder='Name Here'
          value={formValues.name}
          onChange={handleInputChange}
          sx={{ ...inputStyle }}
          startAdornment={
            <InputAdornment position='end'>
              <PersonIcon sx={{ fill: colors.greenTertiary }} />
            </InputAdornment>
          }
        />
      </Box>

      <Box sx={{ width: '100%' }}>
        <InputLabel htmlFor='input-email'>Email:</InputLabel>
        <Input
          id='input-email'
          type='email'
          name='email'
          placeholder='Email Here'
          value={formValues.email}
          onChange={handleInputChange}
          sx={{ ...inputStyle }}
          error={!!formErrors?.email}
          startAdornment={
            <InputAdornment position='end'>
              <EmailIcon sx={{ fill: colors.greenTertiary }} />
            </InputAdornment>
          }
        />
        {!!formErrors?.email && (
          <InputLabel sx={{ color: colors.redPrimary }}>{formErrors?.email}</InputLabel>
        )}
      </Box>
    </Stack>
  );
};

import BookmarkIcon from '@mui/icons-material/Bookmark';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from 'styled-components';

import { useAppSelector } from '~/hooks';
import { CustomDialogContentProjectProps } from '~/interfaces';

export const CustomDialogContentProjects = ({
  formValues,
  setFormValues
}: CustomDialogContentProjectProps) => {
  const { colors } = useTheme();
  const { allUsers } = useAppSelector(state => state.user);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectChange = (e: object) => {
    const event = e as React.ChangeEvent<HTMLInputElement>;
    if (event.target && event?.target?.value) {
      const findSelectedUserById = allUsers.find(user => user.id === Number(event.target?.value));
      if (findSelectedUserById) setFormValues({ ...formValues, owner: findSelectedUserById });
    }
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

  const MenuProps = {
    PaperProps: {
      style: {
        borderRadius: 16,
        marginTop: 5,
        border: `1px solid ${colors.greenTertiary}`
      }
    }
  };

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 4, md: 8 }}
      columnSpacing={{ xs: 2, md: 5 }}
      rowSpacing={2}
    >
      <Grid item md={4} sm={4} xs={4}>
        <InputLabel htmlFor='input-name'>Name:</InputLabel>
        <Input
          autoFocus
          id='input-name'
          placeholder="Project's name"
          type='text'
          name='name'
          value={formValues.name}
          onChange={handleInputChange}
          sx={{ ...inputStyle }}
          startAdornment={
            <InputAdornment position='end'>
              <BookmarkIcon sx={{ fill: colors.greenTertiary }} />
            </InputAdornment>
          }
        />
      </Grid>

      <Grid item md={4} sm={4} xs={4}>
        <InputLabel htmlFor='input-owner'>Owner:</InputLabel>
        <Select
          displayEmpty
          value={formValues.owner.id || ''}
          name='owner'
          onChange={(event: object) => handleSelectChange(event)}
          renderValue={(value: string | number) => {
            if (!value) {
              return 'Select owner';
            }
            return formValues.owner.name;
          }}
          input={
            <Input
              startAdornment={
                <InputAdornment position='end'>
                  <PersonIcon sx={{ fill: colors.greenTertiary }} />
                </InputAdornment>
              }
              sx={{ ...inputStyle, pl: 2 }}
            />
          }
          MenuProps={MenuProps}
        >
          {allUsers.map(user => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid item md={8} sm={4} xs={4}>
        <InputLabel htmlFor='input-description'>Description:</InputLabel>
        <Input
          id='input-description'
          type='description'
          name='description'
          multiline
          value={formValues.description}
          onChange={handleInputChange}
          startAdornment={
            <InputAdornment position='end'>
              <DescriptionIcon sx={{ fill: colors.greenTertiary }} />
            </InputAdornment>
          }
          sx={{
            ...inputStyle,
            height: 100,
            borderRadius: 5,
            '& .MuiInputBase-inputMultiline': { height: '100% !important' }
          }}
        />
      </Grid>
    </Grid>
  );
};

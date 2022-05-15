import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { useTheme } from 'styled-components';

import { CustomDialogActionsProps } from '~/interfaces';

export const CustomDialogActions = ({ onClose }: CustomDialogActionsProps) => {
  const { colors } = useTheme();

  const buttonStyles = {
    color: colors.white,
    fontWeight: 700,
    width: 80
  };

  return (
    <DialogActions sx={{ justifyContent: 'center', gap: 4, mb: 1 }}>
      <Button
        variant='contained'
        color='error'
        sx={{ ...buttonStyles, backgroundColor: colors.redPrimary }}
        onClick={() => onClose()}
      >
        Cancel
      </Button>
      <Button
        variant='contained'
        color='success'
        sx={{ ...buttonStyles, backgroundColor: colors.greenSuccess }}
        type='submit'
      >
        Save
      </Button>
    </DialogActions>
  );
};

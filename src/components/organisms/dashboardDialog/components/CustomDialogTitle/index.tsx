import CloseIcon from '@mui/icons-material/Close';
import FaceIcon from '@mui/icons-material/Face';
import WorkIcon from '@mui/icons-material/Work';
import Chip from '@mui/material/Chip';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useTheme } from 'styled-components';

import { CustomDialogTitleProps } from '~/interfaces';

export const CustomDialogTitle = ({ onClose, id, variant }: CustomDialogTitleProps) => {
  const { colors } = useTheme();

  const ChipVariant = {
    users: () => (
      <Chip
        sx={{ p: 1, fontSize: 15, color: colors.white, backgroundColor: colors.greenTertiary }}
        icon={<FaceIcon sx={{ fill: colors.white, fontSize: 30 }} />}
        label='Manage User'
      />
    ),
    projects: () => (
      <Chip
        sx={{ p: 1, fontSize: 15, color: colors.white, backgroundColor: colors.greenTertiary }}
        icon={<WorkIcon sx={{ fill: colors.white, fontSize: 25 }} />}
        label='Manage Project'
      />
    )
  };

  return (
    <DialogTitle sx={{ m: 0, p: 2, justifyContent: 'center', display: 'flex' }} id={id}>
      {ChipVariant[variant]()}
      <IconButton
        aria-label='close'
        onClick={() => onClose()}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon sx={{ fill: colors.greenTertiary }} />
      </IconButton>
    </DialogTitle>
  );
};

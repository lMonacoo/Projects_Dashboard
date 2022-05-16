import * as React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { useTheme } from 'styled-components';

interface IActions {
  icon: React.ReactElement;
  name: string;
  callback: () => void;
}

interface SpeedDialTooltipOpenProps {
  actions: IActions[];
}

export const SpeedDialTooltipOpen = ({ actions }: SpeedDialTooltipOpenProps) => {
  const { colors } = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SpeedDial
      ariaLabel='SpeedDial tooltip actions'
      sx={{
        position: 'fixed',
        bottom: 16,
        right: '2rem',
        '& .MuiSpeedDialIcon-root': { display: 'flex', height: '100%', alignItems: 'center' },
        '& .MuiSpeedDialIcon-icon': { fill: colors.white, height: 40, width: 40 },
        '& > .MuiButtonBase-root': { backgroundColor: colors.greenTertiary },
        '& > .MuiButtonBase-root:hover': { backgroundColor: colors.greenTertiary }
      }}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action: IActions) => (
        <SpeedDialAction
          sx={{
            color: colors.white,
            whiteSpace: 'nowrap',
            '& .MuiSpeedDialAction-staticTooltipLabel': { color: colors.greenTertiary }
          }}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          onClick={() => {
            handleClose();
            action.callback();
          }}
        />
      ))}
    </SpeedDial>
  );
};

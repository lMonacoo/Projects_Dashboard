import AddIcon from '@mui/icons-material/Add';
import { Stack, Typography, Button } from '@mui/material';
import { useTheme } from 'styled-components';

interface DashboardShowcaseHeaderProps {
  buttonLabel: string;
  title: string;
  buttonCallback: () => void;
}

export const DashboardShowcaseHeader = ({
  buttonLabel,
  title,
  buttonCallback
}: DashboardShowcaseHeaderProps) => {
  const { colors } = useTheme();

  const buttonStyles = {
    borderColor: colors.greenTertiary,
    color: colors.greenTertiary,
    fontSize: 11,
    '&:hover': {
      borderColor: colors.greenTertiary
    }
  };

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 0.5 }}>
      <Typography
        sx={{
          fontWeight: 700,
          color: colors.greenTertiary,
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          mb: 1.5
        }}
      >
        {title}
      </Typography>

      <Button
        startIcon={<AddIcon />}
        variant='outlined'
        sx={buttonStyles}
        size='small'
        onClick={() => buttonCallback()}
      >
        {buttonLabel}
      </Button>
    </Stack>
  );
};

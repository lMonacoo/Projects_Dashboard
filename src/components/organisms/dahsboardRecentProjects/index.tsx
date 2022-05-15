import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from 'styled-components';

import { useAppSelector } from '~/hooks';

const QUANTITY_OF_LAST_PROJECTS_TO_SHOW = 4;

export const DashboardRecentProjects = () => {
  const { colors } = useTheme();
  const { allProjects } = useAppSelector(state => state.project);

  const lastProjectsChanged = allProjects.slice(-QUANTITY_OF_LAST_PROJECTS_TO_SHOW).reverse();

  return (
    <Paper elevation={3} sx={{ pb: 5, pl: 3, pr: 3, pt: 2 }}>
      <Typography
        sx={{
          fontWeight: 700,
          color: colors.greenTertiary,
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          mb: 1.5
        }}
      >
        Recent Projects
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
        {lastProjectsChanged.map(project => {
          return (
            <Grid item key={project.id} xs={4} sm={4} md={4}>
              <Card sx={{ flex: 1 }}>
                <CardMedia
                  component='img'
                  src='https://source.unsplash.com/random/?business,project'
                  height={50}
                  alt='project image'
                />
                <CardContent sx={{ pb: 0 }}>
                  <Typography gutterBottom noWrap sx={{ fontSize: 18 }} variant='h5'>
                    {project.name}
                  </Typography>
                  <Typography noWrap sx={{ fontSize: 12 }} variant='h5'>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant='outlined'
                    sx={{
                      borderColor: colors.greenSuccess,
                      color: colors.greenSuccess,
                      '&:hover': {
                        borderColor: colors.greenSuccess,
                        color: colors.greenSuccess
                      }
                    }}
                    size='small'
                  >
                    Edit
                  </Button>
                  <Button
                    variant='outlined'
                    sx={{
                      borderColor: colors.redPrimary,
                      color: colors.redPrimary,
                      '&:hover': {
                        borderColor: colors.redPrimary,
                        color: colors.redPrimary
                      }
                    }}
                    size='small'
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

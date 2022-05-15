import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useTheme } from 'styled-components';

import { ProjectRow } from '~/components/organisms/dashboardViewProjects/components/ProjectRow';
import { useAppSelector } from '~/hooks';

export const DashboardViewProjects = () => {
  const { colors } = useTheme();
  const { allProjects } = useAppSelector(state => state.project);

  const headerTextStles = {
    color: colors.greenTertiary,
    fontWeight: 700,
    fontSize: 15,
    borderBottom: `2px solid ${colors.greenTertiary}`
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: 470,
        maxHeight: 470,
        pb: 1,
        '&::-webkit-scrollbar': {
          width: 8
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: colors.bg
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: colors.greenPrimary,
          borderRadius: 5
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: colors.greenSecondary
        }
      }}
    >
      <Table stickyHeader aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell sx={headerTextStles} />
            <TableCell sx={headerTextStles}>Project Name</TableCell>
            <TableCell sx={headerTextStles} align='left'>
              Project owner
            </TableCell>
            <TableCell sx={headerTextStles} align='center'>
              Edit
            </TableCell>
            <TableCell sx={headerTextStles} align='center'>
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProjects.map(project => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

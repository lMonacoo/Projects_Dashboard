import { useRef } from 'react';

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

import { InfiniteScrollComponent, VirtualizedList } from '~/components/molecules';
import { ProjectRow } from '~/components/organisms/dashboardViewProjects/components/ProjectRow';
import { useAppSelector } from '~/hooks';
import { IProject, IUsers } from '~/interfaces';

export const DashboardViewProjects = () => {
  const { colors } = useTheme();
  const { filteredProjects } = useAppSelector(state => state.project);
  const { allUsers } = useAppSelector(state => state.user);
  const tableRef = useRef<HTMLTableElement>(null);

  const headerTextStles = {
    color: colors.greenTertiary,
    fontWeight: 700,
    fontSize: 15,
    borderBottom: `2px solid ${colors.greenTertiary}`
  };

  const returnOwnerData = (projectOwnerId: number): IUsers => {
    const userWithIdEqualsValue = allUsers.filter(user => user.id === Number(projectOwnerId))[0];
    return userWithIdEqualsValue as IUsers;
  };

  const returnProject = (project: IProject): JSX.Element => {
    return <ProjectRow key={project.id} project={project} owner={returnOwnerData(project.owner)} />;
  };

  const mockedContainerVirtualized = (): JSX.Element => {
    return <TableCell sx={{ height: '74px' }} />;
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
      ref={tableRef}
    >
      <InfiniteScrollComponent<HTMLTableElement>
        totalLength={filteredProjects.length}
        listParent={tableRef}
      >
        {quantityRender => (
          <Table stickyHeader aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerTextStles, width: '5%' }} />
                <TableCell sx={{ ...headerTextStles, width: '35%' }}>Project Name</TableCell>
                <TableCell sx={{ ...headerTextStles, width: '30%' }} align='left'>
                  Project owner
                </TableCell>
                <TableCell sx={{ ...headerTextStles, width: '15%' }} align='center'>
                  Edit
                </TableCell>
                <TableCell sx={{ ...headerTextStles, width: '15%' }} align='center'>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(quantityRender).fill(0)].map((_, index) => {
                if (!filteredProjects[index]) return;
                return (
                  <VirtualizedList as='tr' rootRef={tableRef} key={filteredProjects[index].id}>
                    {isIntersecting => {
                      return isIntersecting
                        ? returnProject(filteredProjects[index])
                        : mockedContainerVirtualized();
                    }}
                  </VirtualizedList>
                );
              })}
            </TableBody>
          </Table>
        )}
      </InfiniteScrollComponent>
    </TableContainer>
  );
};

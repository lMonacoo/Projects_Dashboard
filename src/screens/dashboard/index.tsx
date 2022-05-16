import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Stack from '@mui/material/Stack';
import styled, { useTheme } from 'styled-components';

import { SpeedDialTooltipOpen } from '~/components/molecules';
import {
  DashboardDialog,
  DashboardHeader,
  DashboardRecentProjects,
  DashboardViewProjects,
  DashboardViewUsers
} from '~/components/organisms';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { DialogFormValues, IProject, IUsers } from '~/interfaces';
import { addProject, addUser, editProject, editUser, resetDialog, showDialog } from '~/store';

const MainDashboardContainer = styled.main`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.bg};
`;

export const Dashboard = () => {
  const { dialogVariant } = useAppSelector(state => state.dashboard);
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const handleCloseDialog = () => {
    dispatch(resetDialog());
  };

  const handleSubmitDialog = (formData: DialogFormValues) => {
    const isExistentRegister = formData?.id !== undefined;
    if (dialogVariant === 'users') {
      dispatch(
        isExistentRegister ? editUser(formData as IUsers) : addUser(formData as Omit<IUsers, 'id'>)
      );
    }
    if (dialogVariant === 'projects') {
      dispatch(
        isExistentRegister
          ? editProject(formData as IProject)
          : addProject(formData as Omit<IProject, 'id'>)
      );
    }
    handleCloseDialog();
  };

  const SpeedDialActions = [
    {
      name: 'New User',
      icon: <GroupAddIcon sx={{ fill: colors.greenTertiary }} />,
      callback: () => dispatch(showDialog('users'))
    },
    {
      name: 'New Project',
      icon: <BookmarkAddIcon sx={{ fill: colors.greenTertiary }} />,
      callback: () => dispatch(showDialog('projects'))
    }
  ];

  return (
    <MainDashboardContainer>
      <DashboardHeader />

      <Stack sx={{ p: 3 }} direction='column' spacing={2}>
        <DashboardRecentProjects />
        <DashboardViewUsers />
        <DashboardViewProjects />
      </Stack>

      <SpeedDialTooltipOpen actions={SpeedDialActions} />

      {dialogVariant !== 'idle' ? (
        <DashboardDialog
          onClose={handleCloseDialog}
          onSubmit={handleSubmitDialog}
          variant={dialogVariant}
          isOpen={true}
        />
      ) : null}
    </MainDashboardContainer>
  );
};

import React, { useCallback, useRef } from 'react';

import FaceIcon from '@mui/icons-material/Face';
import { Box, Chip, Paper, Stack } from '@mui/material';
import { useTheme } from 'styled-components';

import { DashboardShowcaseHeader, VirtualizedList } from '~/components/molecules';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { IUsers } from '~/interfaces';
import { removeUser, showDialog, showDialogEditUser } from '~/store';

const CHIP_USER_WIDTH = 170;

export const DashboardViewUsers = () => {
  const { colors } = useTheme();
  const { allUsers } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const lazyRef = useRef<HTMLDivElement>(null);

  const stackStyles = {
    width: '100%',
    overflow: 'auto',
    display: 'block',
    gap: '10px',
    pb: 1,
    '&::-webkit-scrollbar': {
      height: 8
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
  };

  const handleDeleteUser = useCallback(
    (user: IUsers) => {
      dispatch(removeUser(user.id));
    },
    [dispatch]
  );

  const handleCreateUser = () => {
    dispatch(showDialog('users'));
  };

  const handleEditUser = useCallback(
    (user: IUsers) => {
      dispatch(showDialogEditUser(user));
    },
    [dispatch]
  );

  const mockedContainerVirtualized = (): JSX.Element => {
    return <Box sx={{ minWidth: CHIP_USER_WIDTH, height: 32 }} />;
  };

  const renderUserChip = useCallback(
    (user: IUsers): JSX.Element => {
      const chipStyles = {
        p: 1,
        minWidth: CHIP_USER_WIDTH,
        maxWidth: CHIP_USER_WIDTH,
        fontSize: 11,
        color: colors.white,
        backgroundColor: colors.greenTertiary,
        '&:hover': { backgroundColor: colors.greenSecondary },
        '&:focus': { backgroundColor: colors.greenSecondary },
        '& .MuiSvgIcon-root': { fill: colors.white, fontSize: 20 },
        '& .MuiSvgIcon-root:hover': { fill: colors.greenPrimary }
      };

      return (
        <Chip
          key={user.id}
          sx={chipStyles}
          icon={<FaceIcon sx={{ fill: colors.white, fontSize: 20 }} />}
          label={user.name}
          onDelete={() => handleDeleteUser(user)}
          onClick={() => handleEditUser(user)}
        />
      );
    },
    [colors, handleDeleteUser, handleEditUser]
  );

  return (
    <Paper elevation={3} sx={{ p: 3, pb: 1, pt: 2 }}>
      <DashboardShowcaseHeader
        title='Users List'
        buttonLabel='Create User'
        buttonCallback={handleCreateUser}
      />

      <Stack ref={lazyRef} sx={stackStyles} spacing={1} direction='row'>
        <Box sx={{ display: 'flex', gap: 1, width: CHIP_USER_WIDTH * allUsers.length }}>
          {allUsers.map(user => {
            return (
              <VirtualizedList key={user.id} rootRef={lazyRef}>
                {isIntersecting => {
                  return isIntersecting ? renderUserChip(user) : mockedContainerVirtualized();
                }}
              </VirtualizedList>
            );
          })}
        </Box>
      </Stack>
    </Paper>
  );
};

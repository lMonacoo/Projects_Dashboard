import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { CustomDialogActions } from '~/components/organisms/dashboardDialog/components/CustomDialogActions';
import { CustomDialogContentProjects } from '~/components/organisms/dashboardDialog/components/CustomDialogContentProjects';
import { CustomDialogContentUser } from '~/components/organisms/dashboardDialog/components/CustomDialogContentUser';
import { CustomDialogTitle } from '~/components/organisms/dashboardDialog/components/CustomDialogTitle';
import { initialProjectsFormValues, initialUserFormValues } from '~/constants';
import { useAppSelector } from '~/hooks';
import { DashboardDialogProps, DialogFormValuesProject, DialogFormValuesUser } from '~/interfaces';

export const DashboardDialog = ({ isOpen, onClose, onSubmit, variant }: DashboardDialogProps) => {
  const { projectDialogData, userDialogData } = useAppSelector(state => state.dashboard);
  const { allUsers } = useAppSelector(state => state.user);

  const formValuesInitialState = () => {
    if (variant === 'users') {
      if (userDialogData?.id) return userDialogData;
      return initialUserFormValues;
    }

    if (projectDialogData?.id) return projectDialogData;
    return initialProjectsFormValues;
  };

  const [formValues, setFormValues] = useState(formValuesInitialState());
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isNewUser = userDialogData?.id === undefined && variant === 'users';
    if (isNewUser) {
      const userData = formValues as DialogFormValuesUser;
      const hasEqualEmail = allUsers.some(user => user.email === userData.email);
      if (hasEqualEmail) return setFormErrors({ email: 'Email already exists' });
    }
    onSubmit(formValues);
  };

  const handleClose = () => {
    onClose();
  };

  const variantContent = {
    users: () => (
      <CustomDialogContentUser
        formErrors={formErrors}
        formValues={formValues as DialogFormValuesUser}
        setFormValues={setFormValues}
      />
    ),
    projects: () => (
      <CustomDialogContentProjects
        formValues={formValues as DialogFormValuesProject}
        setFormValues={setFormValues}
      />
    )
  };

  return (
    <Dialog
      sx={{ '& .MuiPaper-root': { width: '80%' } }}
      onClose={() => handleClose()}
      aria-labelledby='dialog-title'
      open={isOpen}
    >
      <form onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
        <CustomDialogTitle id='dialog-title' variant={variant} onClose={handleClose} />
        <DialogContent sx={{ pl: 3, pr: 3, pb: 1 }}>{variantContent[variant]()}</DialogContent>
        <CustomDialogActions variant={variant} onClose={handleClose} />
      </form>
    </Dialog>
  );
};

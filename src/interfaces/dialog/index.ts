import { IUsers } from '~/interfaces/users';

export type VariantDialog = 'users' | 'projects';

export interface DialogFormValuesUser {
  id?: number;
  name: string;
  email: string;
}

export interface DialogFormValuesProject {
  id?: number;
  name: string;
  owner: IUsers;
  description: string;
}

export type DialogFormValues = DialogFormValuesUser | DialogFormValuesProject;

export interface DashboardDialogProps {
  onClose: () => void;
  onSubmit: (data: DialogFormValues) => void;
  variant: VariantDialog;
  isOpen: boolean;
}

export interface CustomDialogTitleProps {
  onClose: () => void;
  id: string;
  variant: VariantDialog;
}

export interface CustomDialogContentUserProps {
  formValues: DialogFormValuesUser;
  setFormValues(data: DialogFormValuesUser): void;
}

export interface CustomDialogContentProjectProps {
  formValues: DialogFormValuesProject;
  setFormValues(data: DialogFormValuesProject): void;
}

export interface CustomDialogActionsProps {
  onClose: () => void;
  variant: VariantDialog;
}

import { VariantDialog } from '~/interfaces/dialog';
import { IProject } from '~/interfaces/project';
import { IUsers } from '~/interfaces/users';

export interface IDashboardSlice {
  dialogVariant: VariantDialog | 'idle';
  userDialogData: IUsers;
  projectDialogData: IProject;
}

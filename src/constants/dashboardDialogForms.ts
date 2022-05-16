import { DialogFormValuesProject, DialogFormValuesUser } from '~/interfaces';

export const initialUserFormValues: DialogFormValuesUser = {
  name: '',
  email: ''
};

export const initialProjectsFormValues: DialogFormValuesProject = {
  name: '',
  description: '',
  owner: { email: '', name: '', id: 0 }
};

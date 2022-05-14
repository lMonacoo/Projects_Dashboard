import { IProject } from '~/interfaces';

const initialProjects: IProject[] = [
  {
    id: 1,
    name: 'Xogito',
    description: 'Full Service product development that works',
    owner: {
      id: 1,
      name: 'Constantine (Gus) Spathis',
      email: 'constantine@gus.com'
    }
  },
  {
    id: 2,
    name: 'Xogito - CO-FOUNDER',
    description: 'Full Service product development that works - CO-FOUNDER',
    owner: {
      id: 2,
      name: 'Aris Spathis',
      email: 'aris@outlook.com'
    }
  },
  {
    id: 3,
    name: 'HIPAA',
    description: 'HIPAA Seal of Compliance Verification',
    owner: {
      id: 3,
      name: 'John Doe',
      email: 'john@gmail.com'
    }
  }
];

export default initialProjects;

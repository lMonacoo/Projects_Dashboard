import { IProject } from '~/interfaces';

const initialProjects: IProject[] = [
  {
    id: 2,
    name: 'Paipe',
    description: 'technology and information',
    owner: {
      id: 4,
      name: 'Aris Spathis',
      email: 'aris@outlook.com'
    }
  },
  {
    id: 3,
    name: 'HIPAA',
    description: 'HIPAA Seal of Compliance Verification',
    owner: {
      id: 5,
      name: 'John Doe',
      email: 'john@gmail.com'
    }
  },
  {
    id: 1,
    name: 'Xogito',
    description: 'Full Service product development that works',
    owner: {
      id: 1,
      name: 'Constantine Spathis',
      email: 'constantine@gus.com'
    }
  },
  {
    id: 4,
    name: 'Digital Business',
    description: 'Rich Media and Digital Marketing',
    owner: {
      id: 3,
      name: 'Jane Doe',
      email: 'jane@gmail.com'
    }
  },
  {
    id: 5,
    name: 'Github',
    description: 'Github is a web-based Git repository hosting service',
    owner: {
      id: 1,
      name: 'Constantine Spathis',
      email: 'constantine@gus.com'
    }
  }
];

export default initialProjects;

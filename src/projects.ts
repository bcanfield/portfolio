import type { ImageProps } from '~/utils/images-optimization';
import brandinImage from '~/assets/images/brandin-cartoon.png';

export interface PersonalProject {
  title: string;
  description: string;
  image: ImageProps['src'];
  technologies: Array<{ name: string; icon?: string }>;
}
export interface ProfessionalProject {
  title: string;
  description: string;
  technologies: Array<{ name: string; icon?: string }>;
}

export const personalProjects: PersonalProject[] = [
  {
    title: 'Project 1',
    description: 'asdf  afsdfasdf asdfasdf asdfasdf',
    image: brandinImage,
    technologies: [
      { name: 'Typescript', icon: 'tabler:brand-typescript' },
      { name: 'Docker', icon: 'tabler:brand-docker' },
    ],
  },
];

export const professionalProjects: ProfessionalProject[] = [
  {
    title: 'Project 1',
    description: 'asdf  afsdfasdf asdfasdf asdfasdf',
    technologies: [
      { name: 'Typescript', icon: 'tabler:brand-typescript' },
      { name: 'Docker', icon: 'tabler:brand-docker' },
    ],
  },
];

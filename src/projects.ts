import type { ImageProps } from '~/utils/images-optimization';
import southpawImage from '~/assets/images/projects/southpaw.png';
import wideImage from '~/assets/images/wide.png';
import nexquikImage from '~/assets/images/projects/nexquik.png';

export interface PersonalProject {
  title: string;
  description: string;
  image: ImageProps['src'];
  link?: string;
  technologies: Array<{ name: string; icon?: string }>;
}
export interface ProfessionalProject {
  title: string;
  description: string;
  technologies: Array<{ name: string; icon?: string }>;
}

export const personalProjects: PersonalProject[] = [
  {
    title: 'Nexquik',
    description:
      'Package to auto-generate Next.js 13 server components from a Prisma Schema. It recursively traverses the database tree to generate all nested models, giving you instant ability to create, view, edit, and delete anything in your database.',
    image: nexquikImage,
    link: 'https://github.com/bcanfield/nexquik',
    technologies: [
      { name: 'Next.js', icon: 'tabler:brand-nextjs' },
      { name: 'Prisma', icon: 'tabler:brand-prisma' },

      { name: 'Node', icon: 'tabler:brand-nodejs' },
      { name: 'Typescript', icon: 'tabler:brand-typescript' },
    ],
  },
  {
    title: 'Southpaw',
    description: `Library to authenticate with the private Fanduel API and query the authenticated user's data suche as upcoming contests, lineups, profile info, etc.`,
    image: southpawImage,
    link: 'https://github.com/bcanfield/southpaw',
    technologies: [{ name: 'Python', icon: 'tabler:brand-python' }],
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

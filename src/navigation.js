import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'My Projects',
      links: [
        {
          text: 'Personal',
          href: '#personal-projects',
        },
        {
          text: 'Professional',
          href: '#professional-projects',
        },
      ],
    },
    {
      text: 'About Me',
      href: '#',
    },
  ],
  actions: [{ text: 'Contact Me', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Built with:',
      links: [
        { text: 'Astro', href: '#', icon: 'tabler:rocket' },
        { text: 'Tailwind', href: '#', icon: 'tabler:brand-tailwind' },
        { text: 'Typescript', href: '#', icon: 'tabler:brand-typescript' },
      ],
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  // footNote: `
  //   <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
  //   Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};

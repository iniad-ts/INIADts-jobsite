require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'INIAD.ts',
  tagline: 'TypeScript is cool',
  noIndex: true,
  favicon: 'img/logo.png',
  customFields: {
    FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
    AUTH_EMULATOR_URL: process.env.AUTH_EMULATOR_URL,
    GA_ID: process.env.GA_ID,
  },

  url: 'https://iniad-ts.com',
  baseUrl: '/',

  organizationName: 'INIAD.ts',
  projectName: 'INIADts-jobsite',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/members/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/INIAD-Developers/INIADts-jobsite/tree/develop/client/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/INIAD-Developers/INIADts-jobsite/tree/develop/client/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          exclude: ['**/*.css.d.ts'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'INIAD.ts',
        logo: {
          alt: 'INIAD.ts Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/members',
            label: 'メンバー',
            position: 'left',
          },
          {
            to: '/contact',
            label: 'お問い合わせ',
            position: 'left',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Contents',
            items: [
              {
                label: '活動内容',
                to: '/#activity',
              },
              {
                label: 'メンバー',
                to: '/members',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'お問い合わせ',
                to: '/contact',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/iniad-developers/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} INIAD.ts.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

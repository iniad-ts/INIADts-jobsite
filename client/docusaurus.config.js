// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'INIAD.ts',
  tagline: 'TypeScript is cool',
  favicon: 'img/INIADts-logo.png',
  customFields: {
    FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
    AUTH_EMULATOR_URL: process.env.AUTH_EMULATOR_URL,
    GA_ID: process.env.GA_ID,
  },

  // Set the production url of your site here
  url: 'https://iniad-ts.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'INIAD.ts', // Usually your GitHub org/user name.
  projectName: 'INIADts-jobsite', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/INIAD-Developers/INIADts-jobsite/tree/develop/client/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      // Replace with your project's social card
      image: 'img/INIADts-logo.png',
      navbar: {
        title: 'INIAD.ts',
        logo: {
          alt: 'INIAD.ts Logo',
          src: 'img/INIADts-logo.png',
        },
        items: [
          {
            to: '/members',
            label: 'メンバー一覧',
            position: 'left',
            items: [
              {
                to: '/members/2025',
                label: '25卒',
              },
              {
                to: '/members/2026',
                label: '26卒',
              },
              {
                to: '/members/2027',
                label: '27卒',
              },
            ],
          },
          {
            to: '/contact',
            label: 'お問い合わせ',
            position: 'left',
          },
          {
            to: '/contact/business',
            label: '企業・団体の方へ',
            position: 'left',
          },
          {
            href: 'https://github.com/iniad-developers/INIADts-jobsite',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Members',
            items: [
              {
                label: '25卒',
                to: '/members/2025',
              },
              {
                label: '26卒',
                to: '/members/2026',
              },
              {
                label: '27卒',
                to: '/members/2027',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/iniad-developers/INIADts-jobsite',
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

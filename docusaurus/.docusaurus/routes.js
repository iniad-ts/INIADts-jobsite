import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1b1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e21'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'be5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b4f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '5cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '050'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7b8'),
    exact: true
  },
  {
    path: '/admin/',
    component: ComponentCreator('/admin/', 'd4f'),
    exact: true
  },
  {
    path: '/admin/index.module.css.d',
    component: ComponentCreator('/admin/index.module.css.d', '11b'),
    exact: true
  },
  {
    path: '/admin/login/',
    component: ComponentCreator('/admin/login/', '845'),
    exact: true
  },
  {
    path: '/admin/login/index.module.css.d',
    component: ComponentCreator('/admin/login/index.module.css.d', '087'),
    exact: true
  },
  {
    path: '/admin/members/',
    component: ComponentCreator('/admin/members/', '1f5'),
    exact: true
  },
  {
    path: '/admin/members/index.module.css.d',
    component: ComponentCreator('/admin/members/index.module.css.d', '19d'),
    exact: true
  },
  {
    path: '/admin/profile/',
    component: ComponentCreator('/admin/profile/', 'd9d'),
    exact: true
  },
  {
    path: '/admin/profile/index.module.css.d',
    component: ComponentCreator('/admin/profile/index.module.css.d', 'e90'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e0d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '9e1'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '2b7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '301'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '4bf'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '886'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '245'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b1e'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '763'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '267'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'e6b'),
    exact: true
  },
  {
    path: '/contact/',
    component: ComponentCreator('/contact/', 'a33'),
    exact: true
  },
  {
    path: '/contact/index.module.css.d',
    component: ComponentCreator('/contact/index.module.css.d', '92f'),
    exact: true
  },
  {
    path: '/index.module.css.d',
    component: ComponentCreator('/index.module.css.d', '16c'),
    exact: true
  },
  {
    path: '/members/',
    component: ComponentCreator('/members/', '789'),
    exact: true
  },
  {
    path: '/members/index.module.css.d',
    component: ComponentCreator('/members/index.module.css.d', 'f39'),
    exact: true
  },
  {
    path: '/members/',
    component: ComponentCreator('/members/', 'a84'),
    routes: [
      {
        path: '/members/2025',
        component: ComponentCreator('/members/2025', '326'),
        exact: true,
        sidebar: "memberSidebar"
      },
      {
        path: '/members/2026',
        component: ComponentCreator('/members/2026', '9dd'),
        exact: true,
        sidebar: "memberSidebar"
      },
      {
        path: '/members/2027',
        component: ComponentCreator('/members/2027', '91b'),
        exact: true,
        sidebar: "memberSidebar"
      },
      {
        path: '/members/intro',
        component: ComponentCreator('/members/intro', '88f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/members/member/2025/aaa',
        component: ComponentCreator('/members/member/2025/aaa', '934'),
        exact: true,
        sidebar: "memberSidebar"
      },
      {
        path: '/members/member/2025/bbb',
        component: ComponentCreator('/members/member/2025/bbb', 'e11'),
        exact: true,
        sidebar: "memberSidebar"
      },
      {
        path: '/members/member/2026/ccc',
        component: ComponentCreator('/members/member/2026/ccc', 'c09'),
        exact: true,
        sidebar: "memberSidebar"
      },
      {
        path: '/members/member/2026/ddd',
        component: ComponentCreator('/members/member/2026/ddd', '578'),
        exact: true,
        sidebar: "memberSidebar"
      },
      {
        path: '/members/member/2027/ddd',
        component: ComponentCreator('/members/member/2027/ddd', '063'),
        exact: true,
        sidebar: "memberSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9f5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

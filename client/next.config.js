/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  output: 'export',
  trailingSlash: true,
  transpilePackages: Object.entries(require('./package.json').dependencies)
    .filter((value) => value[1].startsWith('file:'))
    .map(([key]) => key),
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

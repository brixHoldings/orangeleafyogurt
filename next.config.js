/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    appDir: true,
  },

  // i18n: {
  //   locales: ['en-US'],
  //   defaultLocale: 'en-US',
  // },

  compiler: {
    styledComponents: true,
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'orangeleaffranchises.com',
          },
        ],
        destination: '/orange-leaf/franchising',
      },
    ];
  },
};

module.exports = nextConfig;

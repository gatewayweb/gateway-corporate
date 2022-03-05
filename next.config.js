module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  async redirects() {
    return [
      {
        source: '/our-work',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect all traffic to the sdrmy directory which contains our updated project
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: '/sdrmy/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

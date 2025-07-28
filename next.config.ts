import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
      {
        protocol: 'https',
        hostname: 'xdungeon.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zerogangnam.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'naverbooking-phinf.pstatic.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

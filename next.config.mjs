/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.turing.ac.uk',
        port: '',
        pathname: '**',
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;

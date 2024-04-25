/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 1. Set basePath
  basePath: '/prefix',

  rewrites: async () => {
    return [
      // 2. Add a rewrite rule to redirect /destination to /prefix/destination
      {
        source: '/destination',
        destination: 'http://localhost:3000/prefix/destination',
        basePath: false
      },

      // Expected: http://localhost:3000/destination displays the content of http://localhost:3000/prefix/destination without a redirect
      // Actual: http://localhost:3000/destination displays the content of http://localhost:3000/prefix/destination with a redirect
    ];
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/phoenix", permanent: true },
    ];
  },
};

module.exports = nextConfig;

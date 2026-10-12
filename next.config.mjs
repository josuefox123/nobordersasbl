/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Anciennes URLs du site Squarespace -> nouvelles pages
    return [
      { source: "/donation", destination: "/nous-soutenir", permanent: true },
      { source: "/soutient", destination: "/nous-soutenir", permanent: true },
    ];
  },
};

export default nextConfig;

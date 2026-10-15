// Contourne les erreurs de certificat SSL en développement local (WAMP / proxy)
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Empêche Next.js de tenter de télécharger les polices Google au démarrage
  optimizeFonts: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/connexion", destination: "/login" },
      { source: "/inscription", destination: "/register" },
      { source: "/mot-de-passe-oublie", destination: "/forgot-password" },
      { source: "/reinitialiser-mot-de-passe", destination: "/reset-password" },
    ];
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

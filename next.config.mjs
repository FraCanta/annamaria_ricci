/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // i18n: {
  //   locales: ["it"],
  //   defaultLocale: "it",
  //   localeDetection: true,
  // },
  images: {
    domains: ["blogannamaria.annamariaricci.eu", "i0.wp.com"],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  newNextLinkBehavior: true,
  images: {
    domains: [
      'files.stripe.com',
    ],
  },
};

export default nextConfig;

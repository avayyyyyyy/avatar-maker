/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "slnt.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "techcrunch.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

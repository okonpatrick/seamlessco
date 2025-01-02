/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // domains: ['cdn.rareblocks.xyz'], // Add the external domain here
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };
  
  export default nextConfig;
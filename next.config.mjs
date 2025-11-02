/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: false  //changes made in this line
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.pexels.com"
      }
    ]
  }
};

export default nextConfig;

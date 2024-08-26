/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optional: configure any other settings here
    webpack(config) {
      // Add TypeScript support and any other webpack configurations
      config.resolve.extensions.push('.js', '.jsx');
      return config;
    },
  };
  
  export default nextConfig;
  
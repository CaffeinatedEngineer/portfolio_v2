/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure output for static site generation
  output: 'export',
  
  // Disable image optimization since it requires a server component
  images: {
    unoptimized: true,
  },
  
  // Disable server components for static site generation
  // The appDir option is no longer needed in Next.js 14 as it's the default
};

export default nextConfig;

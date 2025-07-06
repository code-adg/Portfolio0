/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "docs", // GitHub Pages expects files in the /docs folder
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

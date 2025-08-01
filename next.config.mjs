/** @type {import('next').NextConfig} */
const nextConfig = {
  // This enables static export
  output: "export",
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",

  // basePath: process.env.NODE_ENV === "production" ? "/te-amo-hospitality" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

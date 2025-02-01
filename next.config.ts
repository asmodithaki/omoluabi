import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disabling Turbopack to fall back to Webpack for compatibility with some modules
  reactStrictMode: true, // Ensures React Strict Mode is enabled for better development warnings
};

export default nextConfig;

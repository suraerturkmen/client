/** @type {import('next').NextConfig} */

const { version } = require("./package.json");
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  compiler: {},
  transpilePackages: ["@mui/x-charts"], //!!!!
};

module.exports = nextConfig;

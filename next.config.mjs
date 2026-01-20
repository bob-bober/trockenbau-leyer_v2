/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Disable caching during development for CSS updates
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

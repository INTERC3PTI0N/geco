/** @type {import('next').NextConfig} */
const nextConfig = {
  // R3F disposes the WebGL context on Strict Mode's dev double-mount, which makes
  // the hero canvas flash and vanish. Disabling matches production behaviour.
  reactStrictMode: false,
};

export default nextConfig;

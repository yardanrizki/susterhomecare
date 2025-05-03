// next.config.js (file yang didukung Next.js)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Mengaktifkan mode ketat untuk React
  experimental: {
    turbopack: true, // Hanya aktifkan jika ingin menggunakan Turbopack
  },
};

module.exports = nextConfig;

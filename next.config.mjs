/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats; the optimizer resizes per device.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

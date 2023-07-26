/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
    remotePatterns: [
      {
        hostname: "tailwindui.com",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        port: "",
        hostname: "images.unsplash.com",
        pathname: "/**/*",
      },
    ]
  }
}

module.exports = nextConfig

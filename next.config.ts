import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.milwaukeewaterpros.co" }],
        destination: "https://milwaukeewaterpros.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer'
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig: NextConfig = {
  images: {
    // domains: ['api.minhnhatshop.io.vn'],
    domains: ['api.minhnhatshop.io.vn', "lh3.googleusercontent.com", "platform-lookaside.fbsbx.com"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '6565',
        pathname: '/public/images/avatar/**',
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
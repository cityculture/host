import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'kvhjzpqkzydvjwdtqswr.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'saltymediaproduction.com',
      },
      {
        protocol: 'https',
        hostname: '*.saltymediaproduction.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://checkout.razorpay.com https://api.razorpay.com https://cdn.razorpay.com https://www.googletagmanager.com https://*.googletagmanager.com https://connect.facebook.net https://*.facebook.net https://static.cloudflareinsights.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' blob: data: https://kvhjzpqkzydvjwdtqswr.supabase.co https://images.unsplash.com https://res.cloudinary.com https://cdn.razorpay.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.google.com https://www.google.co.in https://www.facebook.com https://*.facebook.com https://lumberjack-cx.razorpay.com https://lh3.googleusercontent.com https://saltymediaproduction.com https://*.saltymediaproduction.com; font-src 'self' https://fonts.gstatic.com; frame-src 'self' https://checkout.razorpay.com https://api.razorpay.com https://cdn.razorpay.com https://www.facebook.com https://*.facebook.com; connect-src 'self' https://kvhjzpqkzydvjwdtqswr.supabase.co wss://kvhjzpqkzydvjwdtqswr.supabase.co https://lumberjack-cx.razorpay.com https://lumberjack.razorpay.com https://api.razorpay.com https://checkout.razorpay.com https://cdn.razorpay.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.googletagmanager.com https://connect.facebook.net https://*.facebook.net https://www.facebook.com https://*.facebook.com https://signals.birchub.us https://static.cloudflareinsights.com;",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [];
  },
  async redirects() {
    return [];
  },
  serverExternalPackages: ['razorpay'],
  experimental: {
    serverActions: {
      bodySizeLimit: '5MB',
    },
  },
};

export default nextConfig;

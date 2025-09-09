import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  rewrites: async () => {
    const rewrites = [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ]

    console.log('Rewrites configured:', rewrites)
    return rewrites
  },
  images: {
    remotePatterns: [new URL('https://imagedelivery.net/zpLj0pmaMITI_7J7jyHI-A/**')],
  },
}

export default nextConfig

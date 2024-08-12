/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        STRAPI_API_URL: process.env.STRAPI_API_URL,
        STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN
    },
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;

  
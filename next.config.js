/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'romansementsov.ru',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
}

module.exports = nextConfig

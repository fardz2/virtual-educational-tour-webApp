/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: `https`,
                hostname: `placehold.co`,
                port: ``,
                pathname: `/400x400/png`,
            },
        ],
    },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        domains: ['images.unsplash.com','avatars.mds.yandex.net','www.google.com','frankfurt.apollo.olxcdn.com'],
    },
};

export default nextConfig;

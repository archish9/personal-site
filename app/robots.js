export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://archish.dev/sitemap.xml',
    };
}

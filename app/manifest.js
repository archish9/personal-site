export default function manifest() {
    return {
        name: 'Archish Patel — Senior Full-Stack Developer & AI Engineer',
        short_name: 'Archish Patel',
        description:
            'Senior full-stack engineer with 11+ years of experience building scalable systems, AI-powered applications, and RAG architectures.',
        start_url: '/',
        display: 'standalone',
        background_color: '#f7f4ef',
        theme_color: '#f7f4ef',
        icons: [
            { src: '/icon', sizes: '32x32', type: 'image/png' },
            { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
        ],
    };
}

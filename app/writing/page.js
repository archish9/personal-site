import posts from '../../post.json';
import TimelineEntry from '../../components/TimelineEntry';
import styles from './page.module.css';

// Sort all posts by date descending (newest first)
function getAllPostsSorted(allPosts) {
    return [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const metadata = {
    title: 'Writing',
    description:
        'Notes on AI engineering, system design, automation, and lessons from building software for over a decade.',
    alternates: {
        canonical: 'https://iamnoob.in/writing',
    },
    openGraph: {
        title: 'Writing — Archish Patel',
        description:
            'Notes on AI engineering, system design, automation, and lessons from building software for over a decade.',
        url: 'https://iamnoob.in/writing',
        images: [
            {
                url: '/images/archish-patel.webp',
                width: 320,
                height: 320,
                alt: 'Archish Patel',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Writing — Archish Patel',
        description:
            'Notes on AI engineering, system design, automation, and lessons from building software for over a decade.',
        images: ['/images/archish-patel.webp'],
    },
};

export default function WritingPage() {
    const sortedPosts = getAllPostsSorted(posts);

    return (
        <>
            {/* PAGE INTRO */}
            <div className={styles.pageIntro}>
                <h1 className={styles.pageTitle}>Writing</h1>
                <p className={styles.pageSubtitle}>
                    &ldquo;Notes on AI engineering, system design, automation, and lessons
                    from building software for over a decade.&rdquo;
                </p>
            </div>

            {/* TIMELINE */}
            <section className={styles.timelineSection} aria-label="Writing timeline">
                <ol className={styles.timeline} aria-label="Articles in chronological order">
                    {sortedPosts.map((post, index) => (
                        <TimelineEntry
                            key={post.url}
                            title={post.title}
                            excerpt={post.description}
                            date={post.date}
                            url={post.url}
                            index={index}
                        />
                    ))}
                </ol>
            </section>
        </>
    );
}

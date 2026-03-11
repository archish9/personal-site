import styles from './page.module.css';

export const metadata = {
    title: 'About',
    description:
        'About Archish Patel — a senior full-stack engineer with 11+ years of experience, focused on AI engineering, GenAI systems, and intelligent software.',
    alternates: {
        canonical: 'https://archish.dev/about',
    },
    openGraph: {
        title: 'About — Archish Patel',
        description:
            'Senior full-stack engineer with 11+ years of experience, focused on AI engineering, GenAI systems, and intelligent software.',
        url: 'https://archish.dev/about',
    },
};

export default function AboutPage() {
    return (
        <>
            {/* PAGE INTRO */}
            <div className={styles.pageIntro}>
                <h1 className={styles.pageTitle}>About Archish</h1>
                <p className={styles.pageSubtitle}>&ldquo;Welcome to my corner of the internet.&rdquo;</p>
            </div>

            <div className={styles.divider} role="separator" />

            {/* ESSAY */}
            <article className={styles.essay} aria-label="About Archish Patel">
                <p className={styles.lead}>
                    I&apos;m a software engineer with more than a decade of experience building web
                    applications, automation systems, and distributed platforms. Over the years I&apos;ve
                    worked across the full stack — from databases and backend APIs to cloud infrastructure
                    and modern front-ends. I enjoy building things that solve real problems and designing
                    systems with enough care that they hold up long after the initial excitement wears off.
                </p>

                <p>
                    In recent years my curiosity has shifted considerably toward{' '}
                    <strong>artificial intelligence and the emerging discipline of AI engineering</strong>.
                    I&apos;ve been spending a meaningful amount of time exploring GenAI applications,
                    retrieval-augmented generation (RAG) architectures, agent systems, and the broader
                    challenge of building AI software that reliably does what it promises in production.
                    It&apos;s a fascinating space — equal parts exciting and humbling.
                </p>

                <p>
                    My career started in traditional web development working with{' '}
                    <strong>PHP, JavaScript, and MySQL</strong>, building applications before the modern
                    Python ecosystem had fully taken hold. Over time I migrated toward{' '}
                    <strong>Python, Django, FastAPI</strong>, and cloud-native backend architectures. Each
                    phase felt like the right progression at the time, and looking back, the through-line
                    has always been the same: build something useful, understand how it breaks, and figure
                    out how to make it better. That pattern of{' '}
                    <strong>continual evolution</strong> is the closest thing I have to a career
                    philosophy.
                </p>

                <p>
                    At a deeper level I think of engineering as a discipline of careful thinking. The
                    hardest problems I&apos;ve encountered weren&apos;t purely technical — they were about
                    understanding systems, trade-offs, and the context in which software lives.{' '}
                    <strong>Systems thinking</strong>, the patience to understand something thoroughly
                    before changing it, and the willingness to question assumptions that have always been
                    treated as facts — these feel more important to me with every passing year. The tools
                    change. The underlying craft, less so.
                </p>

                <p>
                    Outside of building systems, I enjoy{' '}
                    <strong>writing about engineering, AI, and the lessons I&apos;ve picked up along
                        the way</strong>. Writing forces clarity. It&apos;s also a way of giving back a little
                    — if something I figured out the hard way saves someone else half a day of confusion,
                    that feels worth the effort. This site is where I do that thinking out loud.
                </p>
            </article>

            {/* CALLOUT CARD */}
            <div
                className={styles.calloutCard}
                role="complementary"
                aria-labelledby="callout-title"
            >
                <h2 className={styles.calloutTitle} id="callout-title">
                    Working with me
                </h2>
                <p className={styles.calloutBody}>
                    Over the years I&apos;ve developed a set of principles for building software and
                    collaborating with teams. I care deeply about thoughtful system design, reliability,
                    and building tools that genuinely help people. I try to write code that future-me can
                    understand, ask questions before writing a line, and prefer boring and correct over
                    clever and fragile.
                </p>
                <a href="mailto:hello@archish.dev" className={styles.calloutLink} aria-label="Get in touch">
                    Get in touch
                </a>
            </div>
        </>
    );
}

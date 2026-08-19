import projects from '../../opensource.json';
import OpensourceEntry from '../../components/OpensourceEntry';
import styles from './page.module.css';

export const metadata = {
    title: 'Opensource Contribution',
    description: 'Open source projects I have built and contributed to.',
    alternates: {
        canonical: 'https://iamnoob.in/opensource',
    },
    openGraph: {
        title: 'Opensource Contribution — Archish Patel',
        description: 'Open source projects I have built and contributed to.',
        url: 'https://iamnoob.in/opensource',
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
        title: 'Opensource Contribution — Archish Patel',
        description: 'Open source projects I have built and contributed to.',
        images: ['/images/archish-patel.webp'],
    },
};

export default function OpensourcePage() {
    return (
        <>
            {/* PAGE INTRO */}
            <div className={styles.pageIntro}>
                <h1 className={styles.pageTitle}>Opensource Contribution</h1>
                <p className={styles.pageSubtitle}>
                    &ldquo;Open source projects I have built and contributed to.&rdquo;
                </p>
            </div>

            {/* TIMELINE */}
            <section className={styles.timelineSection} aria-label="Opensource projects">
                <ol className={styles.timeline} aria-label="Opensource projects list">
                    {projects.map((project, index) => (
                        <OpensourceEntry
                            key={project.project_link}
                            name={project.name}
                            excerpt={project.description}
                            pageLink={project.page_link}
                            projectLink={project.project_link}
                            index={index}
                        />
                    ))}
                </ol>
            </section>
        </>
    );
}

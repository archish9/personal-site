import styles from './OpensourceEntry.module.css';

export default function OpensourceEntry({ name, excerpt, pageLink, projectLink, index }) {
    const delay = 0.7 + index * 0.15;

    return (
        <li className={styles.entry}>
            <div className={styles.nameCol}>
                <span className={styles.name}>{name}</span>
                <span className={styles.node} style={{ animationDelay: `${delay}s` }} aria-hidden="true" />
            </div>
            <div className={styles.content} style={{ animationDelay: `${delay}s` }}>
                <a href={pageLink} className={styles.title}>
                    {name}
                </a>
                <a
                    href={projectLink}
                    className={styles.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub &#8599;
                </a>
                {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
            </div>
        </li>
    );
}

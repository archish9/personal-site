import Link from 'next/link';
import styles from './SectionHeader.module.css';

export default function SectionHeader({
    title,
    titleId,
    linkHref,
    linkText = 'All posts →',
    subtitle,
}) {
    return (
        <>
            <div className={styles.header}>
                <h2 className={styles.title} id={titleId}>
                    {title}
                </h2>
                {linkHref && (
                    <Link href={linkHref} className={styles.link}>
                        {linkText}
                    </Link>
                )}
            </div>
            {subtitle && <p className={styles.meta}>{subtitle}</p>}
        </>
    );
}

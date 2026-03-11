import Link from 'next/link';
import styles from './ArticleItem.module.css';

export default function ArticleItem({ title, excerpt, date, url, index = 0 }) {
    const isExternal = url && url.startsWith('http');

    const linkProps = isExternal
        ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
        : {};

    const TitleTag = isExternal ? 'a' : Link;

    return (
        <li
            className={styles.item}
            style={{ animationDelay: `${0.7 + index * 0.12}s` }}
        >
            <div className={styles.content}>
                <TitleTag
                    href={url}
                    className={styles.title}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                    {title}
                </TitleTag>
                {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
            </div>
            {date && (
                <time className={styles.date} dateTime={date}>
                    {formatDate(date)}
                </time>
            )}
        </li>
    );
}

function formatDate(dateStr) {
    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    } catch {
        return dateStr;
    }
}

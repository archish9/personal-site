'use client';

import { useEffect, useRef } from 'react';
import styles from './TimelineEntry.module.css';

export default function TimelineEntry({ title, excerpt, date, url, index }) {
    const nodeRef = useRef(null);
    const contentRef = useRef(null);

    // Format date for display: "Dec\n2025"
    function formatTimelineDate(dateStr) {
        try {
            const d = new Date(dateStr);
            if (isNaN(d.getTime())) return { month: '', year: dateStr };
            return {
                month: d.toLocaleDateString('en-US', { month: 'short' }),
                year: d.getFullYear(),
            };
        } catch {
            return { month: '', year: dateStr };
        }
    }

    const { month, year } = formatTimelineDate(date);
    const delay = 0.7 + index * 0.15;

    const isExternal = url && url.startsWith('http');

    return (
        <li className={styles.entry}>
            <div className={styles.dateCol}>
                <time className={styles.date} dateTime={date}>
                    {month}
                    <br />
                    {year}
                </time>
                <span className={styles.node} aria-hidden="true" style={{ animationDelay: `${delay}s` }} />
            </div>
            <div className={styles.content} style={{ animationDelay: `${delay}s` }}>
                <a
                    href={url}
                    className={styles.title}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                    {title}
                </a>
                {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
            </div>
        </li>
    );
}

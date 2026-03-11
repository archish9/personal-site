'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function NavLink({ href, label }) {
    const pathname = usePathname();
    return (
        <Link
            href={href}
            className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
        >
            {label}
        </Link>
    );
}

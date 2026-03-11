import Link from 'next/link';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/writing', label: 'Writing' },
    { href: '/about', label: 'About' },
];

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.siteName}>
                    Archish Patel
                </Link>
                <nav aria-label="Main navigation" className={styles.nav}>
                    {navLinks.map((link) => (
                        <NavLink key={link.href} href={link.href} label={link.label} />
                    ))}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}

import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <p className={styles.copy}>© {currentYear} Archish Patel</p>
                <p className={styles.tagline}>Built with curiosity and coffee.</p>
            </div>
        </footer>
    );
}

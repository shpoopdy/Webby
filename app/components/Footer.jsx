import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="">Twitter</Link>
            <Link href="">Instagram</Link>
            <Link href="">Youtube</Link>
        </footer>
    )
}
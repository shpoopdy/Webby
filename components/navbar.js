import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navbarList}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/youtube">
                        Youtube
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
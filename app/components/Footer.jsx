import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { ThemeContext } from '../layout';

export default function Footer() {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={styles.footer}>
            <Link href="https://www.youtube.com/channel/UCaRbyJwt7N2RtOB7tWPPN3w">
                <Image
                    src={theme === 'light' ? "/images/youtube.png" : "/images/youtube-dark.png"}
                    alt="YouTube Icon"
                    width={20}
                    height={20}>
                </Image>
            </Link>
            <Link href="https://www.instagram.com/shpoopdy">
                <Image
                    src={theme === 'light' ? "/images/instagram.png" : "/images/instagram-dark.png"}
                    alt="Instagram Icon"
                    width={20}
                    height={20}>
                </Image>
            </Link>
            <Link href="https://www.linkedin.com/in/michael-c-b00a15104/">
                <Image
                    src={theme === 'light' ? "/images/linkedin.png" : "/images/linkedin-dark.png"}
                    alt="Linkedin Icon"
                    width={20} 
                    height={20}>
                </Image>
            </Link>
        </footer>
    )
}

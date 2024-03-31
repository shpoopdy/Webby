import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="https://www.youtube.com/channel/UCaRbyJwt7N2RtOB7tWPPN3w">
                <Image src="/images/tubes.png" alt="YouTube Image" width={20} height={20}></Image>
            </Link>
            <Link href="https://www.instagram.com/shpoopdy">
                <Image src="/images/insta.png" alt="Instagram Image" width={20} height={20}></Image>
            </Link>
            <Link href="https://www.linkedin.com/in/michael-c-b00a15104/">
                <Image src="/images/linked.png" alt="LinkedIn Image" width={20} height={20}></Image>
            </Link>
        </footer>
    )
}

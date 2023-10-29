import Image from 'next/image';
import Link from 'next/link';
import styles from './pCard.module.css';

export default function pCard() {
    return (
        <div className={styles.pCard}>
            <Image src="/images/twitterBot.png" alt="Twitter Bot" width={200} height={200} className={styles.pCardImage}/>
            <Link href="https://github.com/shpoopdy/TwitterBot">Twitter Bot</Link>
            <p>Sample Text</p>
        </div>
    )
}
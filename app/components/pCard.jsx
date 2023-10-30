import Image from 'next/image';
import Link from 'next/link';
import styles from './pCard.module.css';

export default function pCard(props) {
    return (
        <div className={styles.pCard}>
            <Image src={props.Image} alt="Twitter Bot" width={200} height={200} className={styles.pCardImage}/>
            <Link href={props.Link}>{props.name}</Link>
            <p>Sample Text</p>
        </div>
    )
}
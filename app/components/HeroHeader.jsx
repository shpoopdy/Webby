import Image from 'next/image';
import styles from './HeroHeader.module.css';

export default function HeroHeader() {
    return (
        <div className={styles.heroContain}>
            <div>
              <Image src="/images/me.png" alt="Mikey's Image" width={250} height={250} className={styles.hero_image} />
            </div>
        
            <div className={styles.hero_feature}>
              <h1>Mikey</h1>
              <p>10:00am</p>
            </div>
        </div>
    )
}
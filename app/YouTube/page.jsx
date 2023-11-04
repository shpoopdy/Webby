import styles from '../page.module.css';

//components
import Vid from '../components/vidCard';

export default function YouTube() {
    return (
      <main className={styles.mainContain}>
        <h1>YouTube</h1>
        <Vid />
      </main>
    )
  }
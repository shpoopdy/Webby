import styles from '../page.module.css';

//components
import Vid from '../components/vidCard';
import VidList from '../components/vidCardList';

export default function YouTube() {
    return (
      <main className={styles.mainContain}>
        <h1>YouTube</h1>
        <VidList />
      </main>
    )
  }
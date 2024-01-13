import styles from '../globals.css';

//components
import VidList from '../components/vidCardList';

export default function YouTube() {
    return (
      <main className="mainContain">
        <h1>YouTube</h1>
        <h3>Little blips from my life!</h3>
        <VidList />
      </main>
    )
  }

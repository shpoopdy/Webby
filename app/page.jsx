import styles from './page.module.css';

//components
import CardList from './components/pCardList';
import Hero from './components/HeroHeader';

/*
  TODO:
    1. There's a lot of different files doing the same thing, styles. Fix that.
    2. Figure out the YouTube API so you can dynamically fill in the video page from the Vlog playlist
    3. Do just general cleanup and try to learn this stuff better. APIs, Backends, etc.
  */

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.mainContain}>
        <h3>About</h3>
        <p>'Hello! My name is Michael and I currently have a B.S. degree in Computer Science. I enjoy facing new challenges and diving into the deep end to start figuring things out.</p>
          <br></br>
        <p>
          I have done projects using languages like C++, C#, JavaScript, Python, and PHP. I have also done some personal projects outside of class that have allowed me to gain a deeper understanding of what I\'ve been learning, most of which can be viewed on my GitHub page. In my free time I like to play chess, piano, study the violin, play video games, make YouTube videos, go hiking, and just socialize with people.'
        </p>
        <h3>Projects</h3>
        <div>
          <CardList />
        </div>
      </div>
    </main>
  )
}

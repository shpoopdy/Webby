import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.mainContain}>
        <h3>About</h3>
        <p>'Hello! My name is Michael and I currently have a B.S. degree in Computer Science. I enjoy facing new challenges and diving into the deep end to start figuring things out.</p>
          <br></br>
        <p>
          I have done projects using languages like C++, C#, JavaScript, Python, and PHP. I have also done some personal projects outside of class that have allowed me to gain a deeper understanding of what I\'ve been learning, most of which can be viewed on my GitHub page. In my free time I like to play chess, piano, study the violin, play video games, make YouTube videos, go hiking, and just socialize with people.'
        </p>

        <h3>Projects</h3>
      </div>
    </main>
  )
}

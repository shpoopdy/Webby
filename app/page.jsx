import './globals.css';

//components
import CardList from './components/pCardList';
import Hero from './components/HeroHeader';

/*
  TODO:
    1. There's a lot of different files doing the same thing, styles. Fix that.
    2. Figure out the YouTube API so you can dynamically fill in the video page from the Vlog playlist
    3. Do just general cleanup and try to learn this stuff better. APIs, Backends, etc.
    p.s. I hate that it says webby.javascript
  */

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mainContain">
        <h3>About</h3>
        <p>Hello! My name is Michael and I currently have a B.S. degree in Computer Science.</p>
  
        <h3>Projects</h3>
        <div>
          <CardList />
        </div>
      </div>
    </main>
  )
}

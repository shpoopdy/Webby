"use client"
import { createContext, useContext } from 'react';
import './globals.css';

//components
import VidList from './components/vidCardList';
import Hero from './components/HeroHeader';

/*
  TODO:
    1. There's a lot of different files doing the same thing, styles. Fix that.
    2. Figure out the YouTube API so you can dynamically fill in the video page from the Vlog playlist
    3. Do just general cleanup and try to learn this stuff better. APIs, Backends, etc.
    4. Dark Them using Context
    p.s. I hate that it says webby.javascript
  */

const ThemeContext = createContext(null);

export default function Home() {
  const theme = useContext(ThemeContext);
  return (
    <main>
      <Hero />
      <div className="mainContain-light">
        <h3>About</h3>
        <p>Hello! My name is Michael and I currently work as a programmer for <a className='p_links-light' href='https://www.humboldt.edu' target='_blank'>California State Polytechnic University, Humboldt</a></p>&nbsp; 
 
        <p>I have a passion for helping people if I can and a passion for technology. I've been blessed to be able to have a job that enables me
        to have the best of both worlds. When I'm not at work, but I'm still feeling in the zone I like to work on my personal website, this one,
        as well as some ideas that I have floating around in my head that will be of use to everyone.
        </p>

        <h3>I Love</h3>
        <p>Nature, friends, the ocean, making music, making YouTube videos, and being cozy.</p>

        <h3>YouTube</h3>
        <VidList />
      </div>
    </main>
  )
}

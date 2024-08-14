import { useContext } from 'react';
import { ThemeContext } from '../layout';
import Link from 'next/link';
import '../globals.css';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav>
        <button className='theme-toggle' onClick={() => {toggleTheme(theme === 'light' ? 'dark' : 'light')}}>PUSH!</button>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Blog" passHref>Blog</Link>
          </li>
          <li>
            <Link href="/Work">Work</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

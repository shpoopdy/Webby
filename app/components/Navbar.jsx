import { useContext } from 'react';
import { ThemeContext } from '../layout';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';


export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav className='DesktopNavbar'>
        <button
          className='theme-toggle'
          id={theme === 'light' ? 'dark' : 'light'}
          onClick={() => {toggleTheme(theme === 'light' ? 'dark' : 'light')}}>
          <Image id='btn-img' src={theme === 'light' ? "/images/moon.png" : "/images/sun.png"} alt="Moon Icon" width={25} height={25} />
        </button>
        <NavLinks />
      </nav>
    </>
  )
}

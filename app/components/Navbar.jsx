import { useContext } from 'react';
import { ThemeContext } from '../layout';
import Image from 'next/image';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';


export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav>
        <button
          className='theme-toggle'
          id={theme === 'light' ? 'dark' : 'light'}
          onClick={() => {toggleTheme(theme === 'light' ? 'dark' : 'light')}}>
          <Image id='btn-img' src={theme === 'light' ? "/images/moon.png" : "/images/sun.png"} alt="Moon Icon" width={25} height={25} />
        </button>
        <DesktopNavbar />
        <MobileNavbar />
      </nav>
    </>
  )
}

import { useState } from "react"
import { useContext } from 'react';
import { ThemeContext } from '../layout';
import NavLinks from './NavLinks';
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function MobileNavbar() {
  const [click, setClick] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const hamburger = <IoMdMenu className="HamburgerMenu"
                      size="30px" color={theme === 'dark' ? 'white' : 'black'}
                      onClick={() => setClick(!click)} />;

  const close = <MdClose className='HamburgerMenu'
                  size="30px" color={theme === 'dark' ? 'white' : 'black'}
                  onClick={() => setClick(!click)} />;
  const closeMenu = () => setClick(false);
  return (
    <>
      <nav className='MobileNavbar'>
        { click ? close : hamburger }
        { click && <NavLinks isClicked={true} closeMenu={closeMenu}/> }
      </nav>
    </>
  )
}

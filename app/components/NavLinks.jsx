import Link from 'next/link';


const NavLinks = ({isClicked, closeMenu}) => {
  return (
    <nav className="NavLinks">
      <ul>
        <li onClick={() => isClicked && closeMenu()}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <Link href="/Blog" passHref>Blog</Link>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <Link href="/Work">Work</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks;
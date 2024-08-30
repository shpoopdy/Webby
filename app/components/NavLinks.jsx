import Link from 'next/link';


const NavLinks = () => {
  return (
    <nav className="NavLinks">
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
  )
}

export default NavLinks;
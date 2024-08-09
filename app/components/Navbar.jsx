import Link from 'next/link';
import '../globals.css';

export default function Navbar() {
  return (
    <>
      <nav>
        <button className='theme-toggle'>PUSH!</button>
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

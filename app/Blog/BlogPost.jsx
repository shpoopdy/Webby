import Link from 'next/link';
import BlogPage from './BlogPage';

export default function BlogPost(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <h2>
        <Link href={BlogPage(props)}>{props.title}</Link>
      </h2>
    </>
  )
}
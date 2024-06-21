import Link from 'next/link';

export default function BlogPost({ id, title, content }) {
  return (
    <>
      <h2>
        <Link href={`/Blog/${id}`}>{title}</Link>
      </h2>
    </>
  )
}
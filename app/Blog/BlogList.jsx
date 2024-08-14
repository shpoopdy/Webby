import Link from 'next/link';
import getFormattedDate from '../../lib/getFormattedDate';


export default function BlogList({ post }) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  
  
  return (
    <div>
      <li>
        <Link href={`/posts/${id}`}>{title}</Link>
        <br />
        <p>{formattedDate}</p>
      </li>
    </div>
  )
}
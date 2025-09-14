import Link from 'next/link';
import getFormattedDate from '../../lib/getFormattedDate';

export default function BlogList({ post }) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  
  return (
      <li className="blogItem">
        <div className="blogHeader">
          <Link href={`/posts/${id}`} className="blogTitle">
            {title}
          </Link>
        <span className="blogDate">{formattedDate}</span>
        </div>
      </li>
  )
}
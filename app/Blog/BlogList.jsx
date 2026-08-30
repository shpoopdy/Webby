import Link from 'next/link';
import getFormattedDate from '../../lib/getFormattedDate';
import styles from './BlogList.module.css';

export default function BlogList({ post }) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  
  return (
    <li className={styles.blogItem}>
      <Link href={`/posts/${id}`} className={styles.blogTitle}>
        {title}
      </Link>

      <span className={styles.blogDate}>
        {formattedDate}
      </span>
    </li>
  )
}
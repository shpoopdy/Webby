import { blog_data } from './blog_data';
import BlogPost from './BlogPost';
import styles from './BlogList.module.css';

export default function BlogList() {
  return (
      <div className={styles.grid_container}>
        {blog_data.map(blog => <BlogPost key={blog.id} {...blog}/>)}
      </div>
  )
}
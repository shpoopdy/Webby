import BlogPost from './BlogPost';
import styles from './BlogList.module.css';


export default function BlogList({ posts }) {
  if (!posts || posts.length === 0) {
    return <div>No Posts Availabe</div>
  }
  return (
    <div>
      {posts.map(post => <BlogPost key={post.id} {...post} />)}
    </div>
  )
}
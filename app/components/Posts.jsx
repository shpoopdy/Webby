import { getSortedPostsData } from '../../lib/posts';
import BlogList from '../Blog/BlogList';

export default function Posts() {
  const posts = getSortedPostsData();
  
  if (Object.keys(posts).length === 0) {
    return (
      <h2>No Posts Yet!</h2>
    )
  }

  return (
    <section className="blogCard">
        <ul>
          {posts.map(post => (
            <BlogList key={post.id} post={post} />
          ))}
        </ul>
    </section>
  )
}
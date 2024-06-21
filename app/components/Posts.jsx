import { getSortedPostsData } from '../../lib/posts';
import BlogList from '../Blog/BlogList';

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section>
      <h2>
        <ul>
          {posts.map(post => (
            <BlogList key={post.id} post={post} />
          ))}
        </ul>
      </h2>
    </section>
  )
}
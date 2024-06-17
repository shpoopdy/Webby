import { blog_data } from './blog_data';
import BlogPost from './BlogPost';

export default function BlogList() {
  return (
      <div >
          {blog_data.map(blog => <BlogPost key={blog.id} {...blog}/>)}
      </div>
  )
}
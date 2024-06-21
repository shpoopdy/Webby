import BlogList from "./BlogList"
import { blog_data }  from './blog_data';

export default function Blog() {
  return (
    <>
      <div className='mainContain'>
        <h1>The Blog Page</h1>
        <BlogList posts={blog_data}/>
      </div>
    </>
  )
}
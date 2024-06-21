import BlogList from "./BlogList"
import { blog_data }  from './blog_data';
import { getSortedPostsData } from '../../lib/posts';
import Posts from '../components/Posts';

export default function Blog({ allPostsData }) {
  return (
    <>
      <div className='mainContain'>
        <h1>The Blog Page</h1>
        <Posts />
      </div>
    </>
  )
}
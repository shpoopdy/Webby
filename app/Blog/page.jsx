import Posts from '../components/Posts';

export const metadata = {
  title: 'Blog',
  description: 'An attempt of me blogging!',
}

export default function Blog() {
  return (
    <div className='mainContain'>
      <h1>The Blog Page</h1>
      <Posts />
    </div>
  )
}
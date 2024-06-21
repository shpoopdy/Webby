import { blog_data } from './blog_data';
import { getStaticPaths, getStaticProps } from 'next';

function BlogPage({ post }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = blog_data.map(post => ({
    params: { id: post.id }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blog_data.find(post => post.id === params.id) || null;
  return { props: { post } };
}

export default BlogPage;
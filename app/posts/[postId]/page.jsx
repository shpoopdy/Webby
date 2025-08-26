import { getPostData, getSortedPostsData } from "../../../lib/posts"
import { notFound } from 'next/navigation';
import getFormattedDate from "../../../lib/getFormattedDate";
import Link from 'next/link';

export function generateMetadata({ params }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find(post => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
  }
}


export default async function Post({ params }) {
  const posts = getSortedPostsData();
  const { postId } = await params;

  if (!posts.find(post => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml, updatedAt } = await getPostData(postId);

  const pubDate = getFormattedDate(date);
  const lastEdited = getFormattedDate(updatedAt);
  const showEdited = updatedAt && new Date(updatedAt).getTime() !== new Date(date).getTime();

  return (
    <main className='mainContain blogPage'>
      <h1 className='blogName'>{title}</h1>
      <div className='blogMeta'>
        <time className='blogPosted'>Posted: {pubDate}</time>
        {showEdited && (
          <>
            <span className="meta-sep" aria-hidden="true"></span>
            <time className='blogLastEdit'>Last edited: {lastEdited}</time>
          </>
        )}
      </div>
      <article>
        <section dangerouslySetInnerHTML={{__html: contentHtml}}></section>
        <p>
          <Link href="/">Return Home</Link>
        </p>
      </article>
    </main>
  )
}
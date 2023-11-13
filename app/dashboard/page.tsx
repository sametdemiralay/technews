import { postData } from '@/data';
import Post from '@/components/Post';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <h1>My Posts</h1>

      {postData && postData.length > 0 ? (
        postData.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            authorEmail={'test@gmail.com'}
            date={post.datepublished}
            thumbnail={post.thumbnail}
            category={post.category}
            title={post.title}
            content={post.content}
            links={post.links || []}
          />
        ))
      ) : (
        <div className='py-6'>
          No posts created yet.
          <Link className='underline ms-2' href={'/create-post'}>
            Create New
          </Link>
        </div>
      )}
    </div>
  );
}

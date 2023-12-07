import CreatePostForm from '@/components/CreatePostForm';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';

export default async function CreatePost() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign-in');
  }

  return <CreatePostForm />;
}

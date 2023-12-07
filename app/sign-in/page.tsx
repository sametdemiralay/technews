import SignInBtns from '@/components/SignInBtns';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }

  return <SignInBtns />;
}

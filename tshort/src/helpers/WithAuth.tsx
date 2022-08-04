import router from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const WithAuth = ({ children, options }) => {
  const { data: session, status } = useSession();
  const isUser = Boolean(session?.user);

  useEffect(() => {
    // Do nothing while loading
    if (status === 'loading') {
      return;
    }

    // If not authenticated, redirect to provided url or
    if (!isUser) {
      if (options?.redirectTo) {
        router.push(options.redirectTo);
      } else {
        signIn();
      }
    }
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  /*
   * Session is being fetched, or no user.
   * If no user, useEffect() will redirect.
   */
  return <div>Loading...</div>;
};

export default WithAuth;

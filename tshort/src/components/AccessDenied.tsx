import { NextPage } from 'next';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

interface Props {}

const AccessDenied: NextPage<Props> = () => (
  <>
    <h1>Access Denied</h1>
    <p>
      <Link
        href="/api/auth/signin"
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        You must be signed in to view this page
      </Link>
    </p>
  </>
);

export default AccessDenied;

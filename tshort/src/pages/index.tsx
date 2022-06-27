import { Paper } from "@mui/material";
import { getSession, useSession } from "next-auth/react";

import AccessDenied from "../components/AccessDenied";


const Page = () => {

  const { status, data: session } = useSession({
    required: false,
  });

  console.log(session);
  // If no session exists, display access denied message
  if (!session) {
 return <Paper><AccessDenied /></Paper>;
}

  // If session exists, display content
  return (
    <Paper>
      <h1>Protected Page</h1>
      <p><strong>Welcome {session.user.name}</strong></p>
    </Paper>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Page;

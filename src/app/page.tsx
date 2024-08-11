import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/react";

import { FaRegSmile } from "react-icons/fa";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1 className="text-3xl"> Hello Rohan</h1>
      <h3 className="text-2xl font-semibold">User Session Data</h3>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              type="submit"
              color="secondary"
              variant="shadow"
              radius="full"
              startContent={<FaRegSmile size={20} />}
            >
              Sign Out
            </Button>
          </form>
        </div>
      ) : (
        "User sign out"
      )}
    </div>
  );
}

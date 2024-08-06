import { Button } from "@nextui-org/react";
import Link from "next/link";

import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl"> Hello Rohan</h1>
      <div>
        <Button
          as={Link}
          href="/members"
          color="secondary"
          variant="shadow"
          radius="full"
          startContent={<FaRegSmile size={20} />}
        >
          Click me
        </Button>
      </div>
    </div>
  );
}

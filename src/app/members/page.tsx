import Link from "next/link";
import React from "react";

export default function MembersPage() {
  return (
    <div>
      <h1 className="text-3xl">This is an members page </h1>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}

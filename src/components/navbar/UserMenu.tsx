"use client";
import { signOutUser } from "@/app/actions/authActions";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { Session } from "next-auth";
import Link from "next/link";
import React from "react";

type Props = {
  user: Session["user"];
};

export default function UserMenu({ user }: Props) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          color="secondary"
          className="transition-transform"
          name={user?.name || "user"}
          size="sm"
          src={user?.image || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User action menu">
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="h-10 text-center font-semibold flex flex-row"
            aria-label="username"
          >
            <p className="font-semibold text-base">Signed in as {user?.name}</p>
          </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} href="/members/edit" color="secondary">
          Edit Profile
        </DropdownItem>
        <DropdownItem as={Link} href="/messages" color="secondary">
          Messages
        </DropdownItem>
        <DropdownItem color="danger" onClick={async () => await signOutUser()}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

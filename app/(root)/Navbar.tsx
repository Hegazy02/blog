import React from "react";
import Link from "next/link";
import { signIn, signOut, auth } from "@/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 text-black">
      <Link href="/">
        <Image src={"/logo.png"} alt="logo" width={100} height={100}></Image>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/albums">Albums</Link>
        </li>{" "}
        {session ? (
          <li className="flex space-x-4">
            <Link href="/profile">{session.user?.name}</Link>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button type="submit" className="cursor-pointer">Signout</button>
            </form>
          </li>
        ) : (
          <li>
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit"  className="cursor-pointer">GitHub</button>
            </form>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

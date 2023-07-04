import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProvider from "./AuthProvider";
import Link from "next/link";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flexStart flex-1 gap-10">
        <Link href="/">
          <Image src="./logo.svg" width={115} height={43} alt="Flexibble" />
        </Link>
        <ul className="text-small hidden gap-7 xl:flex">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            User Photo
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <>
            <AuthProvider />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

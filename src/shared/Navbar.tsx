"use client"; // Client-side component for interactivity
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For active link styling
import Image from "next/image";
const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className=" sticky top-0 z-50 w-full h-16 bg-black text-white flex items-center px-8">
      <div className="flex items-center space-x-6">
        {/* Logo or Title */}
        <h1 className="text-xl font-bold">
          <Image
            src="/images/tm_logo.png"
            alt="Next.js logo"
            width={100}
            height={38}
            priority
          />
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "underline font-bold" : "hover:underline"
            }`}
          >
            Home
          </Link>
          <Link
            href="/calendar"
            className={`${
              pathname === "/calendar"
                ? "underline font-bold"
                : "hover:underline"
            }`}
          >
            Calendar
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" ? "underline font-bold" : "hover:underline"
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

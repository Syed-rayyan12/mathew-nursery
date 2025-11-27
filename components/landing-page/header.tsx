'use client'

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full h-20 bg-white dark:bg-black shadow-md sticky top-0 flex items-center justify-between px-24  z-50">
        
        {/* LOGO */}
        <img src="/images/logo.png" alt="" className="object-cover"  width={200} height={200}/>

        {/* CENTER LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/products" className="hover:text-primary transition">Find Nursery</Link>
          <Link href="/nursery-group" className="hover:text-primary transition">Groups</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
        </nav>

        {/* RIGHT BUTTON */}
        <button className="bg-primary hover:bg-transparent hover:text-primary border-2 transition-all duration-300 cursor-pointer border-primary text-white rounded-[6px] px-8 py-2">
           Contact Us
        </button>

        {/* MOBILE MENU ICON */}
        <Menu
          size={26}
          className="md:hidden cursor-pointer ml-4"
          onClick={() => setOpen(!open)}
        />
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black shadow-md px-6 py-4 flex flex-col gap-4 text-base font-medium">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/products" className="hover:text-primary transition">Products</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </div>
      )}
    </>
  );
}

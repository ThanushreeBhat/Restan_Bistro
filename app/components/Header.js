"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full">

      {/*  TOP CONTACT BAR  */}
      <div className="hidden md:block bg-amber-800 text-white">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-12">

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span>Phone: +47 3333 78901</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> <span>Email: food@restan.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> 
              <span>175 10th Street, Office 375 Berlin, DE 21562</span>
            </div>
          </div>

        </div>
      </div>

      {/*  MAIN NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 
          ${isScrolled ? "bg-gray-900 text-white shadow-md py-4" : "bg-black/60 text-white py-8"}`}
      >

        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
              alt="Restan Logo"
              className="h-11 w-auto"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <Link href="/menu" className="hover:text-amber-400">Pages</Link>
            <Link href="/menu" className="hover:text-amber-400">Menu</Link>
            <Link href="/Blog" className="hover:text-amber-400">Blog</Link>
            <Link href="/shop" className="hover:text-amber-400">Shop</Link>
          </div>

          {/* RIGHT SIDE + HAMBURGER */}
          <div className="flex items-center gap-4">

            {/* Reservation */}
            <div className="hidden sm:flex items-center gap-3">
              <img
                src="https://d3omj40jjfp5tk.cloudfront.net/media_gallery/merchant/5b4e57bc6ac8a1255eb03764/image/6224f843afa45e1f08d8db2a.png?1646590019"
                alt="reservation"
                className="h-10 w-10 object-cover rounded"
              />
              <div className="text-white hidden sm:block">Reservation</div>
            </div>

            {/* HAMBURGER (mobile) */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <div className="w-6 h-[2px] bg-white mb-1" />
              <div className="w-6 h-[2px] bg-white mb-1" />
              <div className="w-6 h-[2px] bg-white" />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-black/95 mt-4">
            <div className="px-4 pt-4 pb-6 space-y-2 text-white font-medium">

              <Link href="/" className="block py-2">Home</Link>
              <Link href="/menu" className="block py-2">Pages</Link>
              <Link href="/menu" className="block py-2">Menu</Link>
              <Link href="/Blog" className="block py-2">Blog</Link>
              <Link href="/About" className="block py-2">About Us</Link>

            </div>
          </div>
        )}

      </nav>

      <div className="h-24" /> 
    </header>
  );
}

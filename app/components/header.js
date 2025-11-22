// components/Header.jsx
"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    
    <header className="w-full">
      {/* Top contact bar - visible on md+ */}
      <div className="hidden md:block bg-amber-800 text-white">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-12">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span>Phone: +47 3333 78901</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> <span> Email: food@restan.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span>175 10th Street, Office 375 Berlin, DE 21562</span>
            </div>
          </div>
          {/* Main nav */}
      {/* Main nav */}
<nav className={`fixed top-0 left-0 w-full z-20 transition-all 
  ${isScrolled ? "bg-gray-600 text-black " : "top-7 bg-transparent text-Black"}`}>

        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Left: logo */}
          <div className="flex items-center">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
              alt="Restan Logo"
              className="h-11 w-auto"
            />
          </div>

          {/* Center: desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="" className="text-white font-medium hover:text-amber-400">Home</Link>
            <Link href="/menu"className="text-white font-medium hover:text-amber-400">Pages</Link>
            <Link href="/menu" className="text-white font-medium hover:text-amber-400">Menu</Link>
            <Link href="/Blog" className="text-white font-medium hover:text-amber-400">Blog</Link>
            <Link href="/page.js" className="text-white font-medium hover:text-amber-400">Shop</Link>
          </div>

          {/* Right: reservation + hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <img
                src="https://d3omj40jjfp5tk.cloudfront.net/media_gallery/merchant/5b4e57bc6ac8a1255eb03764/image/6224f843afa45e1f08d8db2a.png?1646590019"
                alt="reservation"
                className="h-10 w-10 object-cover rounded"
              />
              <div className="text-white hidden sm:block">Reservation</div>
            </div>

            {/* Hamburger for mobile */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="w-6 h-2px bg-white mb-1" />
              <div className="w-6 h-2px bg-white mb-1" />
              <div className="w-6 h-2px bg-white" />
            </button>
          </div>
        </div>

        
        {open && (
          <div className="md:hidden bg-black/95">
            <div className="px-4 pt-4 -mt-15 pb-6 space-y-2">
              <button className="w-full text-left py-2 px-2 text-white font-medium">Home</button>
              <button className="w-full text-left py-2 px-2 text-white font-medium">Pages</button>
              <button className="w-full text-left py-2 px-2 text-white font-medium">Menu</button>
              <button className="w-full text-left py-2 px-2 text-white font-medium">Blog</button>
              <button className="w-full text-left py-2 px-2 text-white font-medium">Shop</button>
            </div>
          </div>
        )}
      </nav>

      
      <div className="h-20" />
      </div>
      </div>
    </header>
  );
}

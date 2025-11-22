"use client";
import React, { useState } from "react";
import { ShoppingCart } from 'lucide-react';

export default function SpecialsMenu() {
  const categories = ["MAIN DISHES", "DESSERTS", "SEAFOOD", "BEVERAGE"];
  const [activeCategory, setActiveCategory] = useState("MAIN DISHES");

  const menuItems = [
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=828&q=75",
      price: "$34",
      title: "Braised Chicken Legs",
      desc: "4 chicken legs  •Chili sauce", 
      des:"•Soft Drinks",
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=828&q=75",
      price: "$18",
      title: "Bone Steak",
      desc: "4 chicken legs •Chili sauce",
      des:"•Soft Drinks"
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=828&q=75",
      price: "$12",
      title: "Fish Tacos with Chipotle Crema",
      desc: "4 chicken legs •Chili sauce",
      des:"•Soft Drinks"
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=828&q=75",
      price: "$20",
      title: "Baked Lasagna & Parmesan",
      desc: "4 chicken legs •Chili sauce",
      des:"•Soft Drinks"
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=828&q=75",
      price: "$24",
      title: "Seared Scallops with Butter",
      desc: "4 chicken legs •Chili sauce",
      des:"•Soft Drinks"
    },
    {
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=828&q=75",
      price: "$16",
      title: "Double-Stack Mushroom",
      desc: "4 chicken legs •Chili sauce",
      des:"•Soft Drinks"
    },
  ];

  return (
    <section className="py-16 -mt-14 bg-white dark:bg-black text-center">
      <p className="text-sm tracking-widest text-[#7c613a] font-semibold">
        ---- FOOD MENU ----
      </p>

      <h2 className="text-4xl font-bold mt-2 mb-10">Our Specials Menu</h2>

      {/* Category */}
      <div className="hidden md:block flex border border-[#80663c]  px-6 py-3 justify-center gap-4 mb-10 w-fit mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-md border text-sm font-semibold transition 
              ${
                activeCategory === cat
                  ? "bg-[#80663c] text-white border-[#80663c]"
                  : "bg-white border-gray-400 hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray rounded-xl  overflow-hidden bg-white"
          >
            <img
              src={item.img}
              className="w-full h-48 object-cover"
              alt={item.title}
            />

            <div className="p-4 text-left">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#80663c] font-bold text-lg">{item.price}</p>
               </div>

              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-[16px] mt-1 mb-4 ">{item.desc}</p>
              <p className="text-gray-600 text-[16px] mt-1 mb-4 ">{item.des}</p>

              <button className="w-full border border-[#80663c] rounded-3xl text-[#80663c] px-2 py-2 text-xl hover:bg-[#80663c] hover:text-white transition flex items-center justify-center gap-2">
                <ShoppingCart size={22} strokeWidth={1} />
                  Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

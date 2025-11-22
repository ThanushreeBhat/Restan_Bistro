"use client";
import React  from "react";
export default function Blog() {
  return (
<div className="w-full flex flex-col items-center mt-20">
  <div className="text-center mb-12">
    <p className="text-sm tracking-widest text-gray-500">NEWS & BLOG</p>
    <h2 className="text-3xl font-bold">Our Latest News & Blog</h2>
  </div>

  {/*  Container */}
  <div className="flex flex-row justify-center gap-10">

    {/* Card 1 */}
    <div className="flex flex-col gap-10">
    <div className="bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden w-[420px]">
      <div className="relative h-64">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
          className="w-full h-full object-cover"
        />

        {/* Date  */}
        <div className="absolute bottom-0 right-0 bg-[#826a45] text-white px-4 py-2 text-center">
          <div className="text-xl font-bold leading-none">24</div>
          <div className="text-xs uppercase">DEC</div>
        </div>
      </div>
      </div>
      <div className="relative bg-white dark:bg-black ml-4 -mt-18 w-[340px] shadow-lg ">
        <p className="text-gray-500 dark:text-gray-200 text-sm mb-2 ml-4 mt-4">BY MD SOHAG • BURGER, FOOD</p>
        <h3 className="text-lg font-semibold mb-3 ml-4 mt-2">
          Picked up a Brussels burger Sprouts with ham
        </h3>

        <p className="text-[#826a45] font-semibold ml-4 mt-2 mb-4 cursor-pointer">
          READ MORE →
        </p>
      </div>
        </div>

    <div className="flex flex-col gap-10">
    {/* Card 2 */}
    <div className="bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden w-[420px]">
      <div className="relative h-64">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
          className="w-full h-full object-cover"
        />

        {/* Date  */}
        <div className="absolute bottom-0 right-0 bg-[#826a45] text-white px-4 py-2 text-center">
          <div className="text-xl font-bold leading-none">18</div>
          <div className="text-xs uppercase">NOV</div>
        </div>
      
      </div>
      </div>

      <div className="relative bg-white dark:bg-black ml-4 -mt-18 w-[340px] shadow-lg ">
        <p className="text-gray-500 text-sm mb-2 ml-4 mt-4">BY MD SOHAG • BURGER, FOOD</p>
        <h3 className="text-lg font-semibold mb-3 ml-4 mt-2">
          This prefabricated passive house is highly sustainable
       </h3>

        <p className="text-[#826a45] font-semibold ml-4 mt-2 mb-4 cursor-pointer">
          READ MORE →
        </p>
      </div>
        </div>
    </div>

  </div>
    );
}
  
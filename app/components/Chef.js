"use client"
import React from "react";

export default function Chef() {    
    const chefs = [
    {
      name: "Alexander Petllo",
      role: "ASSISTANT CHEF",
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75",
    },
    {
      name: "Mendia Juxef",
      role: "BURGER KING",
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=1920&q=75",
    },
    {
      name: "Petro William",
      role: "MAIN CHEF",
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=1920&q=75",
    },
  ];
  return (  
    <div className="w-full bg-[#EBE9E6] -mt-24 relative dark:bg-[#262525] flex flex-col items-center px-5 py-20">
         <p className="text-xl text-[#826A45] font-bold font-serif">MASTER CHEFS</p>
         <h1 className="text-3xl md:text-5xl font-serif font-bold mt-3 text-center">
        Meet Our Special Chefs
      </h1>

      {/* Chef Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-20 mt-14">
        {chefs.map((chef, i) => (
          <ChefCard key={i} {...chef} />
        ))}
      </div>

      {/* Clip Path polygon */}
      <style>{`
        .ribbon {
          clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
        }
      `}</style>
    </div>
  );
}

function ChefCard({ name, role, img }) {
  return (
    <div className="flex flex-col items-center">
      {/*  Border for circle*/}
      <div className="relative p-3 rounded-full border-[1px] border-[#826A45]">
        <img src={img} className="w-60 h-60 rounded-full object-cover" alt={name} />
      </div>

      {/* Ribbon Name  */}
      <div className="bg-[#826A45] w-64 py-3 text-white text-center mt-[-35px] ribbon">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
}
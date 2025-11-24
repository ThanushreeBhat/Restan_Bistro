"use client";
import React from "react";

export default function BlogSection() {
  const blogs = [
    {
      date: "12 August, 2024",
      author: "John Baus",
      authorImg:
        "https://th.bing.com/th/id/OIP.3tFDXgeH6msOuZgixMMumQAAAA?o=7",
      img:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75",
      title: "Picked up a Brussels burger Sprouts.",
      desc:
        "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
    },
    {
      date: "13 August, 2024",
      author: "Admin",
      authorImg:
        "https://th.bing.com/th/id/OIP.3tFDXgeH6msOuZgixMMumQAAAA?o=7",
      img:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75",
      title: "This prefabricated passive house highly",
      desc:
        "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
    },
    {
      date: "14 August, 2024",
      author: "John Baus",
      authorImg:
        "https://th.bing.com/th/id/OIP.3tFDXgeH6msOuZgixMMumQAAAA?o=7",
      img:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75",
      title: "Overcame breeding point concerns has.",
      desc:
        "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
    },
  ];

  return (
    <div className="w-full bg-white px-5 py-20 flex flex-col items-center">

      
      
      <div className="flex flex-col gap-20 mt-14">
        {blogs.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({ img, date, author, authorImg, title, desc }) {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl bg-white rounded-lg shadow-lg shadow-gray-300 overflow-hidden">

        
        <img
          src={img}
          alt={title}
          className="w-full h-[600px] object-cover"
        />

        <div className="p-8">

          
          <div className="flex items-center text-gray-500 text-sm mb-4 space-x-6">
            <div className="flex items-center space-x-2">
              <img
                className="h-[50px] w-[50px]"
                src="https://pcuct.org/assets/ql-skip-rev.png"
              />
              {date}
            </div>

            <div className="flex items-center space-x-2">
              <img className="h-[50px] w-[50px]" src={authorImg} />
              <div>{author}</div>
            </div>
          </div>

          
          <div className="text-4xl font-bold text-gray-800 mb-3">
            {title}
          </div>

          
          <div className="text-gray-600 leading-relaxed text-[18px] mb-6">
            {desc}
          </div>

          
          <div className="bg-amber-700 text-white px-6 py-3 w-[150px] text-center rounded-full font-semibold hover:bg-amber-800 transition-all cursor-pointer">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
}
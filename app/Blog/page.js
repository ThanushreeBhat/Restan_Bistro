"use client";

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import BlogSection from "../components/BlogSection";
import Link from "next/link";
export default function Landingpage() {
  return (
    <div>

      <div className="md:min-h-screen  md:w-full items-center  flex flex-col">

        <div className="bg-amber-800 h-[60px] w-full flex flex-row  py-5 ">
          <div className="flex flex-row ">
            <img className="hidden md:block h-[30px] w-[30px] ml-[70px] "
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" />
            <div className="hidden md:block  ml-[15px] text-[18px]  text-white ">
              Phone:+4733378901
            </div>
            <img className="hidden md:block h-[30px] w-[30px] ml-[50px] "
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75" />
            <div className=" hidden md:block  ml-[15px] text-[18px]  text-white ">
              Email:food@restan.com
            </div>
            <img className="hidden md:block h-[30px] w-[30px] ml-[500px] "
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fflag.png&w=128&q=75" />
            <div className="hidden md:block  ml-[15px] text-[18px]  text-white ">
              English
            </div>

            <div className="hidden md:block  ml-[150px] font-extrabold text-[18px]  text-white ">
              F 
            </div>
            <div className="hidden md:block  ml-40px font-extrabold text-[18px]  text-white ">
              T
            </div>
            <div className="hidden md:block  ml-[40px] font-extrabold text-[18px]  text-white ">
              Y      
            </div>
            <div className="hidden md:block  ml-[40px] font-extrabold text-[18px]  text-white ">
              L
            </div>

            
            


          </div>
        </div>
        <div className=" bg-black h-[130px] w-full flex flex-row  py-5  shadow-white shadow border ">
          <img className="h-[75px] w-[150px] ml-[100px] "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" />

          <div className="items-center flex flex-row ml-[300px]">
            <div className="hidden md:block underline underline-offset-4 mr-[50px] mt-2 text-[18px]  text-white font-bold">
               <Link href="/page.js" className="hidden md:block hover:text-yellow-400 cursor-pointer">Home</Link>
            </div>
            <div className="hidden md:block  underline underline-offset-4 mr-[50px] mt-2.5 text-[18px] text-white font-bold">
              <Link href="/menu" className="hidden md:block hover:text-yellow-400 cursor-pointer">Pages</Link>
            </div>
            <div className="hidden md:block  underline underline-offset-4 mr-[50px] mt-2.5 text-[18px] text-white font-bold">
             <Link href="/menu" className="hidden md:block hover:text-yellow-400 cursor-pointer">Menu</Link>
            </div>
            <div className="hidden md:block  underline underline-offset-4 mr-[50px] mt-2.5 text-[18px] text-white font-bold">
              <Link href="/blog" className= "hidden md:block hover:text-yellow-400 cursor-pointer">Blog</Link>
            </div>
            <div className="hidden md:block  underline underline-offset-4 mr-[50px] mt-2.5 text-[18px] text-white font-bold">
              <Link href="/AboutUs" className="hover:text-yellow-400 hidden md:block cursor-pointer">Shop</Link>
            </div>
             <img className="hidden md:block h-[60px] w-[60px] ml-[150px] "
              src="https://d3omj40jjfp5tk.cloudfront.net/media_gallery/merchant/5b4e57bc6ac8a1255eb03764/image/6224f843afa45e1f08d8db2a.png?1646590019" />
              <div className="hover:bg-white hover:text-black text-[20px] hidden md:block  border-white border-2 bg-cyanw-[150px] h-[50px] w-[150px]  py-2 text-center text-white  ml-3">
              Reservation
            </div>


          </div>
        </div>
        <div className="relative bg-cover  bg-center h-[650px] items-center mt-0.5 w-full flex flex-col bg-[url('https://img.freepik.com/premium-photo/sushi-nigiri-set-with-black-background-generative-ai_28914-23888.jpg')]">
          <div className="text-white text-6xl font-bold mt-[50px]">
           Blog Standard 
          </div>
          <div className="flex flex-row">
          <img className="h-[35px] w-[40px] mt-7"
              src="https://www.qsl.net/7/75misbn/home.jpg" />
          <div className="text-white text-2xl ml-1 mt-8">
            Home -  blog-standard
          </div>
          </div>
        </div>
      </div>

      <BlogSection />


<Footer />


    </div>

  );
}
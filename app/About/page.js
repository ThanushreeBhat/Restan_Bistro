"use client";

import React, { useEffect, useState } from "react";
import Chef from "../components/Chef";
import Openhrs from "../components/Openhrs";
import Footer from "../components/Footer";
import Link from "next/link";
export default function Landingpage() {
  return (
    <div>
          <div className="md:min-h-screen  w-full items-center  flex flex-col">

        <div className="bg-amber-800 h-[60px] w-full flex flex-row  py-5 ">
          <div className="flex flex-row ">
            <img className="hidden md:block h-[30px] w-[30px] ml-[70px] "
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" />
            <div className=" hidden md:block ml-[15px] text-[18px]  text-white ">
              Phone:+4733378901
            </div>
            <img className="hidden md:block h-[30px] w-[30px]   ml-[50px] "
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75" />
            <div className=" hidden md:block ml-[15px] text-[18px]  text-white ">
              Email:food@restan.com
            </div>
            <img className="hidden md:block h-[30px] w-[30px] ml-[500px] "
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fflag.png&w=128&q=75" />
            <div className=" hidden md:block ml-[15px] text-[18px]  text-white ">
              English
            </div>

            <div className=" hidden md:block ml-[150px] font-extrabold text-[18px]  text-white ">
              F 
            </div>
            <div className=" hidden md:block ml-[40px] font-extrabold text-[18px]  text-white ">
              T
            </div>
            <div className="hidden md:block  ml-[40px] font-extrabold text-[18px]  text-white ">
              Y      
            </div>
            <div className=" hidden md:block ml-[40px] font-extrabold text-[18px]  text-white ">
              L
            </div>
            


          </div>
        </div>
        <div className=" bg-black h-[130px] w-full flex flex-row  py-5  shadow-white shadow border ">
          <img className="h-[75px] w-[150px] ml-[100px]  "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" />

          <div className="items-center flex flex-row ml-[300px]">
            <div className="hidden md:block underline underline-offset-4 mr-[50px] mt-2 text-[18px]  text-white font-bold">
              <Link href="/" className="hidden md:block hover:text-yellow-400 cursor-pointer">Home</Link>
            </div>
            <div className="hidden md:block  underline underline-offset-4 mr-[50px] mt-2.5 text-[18px] text-white font-bold">
              <Link href="/menu" className="hidden md:block hover:text-yellow-400 cursor-pointer">Pages</Link>
            </div>
            <div className="hidden md:block  underline underline-offset-4 mr-[50px] mt-2.5 text-[18px] text-white font-bold">
              <Link href="/menu" className="hidden md:block hover:text-yellow-400 cursor-pointer">Menu</Link>
            </div>
            <div className="hidden md:block  underline underline-offset-4 mr-[50px] mt-2.5 text-[18px] text-white font-bold">
              <Link href="./Blog" className= "hidden md:block hover:text-yellow-400 cursor-pointer">Blog</Link>
            </div>
            
            <div className="hidden md:block  underline underline-offset-4 mr-[50px] mt-2.5 text-[18px] text-white font-bold">
              <Link href="./About" className="hover:text-yellow-400 hidden md:block cursor-pointer">AboutUs</Link>
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
            About us
            </div>
            <div className="flex flex-row">
          <img className="h-[35px] w-[40px] mt-5"
              src="https://www.qsl.net/7/75misbn/home.jpg" />
          <div className="text-white text-[20px] mr-5 mt-6">
            Home -  about us
          </div>
          </div>
        </div>
      </div>

      

     <div className="bg-gray-200 w-full py-16 flex flex-col items-center">
  
  
  <div className="text-yellow-900 text-[22px] md:text-[25px] font-bold text-center">
    OUR TRUSTED 8K HAPPY PARTNER
  </div>

  
  <div className="mt-10 flex flex-wrap justify-center gap-10 md:gap-16 px-5">
    
    <img className="h-[100px] w-[150px] object-contain"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"/>

    <img className="h-[100px] w-[150px] object-contain"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"/>

    <img className="h-[100px] w-[150px] object-contain"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"/>

    <img className="h-[100px] w-[150px] object-contain"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"/>

    <img className="h-[100px] w-[150px] object-contain"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"/>

  </div>

</div>
      
        <div className=" relative md:flex flex-row w-full md:h-[800px] bg-white  mt-20 space-x-10  shadow-2xl shadow-gray-300 p-8">
            <img className="h-[550px] w-[410px] " src="https://therestaurantzone.com/wp-content/uploads/2024/08/our-specialities%E2%80%8B.jpeg.webp"></img>
            <img className="hidden md:block h-[550px]  w-[410px]" src="https://www.empalifeusa.com/assets/images/about/about-four2.jpg"></img>
            <div className=" flex flex-col md:h-[500px] md:w-[700px] md:absolute right-25 top-40 bg-white shadow-xl p-10">
            <div className="text-[25px] text-yellow-800">ABOUT US</div>
            <div className="dark:text-black  text-[50px] text font-serif">We Invite You <br/>To Visit Our Restaurant</div>
            <div className="mt-3 md:text-[18px]  w-[600px]  text-gray-500">A relaxing and pleasant atmosphere,<br/> good jazz, dinner, and cocktails. The<br/>Patio Time Bar opens in the center of<br/>Florence. The only bar inspired by the <br/>1960s, it will give you a experience <br/>that you’ll have a hard time forgetting.
            <div className=" bg-yellow-800 mt-4 h-[60px] w-[200px] text-center text-[20px] font-bold text-white mx-[20px] py-3">Discover More</div>
</div>
         </div>
         </div>

      
          <Chef />

            <Openhrs />

            <Footer />


    </div>

  );
}
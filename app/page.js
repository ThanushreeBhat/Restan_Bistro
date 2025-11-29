"use client"
import React from "react";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Menucard from "./components/Menucard";
import Blog from "./components/Blog";
import Chef from "./components/Chef";
import Openhrs from "./components/Openhrs";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [open, setOpen] = useState(false);
  const heroImg =
    "https://restan-nextjs.vercel.app/assets/img/banner/14.jpg";
  const pop1="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F28.jpg&w=828&q=75"
  const pop2="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=828&q=75"
  const pop3="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=828&q=75"  
  return (
    <div>
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col dark:bg-[#0f0e0e]"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Blackish Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Top Contact Bar */}
      <div className="hidden md:block relative z-10 bg-transparent text-sm py-2 px-6 md:flex justify-between ml-10 mr-10 items-center">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} /> Phone: +47 3333 78901
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} /> Email: food@restan.com
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} /> 175 10th Street, Office 375 Berlin, DE 21562
        </div>
      </div>

      <div className="relative z-10 h-px w-auto bg-white/30 dark:bg-[#0f0e0e] mx-6"></div>

      {/* Navbar */}
      <nav
         className={`fixed top-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6 text-white font-semibold transition-all duration-300 ${
    isScrolled ? "bg-gray-800 dark:bg-[#0f0e0e] py-2 shadow-md" : "bg-transparent py-10"
  }`}
      >
       

        {/* Left Menu */}
        <div className="flex items-center gap-10 text-lg ml-0 md:ml-30 lg:ml-16 xl:ml-20">
          <Link href="/" className="hidden md:block hover:text-yellow-400 cursor-pointer">Home</Link>
          <Link href="/menu" className="hidden md:block hover:text-yellow-400 cursor-pointer">Pages</Link>
          <Link href="/menu" className="hidden md:block hover:text-yellow-400 cursor-pointer">Menu</Link>
        </div>

        {/* Center Logo */}
        <div className=" hidden md:block md:flex md:justify-center md:items-center  ">
          <img
            className=" h-11 w-auto"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
            alt="Restan Logo"
          />
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-10 text-lg mr-0 md:mr-30 lg:mr-16 xl:mr-20">
          <Link href="/Blog" className= "hidden md:block hover:text-yellow-400 cursor-pointer">Blog</Link>
          <Link href="/About" className="hover:text-yellow-400 hidden md:block cursor-pointer">Shop</Link>
          <Link href="/About" className="hover:text-yellow-400 hidden md:block cursor-pointer">About Us</Link>
        </div>
        <button
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="w-6 h-2 bg-white mb-1" />
              <div className="w-6 h-2 bg-white mb-1" />
              <div className="w-6 h-2 bg-white mb-1" />
            </button>
         {open && (
          <div className="md:hidden bg-black/95">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link href="/" className="w-full text-left py-2 px-2 text-white font-medium">Home</Link>
              <Link href="/menu" className="w-full text-left py-2 px-2 text-white font-medium">Pages</Link>
              <Link href="/menu" className="w-full text-left py-2 px-2 text-white font-medium">Menu</Link>
              <Link href="/Blog" className="w-full text-left py-2 px-2 text-white font-medium">Blog</Link>
              <Link href="/About" className="w-full text-left py-2 px-2 text-white font-medium">AboutUS</Link>
            </div>
          </div>
        )}   
      </nav>      
      
        {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-32 space-y-6">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Best Restaurant</h1>
        <div className="border-4 border-white rounded-full p-8 mt-6 text-white font-bold tracking-widest text-lg text-center">
          BEST FOOD SINCE 1989
        </div>
   </div>
    </div>
     
    <div className="flex flex-col lg:flex-row justify-center items-start px-10 py-20 bg-white dark:bg-[#0f0e0e] gap-10">
      
      {/* Left - Book a Table */}
      <div className="relative z-10 -mt-15 md:-mt-32 bg-white dark:bg-[#0f0e0e] shadow-lg ml-0 md:ml-15 lg:ml-8 rounded-2xl p-6 w-full lg:w-1/4" >
        <h2 className="text-2xl font-bold mb-6 text-center">Book a Table</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-md p-3"
          />
          <select className="w-full border border-gray-300 rounded-md p-3">
            <option>1 Person</option>
            <option>2 Persons</option>
            <option>3 Persons</option>
            <option>4 Persons</option>
          </select>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-3"
          />
          <select className="w-full border border-gray-300 rounded-md p-3">
            <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
          </select>
          <button className="w-3/5 bg-[#826a45] text-white py-3 rounded-md hover:bg-black-600">
            Book A Table
          </button>
        </form>
      </div>
      {/* Right - Popular Category */} <div className="flex-1 ml-16 mr-16">
        <div className="flex flex-row justify-between gap-4">
        <h2 className="text-3xl font-bold mb-6"> 🔥 Our Popular Category</h2>
        <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#80663c] text-white shadow-md hover:bg-[#6d5532]">
          <span className="text-l">‹</span>
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#80663c] text-white shadow-md hover:bg-[#6d5532]">
        <span className="text-l">›</span>
        </button>
        </div>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
          <div className="relative rounded-xl overflow-hidden shadow-md bg-cover bg-center h-60 w-54
           sm:w-56 md:w-50 lg:w-54 px-4"
            style={{ backgroundImage: `url(${pop1})` }}>
          <div className="absolute inset-0  bg-gradient-to-t from-black/70 via-black/20 to-transparent ">
                <div className="absolute bottom-4 left-4 text-left  text-amber-500"><p className="text-[15px]">Beverage</p>
            <h3 className="font-bold text-white">Hot Chocolate</h3>
          </div></div>
          </div>
            <div className="relative rounded-xl overflow-hidden shadow-md bg-cover bg-center h-60 w-54 px-4"
            style={{ backgroundImage: `url(${pop2})` }}>
              <div className="absolute inset-0  bg-gradient-to-t from-black/70 via-black/20 to-transparent ">
                <div className="absolute bottom-4 left-4 text-left  text-amber-500"><p className="text-[15px]">Main Dish</p> 
                <h3 className="font-bold text-white">Chicken Alfredo</h3> 
              </div> </div>
              </div> 
              <div className="relative rounded-xl overflow-hidden shadow-md bg-cover bg-center h-60 w-54 px-4"
                  style={{ backgroundImage: `url(${pop3})` }}>
                    <div className="absolute inset-0  bg-gradient-to-t from-black/70 via-black/20 to-transparent ">
                <div className="absolute bottom-4 left-4 text-left  text-amber-500"><p className="text-[15px]">Dessert</p> 
                <h3 className="font-bold text-white">Cheesecake</h3> 
                </div> 
              </div> </div>
            </div>
          </div> 
        </div>  
         <section className="py-16  bg-white dark:bg-[#0f0e0e]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row text-center md:text-left px-4">
          {/* Card 1 */}
        <div className="flex-1  border md:border-t md:border-x-0 md:border-b-0 border-[#826a45] p-8">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=256&q=75" alt="qualityfoodicon" className="mb-4 px-2 w-auto h-24 md:h-25 mx-auto md:mx-0"/>
          <h3 className="text-xl font-semibold text-left px-2 mb-2">Quality Foods</h3>
          <p className="text-gray-600 dark:text-gray-300 text-left px-2">
            Belonging sir curiosity discovery extremity yet forfeited prevailed own off.
            Traveling by introduced of mr terminated.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 border md:border:s md:border-t-0 md:border-e md:border-b md:border-l border-[#826a45] md:rounded-es-3xl md:rounded-ee-3xl p-8">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=256&q=75" alt="deliveryicon" className="mb-4 px-2 w-auto h-24 md:h-25 mx-auto md:mx-0"/>
          <h3 className="text-xl font-semibold mb-2 text-left px-2">Fast Delivery</h3>
          <p className="text-gray-600 dark:text-gray-300 text-left px-2">
            Belonging sir curiosity discovery extremity yet forfeited prevailed own off.
            Traveling by introduced of mr terminated.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 border border-[#826a45] md:border-t md:border-x-0 md:border-b-0 p-6 md:p-8">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=256&q=75" alt="deliciousrecipeicon"  className="mb-4 px-2 w-auto h-24 md:h-25 mx-auto md:mx-0"/>
          <h3 className="text-xl font-semibold text-left px-2 mb-2">Delicious Recipes</h3>
          <p className="text-gray-600 dark:text-gray-300 text-left px-2">
            Belonging sir curiosity discovery extremity yet forfeited prevailed own off.
            Traveling by introduced of mr terminated.
          </p>
        </div>
        </div>
        </section>
        <section className="bg-[#f6d585] m-4 md:m-30 lg:m-16 p-8 rounded-3xl  md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Images */}
      <div className="relative flex flex-row items-center justify-center gap-4 md:gap-8">
      <div className="relative flex flex-col items-center justify-center gap-4">
        {/* Top image */}
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=640&q=75"
          alt="timg" className="w-32 h-32 md:h-35 object-cover rounded-full shadow-sm"
        />
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=640&q=75"
          alt="dimg" className="w-32 h-32 object-cover rounded-full shadow-lg"
        />
      </div>
        {/* Middle main image */}
        <div className="relative">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=640&q=75"
            alt="midimg"className="w-44 h-44 object-cover rounded-full shadow-lg"
          />
       </div>   
    </div>
      {/* Right Text Content */}
      <div className="max-w-lg text-center  md:text-left">
        <p className="text-sm font-semibold tracking-widest text-[#826a45]">
          TODAY SPECIAL OFFER
        </p>
        <h2 className="text-4xl font-bold text-black dark:text-white leading-tight mt-2">
          Explore Irresistible <br /> Promotions!
        </h2>
        <p className="text-gray-700 dark:text-gray-100 mt-4 leading-relaxed">
          Contrasted dissimilar get joy you instrument out reasonably. Again
          keeps at no meant stuff. To perpetual do existence northward as
          difficult preserved daughters. Continued at up to zealously necessary.
        </p>
        <button className="mt-6 bg-[#826a45] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1A1A1A] transition">
          Order Today
        </button>
      </div>
    </section>
    <section className="mt-2">
     <Menucard />
    </section>
    <section className="bg-black m-10 md:m-30 p-8 rounded-3xl w-fit md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex flex-row">
        <div className="hidden md:block relative">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=1080&q=75" alt="onlineorder" />
        </div>
        <div className="relative flex flex-col  text-white py-20 px-6 text-center md:text-left">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Are you Ready to Start your online Order?
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 mt-6 text-[13px] md:text-base leading-relaxed">
          Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
        </p>
         <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
          {/* App Store Button */}
          <button className="flex items-center gap-3 bg-white dark:bg-[#0f0e0e] text-black dark:text-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            <div className="w-5 h-5" />
            App Store
          </button>

          {/* Play Store Button */}
          <button className="flex items-center gap-3 bg-[#826a45] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6f5839] transition">
            <div className="w-5 h-5 fill-white" />
            Play Store
          </button>
        </div>
        </div>
      </div>
      </div>
    </section>
    <section><Openhrs /></section>
    <section>
      <Chef />
      </section>
    <section className="hidden md:block">
    <Blog/>
  </section>
  <section>
    <Footer />
  </section>
    </div>
      
    
    
  );
}

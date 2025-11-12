"use client"
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroImg =
    "https://restan-nextjs.vercel.app/assets/img/banner/14.jpg";
    const pop1 = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg";
  const pop2 = "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg";
  const pop3 = "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg";

  return (
    <div>
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Blackish Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Top Contact Bar */}
      <div className="relative z-10 bg-transparent text-sm py-2 px-6 flex justify-between ml-10 mr-10 items-center">
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

      <div className="relative z-10 h-px w-auto bg-white/30 mx-6"></div>

      {/* Navbar */}
      <nav
         className={`fixed top-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6 text-white font-semibold transition-all duration-300 ${
    isScrolled ? "bg-gray-800 py-2 shadow-md" : "bg-transparent py-10"
  }`}
      >
        {/* Left Menu */}
        <div className="flex items-center gap-10 text-lg ml-30">
          <button className="hover:text-yellow-400 cursor-pointer">Home</button>
          <button className="hover:text-yellow-400 cursor-pointer">Pages</button>
          <button className="hover:text-yellow-400 cursor-pointer">Menu</button>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center items-center">
          <img
            className="h-11 w-auto"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
            alt="Restan Logo"
          />
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-10 text-lg mr-30">
          <button className="hover:text-yellow-400 cursor-pointer">Blog</button>
          <button className="hover:text-yellow-400 cursor-pointer">Shop</button>
          <button className="hover:text-yellow-400 cursor-pointer">Contact Us</button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-32 space-y-6">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Best Restaurant</h1>
        <div className="border-4 border-white rounded-full p-8 mt-6 text-white font-bold tracking-widest text-lg">
          BEST FOOD SINCE 1989
        </div>
      </div>
    </div>
     
    <div className="flex flex-col lg:flex-row justify-center items-start px-10 py-20 bg-white gap-10">
      
      {/* Left - Book a Table */}
      <div className="relative z-20 -mt-32 bg-white shadow-lg ml-15 rounded-2xl p-6 w-full lg:w-1/4">
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
      {/* Right - Popular Category */} <div className="flex-1 ml-15 mr-15"> 
        <h2 className="text-3xl font-bold mb-6"> 🔥 Our Popular Category
           </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
              <div className="rounded-xl overflow-hidden shadow-md"> 
                <img src="https://restan-nextjs.vercel.app/assets/img/food/chicken.jpg" alt="Chicken Alfredo" className="w-full h-48 object-cover" />
                 <div className="p-3 bg-gray-800 text-white">
                   <p className="text-sm">Main Dish</p> 
                   <h3 className="font-semibold">Chicken Alfredo</h3> 
                   </div> 
                   </div> 
                   <div className="rounded-xl overflow-hidden shadow-md">
                     <img src="https://restan-nextjs.vercel.app/assets/img/food/cheesecake.jpg" alt="Cheesecake" className="w-full h-48 object-cover" /> 
                     <div className="p-3 bg-gray-800 text-white"> 
                      <p className="text-sm">Dessert</p>
                      <h3 className="font-semibold">Cheesecake
                        </h3> 
                      </div>
                       </div> 
                      <div className="rounded-xl overflow-hidden shadow-md"> 
                        <img src="https://restan-nextjs.vercel.app/assets/img/food/salmon.jpg" alt="Salmon Fry" className="w-full h-48 object-cover" />
                         <div className="p-3 bg-gray-800 text-white"> 
                          <p className="text-sm">Sea Food</p> 
                          <h3 className="font-semibold">Salmon Fry</h3>
                           </div> 
                           
                           </div> 
                           </div> 
                           </div>
                            </div> 
                      
                    
                    
            
    
     < section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex text-center">
          {/* Card 1 */}
        <div className="flex-1 border-t border-[#826a45]  p-8">
          <div className="text-5xl mb-4">🍕</div>
          <h3 className="text-xl font-semibold mb-2">Quality Foods</h3>
          <p className="text-gray-600">
            Belonging sir curiosity discovery extremity yet forfeited prevailed own off.
            Traveling by introduced of mr terminated.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 border-s border-e border-b border-l border-[#826a45] rounded-es-3xl rounded-ee-3xl p-8">
          <div className="text-5xl mb-4">🚚</div>
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Belonging sir curiosity discovery extremity yet forfeited prevailed own off.
            Traveling by introduced of mr terminated.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 border-t  border-[#826a45]  p-8">
          <div className="text-5xl mb-4">🍕</div>
          <h3 className="text-xl font-semibold mb-2">Delicious Recipes</h3>
          <p className="text-gray-600">
            Belonging sir curiosity discovery extremity yet forfeited prevailed own off.
            Traveling by introduced of mr terminated.
          </p>
        </div>
        </div>
        </section>
        <section className="bg-[#f6d585] m-30 p-8 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Images */}
      <div className="relative flex flex-row items-center justify-center gap-4 md:gap-8">
      <div className="relative flex flex-col items-center justify-center gap-4">
        {/* Top image */}
        <img
          src="https://restan-nextjs.vercel.app/assets/img/food/9.jpg"
          alt="Salmon dish"
          className="w-32 h-32 object-cover rounded-full shadow-lg"
        />
        <img
          src="https://restan-nextjs.vercel.app/assets/img/food/11.jpg"
          alt="Food bottom"
          className="w-32 h-32 object-cover rounded-full shadow-lg"
        />
      </div>
        {/* Middle main image */}
        <div className="relative">
          <img
            src="https://restan-nextjs.vercel.app/assets/img/food/10.jpg"
            alt="Main steak"
            className="w-44 h-44 object-cover rounded-full shadow-lg"
          />
       </div>   
    </div>
      {/* Right Text Content */}
      <div className="max-w-lg text-center  md:text-left">
        <p className="text-sm font-semibold tracking-widest text-[#826a45]">
          TODAY SPECIAL OFFER
        </p>
        <h2 className="text-4xl font-bold text-black leading-tight mt-2">
          Explore Irresistible <br /> Promotions!
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Contrasted dissimilar get joy you instrument out reasonably. Again
          keeps at no meant stuff. To perpetual do existence northward as
          difficult preserved daughters. Continued at up to zealously necessary.
        </p>
        <button className="mt-6 bg-[#826a45] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#6f5937] transition">
          Order Today
        </button>
      </div>
    </section>
    <section className="bg-black m-30 p-8 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex flex-row">
        <div className="relative">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=1080&q=75" />
        </div>
        <div className="relative flex flex-col  text-white py-20 px-6 text-center md:text-left">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Are you Ready to Start <br /> your online Order?
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 mt-6 text-sm md:text-base leading-relaxed">
          Indulgence diminution so discovered mr apartments. Are off under folly death
          wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do
          am or limits hearts. Resolve parties but why she shewing. She sang know now.
        </p>
         <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
          {/* App Store Button */}
          <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
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
    </div>
      
    
    
  );
}

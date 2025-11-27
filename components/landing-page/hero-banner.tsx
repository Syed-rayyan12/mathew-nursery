import React from 'react'
import { Search } from 'lucide-react'

const heroBanner = () => {
  return (
    <>
        <section className="w-full min-h-screen relative flex justify-center"> 
           <img src="/images/hero-banner.png" alt="" className='w-full h-auto object-cover background-center' />
           
           {/* Content Overlay */}
           <div className="absolute inset-0 flex pt-30">
             <div className="max-w-4xl w-full px-24">
               {/* Heading */}
               <h1 className="text-5xl font-heading font-bold text-white leading-14 mb-4">
                 Find The Perfect <span className='text-[#044a55]'>Nursery</span> For<br/>  Your <span className='text-[#044a55]'>Little One</span>
               </h1>
               
               {/* Description */}
               <p className="text-lg md:text-xl text-white/90 mb-8">
                 Discover trusted nurseries in your area
               </p>
               
               {/* Search Box */}
               <div className="bg-white rounded-full shadow-lg p-2 flex gap-2 w-fit">
                 {/* Select Dropdown */}
                 <select className="px-4 py-3 bg-transparent border-none outline-none text-gray-700 font-medium">
                   <option value="">Select Type</option>
                   <option value="daycare">Daycare</option>
                   <option value="preschool">Preschool</option>
                   <option value="nursery">Nursery</option>
                 </select>
                 
                 {/* Divider */}
                 <div className="h-8 w-px bg-gray-300"></div>
                 
                 {/* Location Input */}
                 <input 
                   type="text" 
                   placeholder="Enter your location" 
                   className="px-4 py-3 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400 w-64"
                 />
                 
                 {/* Search Button */}
                 <button className="bg-secondary hover:bg-secondary/90 text-white rounded-full p-3 transition-colors">
                   <Search className="w-5 h-5" />
                 </button>
               </div>
             </div>
           </div>
        </section>
    </>
  )
}

export default heroBanner;

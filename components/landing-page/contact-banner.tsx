import React from 'react'
import { Search } from 'lucide-react'

const ContactUs = () => {
    return (
        <section className="w-full h-[80vh] relative flex justify-center"
            style={{
                backgroundImage: "url('/images/about-banner.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full px-24 flex flex-col gap-4">
                    {/* Tag Heading */}

                    <img src="/images/cloud.png" className='h-16 object-cover absolute -top-14 left-124' alt="" />
                    {/* Heading */}
                    <h2 className="text-[66px] font-heading font-medium text-white leading-tight">
                        Get in Touch <span className="text-secondary">With Us</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-white text-lg leading-relaxed">
                        We're here to answer your questions, provide more information<br /> about
                        our nursery, or help you schedule a visit.
                    </p>


                    {/* Search Box */}
                    <div className="bg-white rounded-md shadow-lg h-15 p-2 flex justify-between gap-2 max-w-2xl">
                        {/* Select Dropdown */}
                        <select className="px-4 py-3 bg-transparent border-none outline-none text-gray-700 font-medium">
                            <option value="">Select Type</option>
                            <option value="daycare">Daycare</option>
                            <option value="preschool">Preschool</option>
                            <option value="nursery">Nursery</option>
                        </select>

                        {/* Divider */}


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
    )
}

export default ContactUs;
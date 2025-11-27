import React from 'react'
import { Search } from 'lucide-react'

const ReviewBanner = () => {
    return (
        <section className="w-full h-[80vh] relative flex justify-center"
            style={{ backgroundImage: "url('/images/about-banner.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 flex pt-40 justify-center">
                <div className=" w-full px-24 flex flex-col gap-4">
                    {/* Tag Heading */}
          

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                       Share Your Experience <span className="text-secondary">Experience</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-white text-lg leading-relaxed">
                      Help other parents by sharing your honest review
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

export default ReviewBanner;
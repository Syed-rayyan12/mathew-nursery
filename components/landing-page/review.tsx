import React from 'react'
import { Search } from 'lucide-react'

const Review = () => {
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
                      Real Reviews from Real <span className="text-secondary">Parents</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-white text-lg leading-relaxed">
                 Read genuine, verified experiences to help you choose the right nursery.
                    </p>


                    {/* Search Box */}
                   
                </div>
            </div>
        </section>
    )
}

export default Review;
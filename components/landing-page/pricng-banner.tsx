import React from 'react'
import { Search } from 'lucide-react'

const PricingBanner = () => {
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

                    <img src="/images/cloud.png" className='h-16 object-cover absolute -top-14 left-148' alt="" />
                    {/* Heading */}
                    <h2 className="text-[66px] font-heading font-medium text-white leading-tight">
                       Flexible Plans for Every <span className="text-secondary">Nursery</span><br/> for Your Child
                    </h2>

                    {/* Paragraph */}
                    <p className="text-white text-lg leading-relaxed">
                        Choose a plan that fits your goals and grow your online presence.
                    </p>


                    {/* Search Box */}
                   
                </div>
            </div>
        </section>
    )
}

export default PricingBanner;
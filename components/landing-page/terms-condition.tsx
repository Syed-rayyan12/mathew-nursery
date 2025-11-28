import React from 'react'
import { Search } from 'lucide-react'

const TermsAndConditions = () => {
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
                      Terms <span className="text-secondary">&</span> Conditions
                    </h2>

                    {/* Paragraph */}
                    <p className="text-white text-lg leading-relaxed">
                  Please read these terms carefully before using our website.
                    </p>


                    {/* Search Box */}
                   
                </div>
            </div>
        </section>
    )
}

export default TermsAndConditions;
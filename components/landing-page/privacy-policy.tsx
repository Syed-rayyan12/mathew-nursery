import React from 'react'
import { Search } from 'lucide-react'

const TermsAndConditions = () => {
    return (
        <section className="w-full h-[80vh] relative flex justify-center"
            style={{
                backgroundImage: "url('/images/about-banner.png')",
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
                        PRIVACY <span className="text-secondary">POLICY</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-white text-lg leading-relaxed">
                        we respect your privacy and are committed to protecting your personal information.<br />
                        This policy explains how we collect, use, and store your data.
                    </p>


                    {/* Search Box */}
                   
                </div>
            </div>
        </section>
    )
}

export default TermsAndConditions;
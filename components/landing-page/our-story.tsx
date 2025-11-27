import React from 'react'

const OurStory = () => {
    return (
        <section className="w-full bg-[#F2F4F5] mb-20">
            <div className="flex item-center">
                {/* Image */}

                <img
                    src="/images/our-story.png"
                    alt="Our Story"
                    className="w-full h-auto"
                />


                {/* Content */}

                {/* Heading */}
                <div className='px-6 py-10'>

                    <h2 className="text-4xl md:text-5xl font-heading font-medium text-gray-900 mb-4">
                        Our <span className="text-secondary">Story</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-foreground leading-relaxed mb-8 font-sans text-[18px]">
                        Choosing the right nursery is one of the most important decisions a family will ever make — but for years, parents struggled with scattered information, outdated listings, and unreliable reviews. We saw the stress and uncertainty this created and knew there had to be a better way.
                        <br /><br />
                        Our platform was created with a simple mission: to bring transparency, trust, and clarity to childcare discovery.
                        <br /><br />
                        What began as a small idea to help local parents quickly grew into a nationwide childcare directory. Today, we connect families with nurseries across the country, offering verified reviews, detailed profiles, and tools that make the search experience easier, calmer, and more informed.
                        <br /><br />
                        We believe every child deserves a nurturing start, and every parent deserves confidence in their choice. That belief continues to guide everything we build — from smarter search filters to improved nursery profiles and group management tools.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default OurStory
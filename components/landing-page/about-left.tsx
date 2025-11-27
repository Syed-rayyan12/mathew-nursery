import React from 'react'
import { Check } from 'lucide-react'

const AboutLeft = () => {
  return (
    <section className="w-full py-16 bg-white px-24">
      <div className="container mx-auto  flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/about-left.png"
            alt="About Left"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-gray-900 mb-4">
            Our <span className="text-secondary">Mission</span>
          </h2>

          {/* Paragraph */}
          <p className="text-foreground font-sans text-[18px] leading-relaxed mb-8">
            We aim to simplify the childcare discovery process by providing clear information, trusted reviews, and verified profiles — helping parents make confident decisions about early years education.
          </p>

          {/* Two Divs with Spans */}
          <div className=" flex items-center gap-14">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-[18px] font-sans font-normal">
                <Check className="w-5 h-5 text-orange-500" />
                Clear Information
              </span>
              <span className="flex items-center gap-2 text-[18px] font-sans font-normal">
                <Check className="w-5 h-5 text-orange-500" />
                Trusted Reviews
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-[18px] font-sans font-normal">
                <Check className="w-5 h-5 text-orange-500" />
                Verified Profiles
              </span>
              <span className="flex items-center gap-2 text-[18px] font-sans font-normal">
                <Check className="w-5 h-5 text-orange-500" />
                Confident Decisions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutLeft
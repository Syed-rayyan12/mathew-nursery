import React from 'react'
import AboutBanner from '@/components/landing-page/about-banner'
import AboutLeft from '@/components/landing-page/about-left'
import WhatWeDo from '@/components/landing-page/what-we-do'
import OurStory from '@/components/landing-page/our-story'
import CircleGridSection from '@/components/landing-page/circle-grid-section'
import TestimonialSlider from '@/components/landing-page/testimonial-slider'
import NewsletterSignup from '@/components/landing-page/newsletter-signup'

const page = () => {
  return (
    <>
      <AboutBanner />
      <AboutLeft />
      <WhatWeDo />
      <OurStory />
       <CircleGridSection />
         <TestimonialSlider />
         <NewsletterSignup/>
    </>
  )
}

export default page

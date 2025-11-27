import Footer from '@/components/landing-page/footer'
import Header from '@/components/landing-page/header'
import MiniNav from '@/components/landing-page/little-nav'
import ReviewBanner from '@/components/landing-page/review-banner'
import SubmitReviewForm from '@/components/landing-page/review-form'
import React from 'react'

const page = () => {
    return (
        <>
            <MiniNav />
            <Header />
            <ReviewBanner />
            <SubmitReviewForm />
            <Footer />
        </>
    )
}

export default page

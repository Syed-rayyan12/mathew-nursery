import CookiePolicy from '@/components/landing-page/cookie-policy'
import Footer from '@/components/landing-page/footer'
import Header from '@/components/landing-page/header'
import MiniNav from '@/components/landing-page/little-nav'
import React from 'react'

const page = () => {
    return (
        <>
            <MiniNav />
            <Header />
            <CookiePolicy />
            <div className='bg-white py-20'>

            
            <div className="px-24 mx-auto p-6 space-y-6">
                <h1 className="text-3xl font-bold">Cookie Policy</h1>
                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">1. What Are Cookies?</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Small text files stored on your device to enhance browsing experience</li>
                        <li>Help remember preferences and track website usage</li>
                    </ul>
                </section>


                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">2. Types of Cookies We Use</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                        <li><strong>Functional Cookies:</strong> Remember preferences (e.g., language, region)</li>
                        <li><strong>Marketing Cookies:</strong> Optional, help us show relevant content</li>
                    </ul>
                </section>


                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">3. How We Use Cookies</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>To improve website navigation and performance</li>
                        <li>To remember user preferences</li>
                        <li>To analyze visits and user behavior</li>
                    </ul>
                </section>


                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">4. Managing Cookies</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>You can control cookies via your browser settings</li>
                        <li>Disabling some cookies may affect website functionality</li>
                    </ul>
                </section>


                <section className="space-y-3 pb-10">
                    <h2 className="text-xl font-semibold">5. Consent</h2>
                    <p>
                        By using our website, you consent to the use of cookies as described.
                    </p>
                </section>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default page


import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AboutUsSection = () => {
    return (
        <section className="w-full py-16 px-24 max-sm:px-10 lg:px-10 xl:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex max-lg:flex-col gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="flex-1">
                        <img
                            src="/images/girl.png"
                            alt="About Us"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 space-y-6">
                        {/* Sub tag */}
                        <p className="text-primary font-medium font-heading text-2xl">ABOUT US</p>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 leading-tight">
                            Where Little Dreams <span className="text-secondary">Grow</span>
                        </h2>

                        {/* Paragraph */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                          At My Nursery, we believe that every child deserves a safe, happy, and inspiring start in life. Our mission is simple — to connect families with trusted nurseries and childcare providers across the UK.
We’ve built a platform that brings together parents searching for the perfect nursery and early years professionals who are passionate about what they do. Whether you’re a parent looking for a nurturing environment for your little one, or a nursery seeking to reach more local families, My Nursery helps you make that connection with confidence.
                        </p>

                        {/* Read More Button */}
                        <div className="flex items-center gap-4">

                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-[6px] px-10 py-6">
                                Read More
                            </Button>

                            {/* Phone section */}
                            <div className="flex items-center gap-3 ">
                                    <Phone className="w-6 h-6 text-[]" />
                                <span className="text-foreground font-medium text-[18px]  font-sans  font-normal">+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection
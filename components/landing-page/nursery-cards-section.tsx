'use client';

import React from 'react';

import Link from 'next/link';
import { ArrowBigLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const latestNews = [
    {
        title: 'Bright Horizons Early Learning',
        rating: 4.5,
        summary: 'Award-winning early years centre helping children grow with confidence.',
        image: '/images/nursery-1.png',
    },
    {
        title: 'Little Steps Nursery',
        rating: 4.5,
        summary: 'A warm, nurturing nursery offering early learning and creative play.',
        image: '/images/nursery-2.png',
    },
    {
        title: 'Happy Tots Daycare',
        rating: 4.5,
        summary: 'Safe, stimulating and family-focused childcare loved by parents.',
        image: '/images/nursery-3.png',
    },

];

const NurseryCardsSection = () => {
    return (
        <div className="py-16  relative bg-white">
            <div>
                <div className='text-center'>

                    <p className="text-primary font-medium font-heading text-2xl">Featured Nurseries</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-medium mb-2 text-foreground leading-tight">
                        Our Top <span className="text-secondary">Nurseries</span>
                    </h2>
                    <p className='text-[16px] font-ubuntu  mb-9'>Nurturing spaces where little ones grow and glow
                    </p>
                </div>
                <div className='mx-auto px-24  max-sm:px-10 max-lg:px-36 '>
                    <div className="grid grid-cols-3  max-lg:grid-cols-1 max-lg:gap-40 max-sm:gap-44  gap-6">
                        {latestNews.map((news, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-80"
                            >
                                <img src={news.image} alt={news.title} className="w-full h-full object-cover rounded-xl" />
                                <div className="absolute top-60 left-0 right-0 px-4 py-6 mx-4 shadow-lg bg-white rounded-lg">
                                    <h3 className="font-heading text-[24px] font-medium text-[#044A55]">{news.title}</h3>
                                    <div className="flex items-center gap-1 mb-2 mt-1">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="text-sm ml-2 text-foreground">{news.rating}/5</span>
                                    </div>
                                    <p className="font-ubuntu text-[14px] text-muted-foreground">{news.summary}</p>
                                    <div className='mt-4 flex items-center gap-2 pt-2'>
                                        <Link href="" className='text-secondary font-heading text-[20px] uppercase'>VIEW ALL BRANCHES</Link>
                                        <ArrowRight className='text-secondary size-5' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div className='flex justify-center items-center mt-44'>
                <Button className="mt-2 bg-primary hover:bg-transparent hover:text-primary border-2 transition-all duration-300 cursor-pointer border-primary text-white rounded-[6px] px-10 py-6">
                    Search All Group
                </Button>
            </div>
        </div>
    );
};

export default NurseryCardsSection;
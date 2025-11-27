'use client';

import React from 'react';

import Link from 'next/link';
import { ArrowBigLeft, ArrowRight, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const latestNews = [
    {
        title: 'Tips for Choosing the Right Nursery',
        datecheck: 'August 15, 2023',
        summary: 'Discover what really matters when selecting a nursery for your little one — from staff qualifications to emotional wellbeing.',
        image: '/images/nursery-1.png',
    },
    {
        title: 'Tips for Choosing the Right Nursery',
        datecheck: 'August 15, 2023',
        summary: 'Discover what really matters when selecting a nursery for your little one — from staff qualifications to emotional wellbeing.',
        image: '/images/nursery-2.png',
    },
    {
        title: 'Tips for Choosing the Right Nursery',
        datecheck: 'August 15, 2023',
        summary: 'Discover what really matters when selecting a nursery for your little one — from staff qualifications to emotional wellbeing.',
        image: '/images/nursery-3.png',
    },

];

const ArticleNews = () => {
    return (
        <div className="py-16 px-24 relative bg-white">
            <div>
                <div className='text-center'>

                    <p className="text-primary font-medium font-heading text-2xl">Articles & News</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-medium mb-2 text-foreground leading-tight">
                        Latest Insights & <span className="text-secondary">Nursery</span> News
                    </h2>
                    <p className='text-[16px] font-ubuntu  mb-9'> Fresh stories, helpful tips, and exciting news.
                    </p>
                </div>
                <div className='mx-auto px-36 max-2xl:px-6 max-sm:px-10 max-lg:px-36 '>
                    <div className="grid grid-cols-3  max-lg:grid-cols-1 max-lg:gap-34  gap-6">
                        {latestNews.map((news, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-80"
                            >
                                <img src={news.image} alt={news.title} className="w-full h-full object-cover rounded-xl" />
                                <div className="absolute top-60 left-0 right-0 px-4 py-6 mx-4 shadow-lg bg-white rounded-lg">
                                    <div className='flex items-center gap-2 mb-2'>
                                        <Calendar className='text-secondary'/>
                                        <span className="text-sm text-muted-foreground">{news.datecheck}</span>
                                    </div>
                                    <h3 className="font-heading text-[24px] font-medium text-[#044A55]">{news.title}</h3>
                                    {/* <div className="flex items-center gap-1 mb-2 mt-1">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="text-sm ml-2 text-foreground">{news.rating}/5</span>
                                    </div> */}
                                    <p className="font-ubuntu text-[14px] text-muted-foreground">{news.summary}</p>
                                    <div className='mt-4 flex items-center gap-2 pt-2'>
                                        <Link href="" className='text-[#044A55] font-heading font-medium text-[20px] uppercase'>Read More</Link>
                                        <ArrowRight className='text-[#044A55] size-5' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div className='flex justify-center items-center mt-44'>
                <Button className="mt-2 bg-primary hover:bg-transparent hover:text-primary border-2 transition-all duration-300 cursor-pointer border-primary text-white rounded-[6px] px-10 py-5">
                   View All
                </Button>
            </div>
        </div>
    );
};

export default ArticleNews;
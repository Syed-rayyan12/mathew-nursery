import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
const latestNews = [
    {
        title: 'Bright Beginnings Group',
        rating: 4.5,
        slug: 'bright-beginnings-group',
        summary: 'Award-winning early years centre helping children grow with confidence.',
        image: '/images/nursery-1.png',
    },
    {
        title: 'Little Stars Nurseries',
         slug: 'little-stars-nurseries',
        rating: 4.5,
        summary: 'A warm, nurturing nursery offering early learning and creative play.',
        image: '/images/nursery-2.png',
    },
    {
        title: 'Rainbow Kids Group',
         slug: 'Rainbow Kids Group',
        rating: 4.5,
        summary: 'Safe, stimulating and family-focused childcare loved by parents.',
        image: '/images/nursery-3.png',
    },

];

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};
const nurseryGroup = () => {
    return (
        <>
            <div className=' px-24  pt-20 pb-60 bg-white'>
                  <div className='flex items-center gap-4 mb-10 '>
                        <span className='text-secondary text-[28px] font-semibold'>(03)</span>
                        <span className='text-foreground text-[28px] font-semibold'>nursery groups found</span>
                    </div>
                <div className="grid grid-cols-3  max-lg:grid-cols-1 max-lg:gap-34  gap-6">
                  
                    {latestNews.map((news, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-80"
                        >

                            <Link href={`/nursery-group/${news.slug}`}>
                            <img src={news.image} alt={news.title} className="w-full h-full object-cover rounded-xl" />
                            </Link>
                            <div className="absolute top-60 left-0 right-0 px-4 py-6 mx-4 shadow-lg bg-white rounded-lg">
                                <h3 className="font-heading text-[24px] font-medium text-[#044A55]">{news.title}</h3>
                                <div className="flex items-center gap-1 mb-2 mt-1">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="text-sm ml-2 text-foreground">{news.rating}/5</span>
                                </div>
                                <p className="font-ubuntu text-[14px] text-muted-foreground">{news.summary}</p>
                               <Link href={`/nursery-group/${news.slug}`}>
                                <div className='mt-4 flex items-center gap-2 pt-2'>
                                    <Link href="" className='text-secondary font-heading text-[20px] uppercase'>VIEW ALL BRANCHES</Link>
                                    <ArrowRight className='text-secondary size-5' />
                                </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default nurseryGroup

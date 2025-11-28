'use client'

import { ArrowRight, Calendar } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';



const latestNews = [
    {
        title: 'Tips for Choosing the Right Nursery',
          slug: 'tips-for-choosing-the-right-nursery',
        datecheck: 'August 15, 2023',
        summary: 'Discover what really matters when selecting a nursery for your little one — from staff qualifications to emotional wellbeing.',
        image: '/images/article-1.png',
    },
    {
        title: 'Tips for Choosing the Right Nursery',
          slug: 'tips-for-choosing-the-right-nursery',
        datecheck: 'August 15, 2023',
        summary: 'Discover what really matters when selecting a nursery for your little one — from staff qualifications to emotional wellbeing.',
        image: '/images/article-2.png',
    },
    {
        title: 'Tips for Choosing the Right Nursery',
          slug: 'tips-for-choosing-the-right-nursery',
        datecheck: 'August 15, 2023',
        summary: 'Discover what really matters when selecting a nursery for your little one — from staff qualifications to emotional wellbeing.',
        image: '/images/article-3.png',
    },
];

const news = [
    {
        title: 'Tips for Choosing the Right Nursery',
          slug: 'tips-for-choosing-the-right-nursery',
        datecheck: 'August 10, 2023',
        summary: 'A complete guide to navigating nursery funding options and making childcare more affordable for your family.',
        image: '/images/group-3.png',
    },
    {
        title: 'Tips for Choosing the Right Nursery',
          slug: 'tips-for-choosing-the-right-nursery',
        datecheck: 'August 8, 2023',
        summary: 'Fun and educational activities to support your child\'s development at home and prepare them for nursery.',
        image: '/images/group-2.png',
    },
    {
        title: 'Tips for Choosing the Right Nursery',
        slug: 'tips-for-choosing-the-right-nursery',
        datecheck: 'August 5, 2023',
        summary: 'Learn about the essential safety measures and standards that quality nurseries maintain for your peace of mind.',
        image: '/images/group-3.png',
    },
];

const ArticleTabs = () => {
    const [activeTab, setActiveTab] = useState('all')

    const tabs = [
        { id: 'all', label: 'All Articles' },
        { id: 'childcare', label: 'Childcare Tips' },
        { id: 'funding', label: 'Funding & Costs' },
        { id: 'activities', label: 'Activities & Learning' },
        { id: 'updates', label: 'Nursery Updates' },
    ]

    return (
        <div className="w-full px-24 mx-auto py-8 bg-white px-6">
            <div className="flex justify-center text-center gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-md font-medium cursor-pointer transition-all duration-200 ${activeTab === tab.id
                            ? 'bg-secondary text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-8">
                {activeTab === 'all' && (
                    <>
                        <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-34 gap-6 mb-12">
                            {latestNews.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-80"
                                >
                                    <Link href={`/article/${item.slug}`}>
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl" />
                                    </Link>
                                    <div className="absolute top-60 left-0 right-0 px-4 py-6 mx-4 shadow-lg bg-white rounded-lg">
                                        <div className='flex items-center gap-2 mb-2'>
                                            <Calendar className='text-secondary' />
                                            <span className="text-sm text-muted-foreground">{item.datecheck}</span>
                                        </div>
                                        <h3 className="font-heading text-[24px] font-medium text-foreground">{item.title}</h3>
                                        <p className="font-ubuntu text-[14px] text-muted-foreground">{item.summary}</p>
                                        <Link href={`/article/${item.slug}`}>
                                        <div className='mt-4 flex items-center pt-2'>
                                            <Button  className='text-[#044A55] font-heading font-medium text-[20px] uppercase bg-transparent hover:bg-transparent cursor-pointer'>Read More</Button>
                                            <ArrowRight className='text-[#044A55] size-5 cursor-pointer' />
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                       
                        <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-34 gap-6 mt-50 mb-50">
                            {news.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-80"
                                >
                                    <Link href={`/article/${item.slug}`}>
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl" />
                                    </Link>
                                    <div className="absolute top-60 left-0 right-0 px-4 py-6 mx-4 shadow-lg bg-white rounded-lg">
                                        <div className='flex items-center gap-2 mb-2'>
                                            <Calendar className='text-secondary' />
                                            <span className="text-sm text-muted-foreground">{item.datecheck}</span>
                                        </div>
                                        <h3 className="font-heading text-[24px] font-medium text-foreground">{item.title}</h3>
                                        <p className="font-ubuntu text-[14px] text-muted-foreground">{item.summary}</p>
                                        <Link href={`/article/${item.slug}`}>
                                        <div className='mt-4 flex items-center  pt-2'>
                                            <Button  className='text-[#044A55] bg-transparent hover:bg-transparent cursor-pointer font-heading font-medium text-[20px] uppercase'>Read More</Button>
                                            <ArrowRight className='text-[#044A55] size-5 cursor-pointer' />
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                {activeTab === 'childcare' && (
                    <div className="text-gray-700">
                        <h3 className="text-2xl font-heading font-bold mb-4">Childcare Tips</h3>
                        <p>Expert advice and tips for childcare and parenting.</p>
                    </div>
                )}
                {activeTab === 'funding' && (
                    <div className="text-gray-700">
                        <h3 className="text-2xl font-heading font-bold mb-4">Funding & Costs</h3>
                        <p>Information about nursery funding options and costs.</p>
                    </div>
                )}
                {activeTab === 'activities' && (
                    <div className="text-gray-700">
                        <h3 className="text-2xl font-heading font-bold mb-4">Activities & Learning</h3>
                        <p>Educational activities and learning resources for children.</p>
                    </div>
                )}
                {activeTab === 'updates' && (
                    <div className="text-gray-700">
                        <h3 className="text-2xl font-heading font-bold mb-4">Nursery Updates</h3>
                        <p>Latest news and updates from nurseries and the childcare sector.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArticleTabs
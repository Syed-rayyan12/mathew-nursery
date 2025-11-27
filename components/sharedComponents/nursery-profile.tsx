"use client"
import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { Clock } from 'lucide-react'

const NurseryProfile = () => {
    const [activeTab, setActiveTab] = React.useState("basic info");
    const tabs = ["basic info", "about", "facilities", "hours", "contact"];
    const facilities = [
        'Outdoor Play Area',
        'Indoor Play Area',
        'Library',
        'Art & Craft Room',
        'Music Room',
        'Sports Area'
    ];

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const
    type Day = typeof daysOfWeek[number]
    type TimingsType = Record<Day, { start: string; end: string }>

    // State to store timings
    const [timings, setTimings] = useState<TimingsType>(
        daysOfWeek.reduce(
            (acc, day) => ({ ...acc, [day]: { start: '06:00', end: '21:00' } }),
            {} as TimingsType
        )
    );

    const handleChange = (day: Day, value: { start: string; end: string }) => {
        setTimings(prev => ({ ...prev, [day]: value }));
    };

    return (
        <>
            <div>
                <h2 className='text-secondary font-medium text-[48px] font-heading'><span className='text-foreground'>MANAGE </span>NURSERY PROFILE</h2>
                <p>Last updated: 2 days ago</p>
                <Card className='pt-4 bg-white rounded-md p-6 mt-6 flex flex-col gap-4'>
                    <h2 className='font-sans text-lg'>Profile Information</h2>
                    <p>Update your profile information below.</p>
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">

                        {/* Map tab names for triggers */}
                        <TabsList className="grid grid-cols-5 w-full bg-[#EFEFEF] p-2 rounded-md mb-4">
                            {tabs.map((tab, index) => (
                                <TabsTrigger key={index} value={tab}
                                    className={activeTab === tab ? "bg-white text-foreground cursor-pointer font-sans font-medium px-3 py-1 rounded-md" : "text-gray-600 cursor-pointer font-sans font-medium px-4 py-2 rounded-md"}
                                >
                                    {tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Tabs Content */}
                        <TabsContent value="basic info">
                            <div className='flex items-center gap-4'>
                                <div className='flex flex-col w-full mb-2'>
                                    <label className='text-[16px] font-sans mb-2'>Nursery Name</label>
                                    <Input type="text" className='w-full rounded-md' />
                                </div>
                                <div className='flex flex-col w-full mb-2'>
                                    <label className='text-[16px] font-sans mb-2'>Location</label>
                                    <Input type="text" className='w-full rounded-md' />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="about">
                            <div className='flex flex-col items-center gap-4'>
                                <div className='flex flex-col w-full mb-2'>
                                    <label className='text-[16px] font-sans mb-2'>Description</label>
                                    <Textarea placeholder='A modern, nurturing environment for early childhood development.' className='w-full rounded-md' />
                                </div>
                                <div className='flex flex-col w-full mb-2'>
                                    <label className='text-[16px] font-sans mb-2'>Philosophy</label>
                                    <Textarea placeholder='We believe in play-based learning and holistic development.' className='w-full rounded-md' />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="facilities">
                            <div className='flex flex-col gap-3'>
                                {facilities.map((facility, index) => (
                                    <label key={index} className='flex items-center gap-2 border border-gray-300 rounded-md p-2'>
                                        <Checkbox />
                                        <span>{facility}</span>
                                    </label>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="hours">
                            <div className='flex flex-col gap-3'>
                                {daysOfWeek.map((day) => (
                                    <div key={day} className='flex items-center gap-2'>
                                        <span className='w-24 font-medium'>{day}</span>
                                        <Clock className='w-5 h-5 text-blue-500' />

                                        {/* Start time */}
                                        <Input
                                            type="time"
                                            value={timings[day].start}
                                            onChange={(e) => handleChange(day, { ...timings[day], start: e.target.value })}
                                            className='flex-1 rounded-md'
                                        />

                                        <span className='px-1'>to</span>

                                        {/* End time */}
                                        <Input
                                            type="time"
                                            value={timings[day].end}
                                            onChange={(e) => handleChange(day, { ...timings[day], end: e.target.value })}
                                            className='flex-1 rounded-md'
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="contact">
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col w-full mb-2'>
                                    <label className='text-[16px] font-sans mb-2'>Email</label>
                                    <Input type="email" className='w-full rounded-md' />
                                </div>
                                <div className='flex flex-col w-full mb-2'>
                                    <label className='text-[16px] font-sans mb-2'>Phone Number</label>
                                    <Input type="tel" className='w-full rounded-md' placeholder='+44 123 456 7890' />
                                </div>
                                <div className='flex flex-col w-full mb-2'>
                                    <label className='text-[16px] font-sans mb-2'>Website (optional)</label>
                                    <Textarea className='w-full rounded-md' />
                                </div>
                            </div>
                        </TabsContent>
                        <div className='flex justify-end gap-2 mt-3'>
                            <button className='bg-transparent text-foreground border border-gray-300 rounded-md px-6 py-2 mt-4'>save as draft</button>
                            <button className='bg-secondary text-primary-foreground rounded-md px-6 py-2 mt-4'>Save and submit for approval</button>


                        </div>
                    </Tabs>
                </Card>
            </div>
        </>
    )
}

export default NurseryProfile
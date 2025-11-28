import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
import MiniNav from "@/components/landing-page/little-nav";
import { ArrowRight, Calendar, Download } from "lucide-react";
import Link from "next/link";

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

export default function ChildcareTips() {
    return (
        <>
            <MiniNav />
            <Header />
            <div className="bg-white">
                <div
                    className="bg-cover bg-center bg-no-repeat relative h-[80vh] py-10 mb-260"
                    style={{ backgroundImage: "url('/images/detail.png')" }}
                >


                    <div className=" absolute inset-0  shadow-2xl top-100 px-24 ">
                        <div className=" mx-auto p-6 bg-white shadow-2xl rounded-2xl space-y-6">
                            <div className="w-30 h-10 rounded-2xl flex justify-center items-center bg-[#D5F7FF]">
                                <span className="text-sm font-medium text-secondary">Childcare Tips</span>
                            </div>

                            <h2 className="text-[59px] font-medium leading-tight">
                                Starting Nursery: A Guide for First-Time Parents
                            </h2>

                            <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
                                <div className="flex gap-4">
                                    <span>Sarah Mitchell</span>
                                    <span>•</span>
                                    <span>15 January 2024</span>
                                    <span>•</span>
                                    <span>5 min read</span>
                                </div>
                                <div className="flex items-center ">
                                    <Download className="text-secondary w-6 h-6" />
                                    <button className="px-4 py-2 bg-transparent text-secondary rounded-lg w-max">Share</button>
                                </div>
                            </div>

                            <section className="space-y-3">
                                <h2 className="text-xl font-medium">Preparing for the Big Day</h2>
                                <p>
                                    Starting nursery is a significant milestone for both you and your child. It's natural to feel a
                                    mix of excitement and anxiety, but with the right preparation, you can make this transition
                                    smooth and positive.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-medium">What to Expect in the First Week</h2>
                                <p>
                                    The first week is all about settling in. Your child will be introduced to their new
                                    environment, meet their key person, and start building relationships with other children.
                                    Don't worry if there are tears – this is completely normal and usually passes within a few
                                    days.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-medium">Essential Items to Pack</h2>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Spare clothes (at least 2 sets)</li>
                                    <li>Comfort item from home</li>
                                    <li>Nappies and wipes (if needed)</li>
                                    <li>Water bottle with their name</li>
                                    <li>Sun hat and sun cream (seasonal)</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-medium">Building Confidence</h2>
                                <p>
                                    Talk positively about nursery at home, read books about starting nursery, and if possible,
                                    visit the setting together before the first day. This helps your child feel familiar with the
                                    new environment.
                                </p>
                            </section>

                            <section className="p-4 bg-[#D5F7FF] border rounded-lg shadow-sm">
                                <h3 className="font-medium text-lg">Top Tip</h3>
                                <p className="mt-1">
                                    Keep goodbyes short and sweet. A quick hug and a confident "See you later!" works
                                    better than lingering, which can increase anxiety for both of you.
                                </p>
                            </section>

                            <section className="space-y-3 pb-6">
                                <h2 className="text-xl font-medium">Communication is Key</h2>
                                <p>
                                    Stay in regular contact with your child's key person. They'll provide daily updates and are
                                    there to answer any questions or concerns you might have.
                                </p>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
            <div className="px-24 mt-4">
                <h2 className="font-medium fon-sans text-[48px] mb-4">Related Articles</h2>
                <div className="grid grid-cols-3  max-lg:grid-cols-1 max-lg:gap-34   gap-6 mb-60">

                    {latestNews.map((news, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-80"
                        >
                            <img src={news.image} alt={news.title} className="w-full h-full object-cover rounded-xl" />
                            <div className="absolute top-60 left-0 right-0 px-4 py-6 mx-4 shadow-lg bg-white rounded-lg">
                                <div className='flex items-center gap-2 mb-2'>
                                    <Calendar className='text-secondary' />
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
            <Footer />
        </>
    );
}
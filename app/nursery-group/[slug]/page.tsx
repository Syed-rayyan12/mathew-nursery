import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Link, Star } from "lucide-react";

const latestNews = [
  {
    title: 'Bright Beginnings Group',
    rating: 4.5,

    summary: 'Award-winning early years centre helping children grow with confidence.',
    image: '/images/nursery-1.png',
  },
  {
    title: 'Little Stars Nurseries',

    rating: 4.5,
    summary: 'A warm, nurturing nursery offering early learning and creative play.',
    image: '/images/nursery-2.png',
  },
  {
    title: 'Rainbow Kids Group',

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

export default function NurseryGroupPage() {
  return (
    <div className="w-full mx-auto  py-10 px-24 shadow-xl bg-white">
      {/* HEADER SECTION */}
      <div className="bg-white p-4 rounded-[6px] shadow-[0_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between ">
          <div>
            <h2 className="text-[48px] font-bold text-[#1F2937] font-medium">SUNSHINE NURSERY</h2>
            <p className="text-gray-700 mb-2">White City, Little Shire</p>
            <div className="flex mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="text-yellow-500" size={16} fill="currentColor" />
              ))}
              <span className="text-gray-600 ml-2">(4.5)</span>
            </div>
          </div>
          <div>
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-md">
              <Heart className="" />
              Add to Shortlist
            </Button>
          </div>
        </div>
        <div className="flex gap-4 justify-center overflow-x-hidden">
          <img
            src="/images/group-1.png"
            className="w-full object-cover"
          />
          <img
            src="/images/group-2.png"
            className="w-full object-cover"
          />
          <img
            src="/images/group-3.png"
            className="w-full object-cover"
          />
          <img
            src="/images/group-4.png"
            className="w-full object-cover"
          />
        </div>
      </div>


      <div className="grid grid-cols-3 gap-6">
        {/* LEFT MAIN CONTENT */}
        <div className="col-span-2 bg-white mt-10 px-4 pt-3 pb-20 shadow-[0px_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-[6px]">
          <h2 className="text-[34px] font-bold text-[#1F2937] font-medium">About Our Group</h2>
          <p className="font-medium text-[16px] font-sans text-muted-foreground mb-8">
            Bright Beginnings is an award-winning nursery group with over 15 years of experience in early years education. We operate 8 nurseries across London, each providing exceptional care and learning opportunities for children aged 3 months to 5 years.


          </p>
          <p className="font-medium text-[16px] font-sans text-muted-foreground"> Our philosophy is centered on learning through play, fostering curiosity, and building confidence. All our nurseries follow the Early Years Foundation Stage (EYFS) framework while maintaining their own unique character and community feel.</p>
        </div>

        {/* RIGHT CONTACT CARD */}
        <div className="p-4 rounded-[6px] border-none shadow-[0_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] mt-10 h-fit sticky top-10">
          <h2 className="text-[32px] font-medium mb-4 font-heading border-b">Contact Our Group</h2>
          <p className="font-medium text-[14px] font-sans text-muted-foreground">123 HGet in touch to learn more about our nurseries or to arrange visits across multiple locations.</p>
          <div className="flex flex-col items-center gap-2">
            <Button className="mt-5 w-full bg-primary hover:bg-blue-600 rounded-[6px] hover:text-primary hover:bg-transparent cursor-pointer border-2 border-primary transition-all duration-300">
              Book Group Visit
            </Button>
            <Button className="mt-5 w-full bg-primary hover:bg-blue-600 rounded-[6px] hover:text-primary hover:bg-transparent cursor-pointer border-2 border-primary transition-all duration-300">
              Download Brochure
            </Button>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-3 pt-20 pb-40 max-lg:grid-cols-1 max-lg:gap-34  gap-6">

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

              <div className='mt-4 flex items-center  pt-2'>
                <Button  className='text-secondary bg-transparent hover:bg-transparent cursor-pointer  font-heading text-[20px] uppercase'>View Nursery</Button>
                <ArrowRight className='text-secondary size-5' />
              </div>

            </div>
          </div>
        ))}
      </div>




    </div>
  );
} 
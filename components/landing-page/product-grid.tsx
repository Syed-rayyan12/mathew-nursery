import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Filter, ChevronDown, ArrowRight } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";

// Slugify function
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

// Dummy Data
const nurseries = [
  {
    id: 1,
    title: "Sunshine Nursery",
    slug: "sunshine-nursery",
    rating: 4.9,
    image:
      "/images/nursery-1.png",
    description: "Award-winning early learning supporting children growth with confidence.",
  },
  {
    id: 2,
    title: "Little Explorers",
    slug: "little-explorers",
    rating: 4.9,
    image:
      "/images/nursery-2.png",
    description: "A warm, nurturing nursery offering early learning and creative play.",
  },
  {
    id: 3,
    title: "Rainbow Days Nursery",
    slug: "rainbow-days-nursery",
    rating: 4.8,
    image:
      "/images/nursery-3.png",
    description: "Safe, stimulating and family-focused childcare loved by parents.",
  },
  {
    id: 4,
    title: "Tiny Treasures",
    slug: "tiny-treasures",
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/861331/pexels-photo-861331.jpeg?auto=compress",
    description: "Creative, fun and interactive environment helping children learn and grow.",
  },
  {
    id: 5,
    title: "Bright Beginnings",
    slug: "bright-beginnings",
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/861331/pexels-photo-861331.jpeg?auto=compress",
    description: "Safe, stimulating and family-focused childcare loved by parents.",
  },
  {
    id: 6,
    title: "Tiny Treasures",
    slug: "tiny-treasures",
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/861331/pexels-photo-861331.jpeg?auto=compress",
    description: "Safe, stimulating and family-focused childcare loved by parents.",
  },
];

export default function NurseriesPage() {
  return (
    <>
    <div className="pt-24 bg-white px-24">
   
     <div className="flex justify-between items-center bg-white ">
      <div>

        <h2 className=" font-medium text-[28px]"><span className="text-secondary">(06)</span> NURSERIES FOUND</h2>
         <span className="text-gray-600">Showing 1-12 of 19 results</span>
      </div>
        <button className="flex items-center gap-2 text-sm  rounded-xl px-3 py-2 shadow-sm">
          Sort by Latest <ChevronDown size={16} />
        </button>
      </div>
       <Separator className="mt-4"/>
    </div>
   
    <div className="w-full grid grid-cols-1 bg-white lg:grid-cols-4 bg-white gap-8 px-24 py-6">

      

      {/* LEFT FILTER SIDEBAR */}
      <aside className="col-span-1 hidden lg:block p-5 bg-white shadow rounded-2xl h-fit  top-10 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Filter size={18} /> Filters
        </h2>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">AGE GROUP</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" /> 0–2 years</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> 2–3 years</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> 3–5 years</label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">FACILITIES</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" /> Outdoor Play Area</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Hot Meals</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> CCTV</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Extended Hours</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> SEND Support</label>
          </div>
        </div>

        <Button className="w-full mt-4 rounded-xl">Apply Filters</Button>
        <button className="w-full mt-3 text-sm text-gray-500 hover:underline">Clear All</button>
      </aside>

     

      {/* RIGHT CONTENT AREA */}
      <section className="col-span-3">


        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-25 pb-40 bg-white">
          {nurseries.map((nursery, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-96"
            >
              <Link href={`/products/${nursery.slug}`}>
                <img src={nursery.image} alt={nursery.title} className="w-full h-full object-cover rounded-xl cursor-pointer" />
              </Link>
              <div className="absolute top-60 left-0 right-0 px-4 py-6 mx-4 shadow-lg bg-white rounded-lg">
                <h3 className="font-heading text-[24px] font-medium text-[#044A55]">{nursery.title}</h3>
                <div className="flex items-center gap-1 mb-2 mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm ml-2 text-foreground">{nursery.rating}/5</span>
                </div>
                <p className="font-ubuntu text-[14px] text-muted-foreground">{nursery.description}</p>
                <Link href={`/products/${nursery.slug}`}>
                  <div className='mt-4 flex items-center pt-2 cursor-pointer'>
                    <Button className='text-secondary bg-transparent cursor-pointer hover:bg-transparent font-heading text-[20px] uppercase px-2'>VIEW NURSERY</Button>
                    <ArrowRight className='text-secondary size-5' />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
     </>
  );
}
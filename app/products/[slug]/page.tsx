import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Heart, LocateIcon, LocationEdit, Mail, Phone, Star, Timer } from "lucide-react";

export default function NurseryDetailsPage() {
  return (
    <div className="w-full mx-auto  py-10 px-24 shadow-xl bg-white">
      {/* HEADER SECTION */}
      <div className="bg-white p-4 rounded-[6px] shadow-[0_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-2xl font-bold ">SUNSHINE NURSERY</h1>
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
        {/* IMAGES GRID */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <img
            src="/images/slug-1.png"
            className=" h-full w-full object-cover col-span-2"
          />
          <div className="grid grid-rows-2 gap-3">
            <img
              src="/images/slug-2.png"
              className=" h-full object-cover"
            />
            <img
              src="/images/slug-3.png"
              className=" h-full object-cover"
            />
          </div>
        </div>
      </div>



      <div className="grid grid-cols-3 gap-6 ">
        {/* LEFT MAIN CONTENT */}
        <div className="col-span-2 bg-white mt-10 px-4 pt-4 pb-20 shadow-[0px_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-[6px]">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid  grid-cols-2 bg-transparent gap-4 h-auto">
              <TabsTrigger value="about" className="data-[state=active]:border-b-2  data-[state=active]:border-secondary data-[state=active]:text-secondary cursor-pointer font-medium font-heading text-[24px] data-[state=active]:bg-transparent data-[state=active]:shadow-none">About</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary  cursor-pointer font-medium font-heading text-[24px] data-[state=active]:bg-transparent data-[state=active]:shadow-none">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-5">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl mb-2 text-[#044A55] font-medium text-[34px]">ABOUT US</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Sunshine Nursery provides a warm, nurturing environment where children
                    aged 0-5 thrive through play-based learning and outdoor exploration. Our
                    experienced team is dedicated to supporting each child's unique
                    development journey.
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-[#044A55] font-medium text-[34px]">OUR PHILOSOPHY</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in learning through play, fostering independence, and
                    celebrating every child's individuality. Our approach combines structured
                    activities with child-led exploration.
                  </p>
                </div>

                {/* FACILITIES & FEATURES */}
                <div>
                  <h2 className="mb-2 text-[#044A55] font-medium text-[34px]">FACILITIES & FEATURES</h2>
                  <div className="grid grid-cols-2 gap-y-3 text-gray-700">
                    {["Large outdoor play area", "Hot nutritious meals", "CCTV in main rooms", "Extended hours available", "SEND support", "Forest school sessions"]
                      .map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="text-blue-500" size={18} /> {item}
                        </div>
                      ))}
                  </div>
                </div>

                {/* FEES */}
                <div>
                  <h2 className="mb-2 text-[#044A55] font-medium text-[34px]">FEES & FUNDING</h2>
                  <div className="space-y-3 text-gray-700">
                    <p className="
                    flex justify-between border-b-2 pb-2 border-gray-200 ">
                      <strong>0-2 years:</strong>
                      <div className="flex flex-col text-end">
                        <span className="ml-2 text-secondary font-bold text-[20px] pb-2">£950/month</span>
                        <span className="ml-2 text-foreground font-sans font-medium ">Part-time: £550/month</span>
                      </div>
                    </p>
                    <p className="
                    flex justify-between border-b-2 pb-2 border-gray-200 ">
                      <strong>2-3 years:</strong>
                      <div className="flex flex-col text-end">
                        <span className="ml-2 text-secondary font-bold text-[20px] pb-2">£875/month</span>
                        <span className="ml-2 text-foreground font-sans font-sans font-medium ">Part-time: £500/month</span>
                      </div>
                    </p>
                    <p className="
                    flex justify-between border-b-2 pb-2 border-gray-200 ">
                      <strong>3-5 years:</strong>
                      <div className="flex flex-col text-end">
                        <span className="ml-2 text-secondary font-bold text-[20px] pb-2">£825/month</span>
                        <span className="ml-2 text-foreground font-sans font-sans font-medium ">Part-time: £475/month</span>
                      </div>
                    </p>
                    <p className="">We accept all government funding schemes including 15 and 30 hours free childcare.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-5">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <h2 className="text-xl text-[#044A55] font-medium text-[34px]">PARENT REVIEWS</h2>
                    <Button className="bg-primary text-white hover:bg-transparent hover:text-primary border-2 hover:border-primary border-tranparent cursor-pointer px-6 py-5">Write a Review</Button>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b bg-[#F9F9F9] p-4 rounded-[6px]">
                      <div className="flex justify-between gap-4 items-center mb-4">
                        <div className="flex gap-4 items-center">
                          <div className="flex justify-center items-center bg-secondary rounded-full w-14 h-14">
                            <span className="text-xl text-white font-heading font-normal">s</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-medium text-[24px] text-[#044A55] font-heading ">Sarah Johnson</span>
                            <span className="text-gray-500 text-sm font-heading font-medium">2 weeks ago</span>
                          </div>
                          <div className="bg-secondary rounded-2xl  px-4 py-1 text-white text-sm justify-center items-start ">
                            verified
                          </div>
                        </div>
                        <div>
                            <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} className="text-yellow-500" size={16} fill="currentColor" />
                        ))}
                      </div>
                        </div>
                      </div>
                      <h2 className="font-heading text-[22px] font-medium text-[#1F2937] mb-3">Absolutely wonderful nursery!</h2>
                      <p className="text-gray-600 font-sans text-[18px]">My daughter has been attending for 6 months and loves it. The staff are caring,
                        professional, and really know each child. The outdoor space is fantastic.</p>

                    </div>
                  

                  <div className="border-b bg-[#F9F9F9] p-4 rounded-[6px]">
                      <div className="flex justify-between gap-4 items-center mb-4">
                        <div className="flex gap-4 items-center">
                          <div className="flex justify-center items-center bg-secondary rounded-full w-14 h-14">
                            <span className="text-xl text-white font-heading font-normal">s</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-medium text-[24px] text-[#044A55] font-heading ">Sarah Johnson</span>
                            <span className="text-gray-500 text-sm font-heading font-medium">2 weeks ago</span>
                          </div>
                          <div className="bg-secondary rounded-2xl  px-4 py-1 text-white text-sm justify-center items-start ">
                            verified
                          </div>
                        </div>
                        <div>
                            <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} className="text-yellow-500" size={16} fill="currentColor" />
                        ))}
                      </div>
                        </div>
                      </div>
                      <h2 className="font-heading text-[22px] font-medium text-[#1F2937] mb-3">Absolutely wonderful nursery!</h2>
                      <p className="text-gray-600 font-sans text-[18px]">My daughter has been attending for 6 months and loves it. The staff are caring,
                        professional, and really know each child. The outdoor space is fantastic.</p>

                    </div>
                  
                  <div className="border-b bg-[#F9F9F9] p-4 rounded-[6px]">
                      <div className="flex justify-between gap-4 items-center mb-4">
                        <div className="flex gap-4 items-center">
                          <div className="flex justify-center items-center bg-secondary rounded-full w-14 h-14">
                            <span className="text-xl text-white font-heading font-normal">s</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-medium text-[24px] text-[#044A55] font-heading">Michael Chen</span>
                            <span className="text-gray-500 text-sm font-heading font-medium">1 Month ago</span>
                          </div>
                          <div className="bg-secondary rounded-2xl  px-4 py-1 text-white text-sm justify-center items-start ">
                            verified
                          </div>
                        </div>
                        <div>
                            <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} className="text-yellow-500" size={16} fill="currentColor" />
                        ))}
                      </div>
                        </div>
                      </div>
                      <h2 className="font-heading text-[22px] font-medium text-[#1F2937] mb-3">Absolutely wonderful nursery!</h2>
                      <p className="text-gray-600 font-sans text-[18px]">My daughter has been attending for 6 months and loves it. The staff are caring,
                        professional, and really know each child. The outdoor space is fantastic.</p>

                    </div>
                  
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* RIGHT CONTACT CARD */}
        <Card className="p-4 rounded-[6px] border-none shadow-[0_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]  mt-10 h-fit sticky top-10">
          <h2 className="text-[32px] font-medium mb-4 font-heading border-b">CONTACT INFORMATION</h2>

          <div className="space-y-3 text-gray-700 text-sm">
            <div className="flex items-center gap-4 mb-6">
              <LocationEdit className="text-secondary" />
              <p className="text-[15px] font-medium font-sans text-muted-foreground">123 High Street, Kensington,
                London, SW7 2AZ</p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Clock className="text-secondary" />
              <p className="text-[15px] font-medium font-sans text-muted-foreground">Monday - Friday: 7:30 AM -
                6:30 PM</p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Phone className="text-secondary" />
              <p className="text-[15px] font-medium font-sans text-muted-foreground">020 1234 5678</p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Mail className="text-secondary" />
              <p className="text-[15px] font-medium font-sans text-muted-foreground">hello@sunshinenursery.co.uk</p>
            </div>
          </div>

          <Button className="mt-5 w-full bg-primary hover:bg-blue-600 rounded-[6px] hover:text-primary hover:bg-transparent cursor-pointer border-2 border-primary transition-all duration-300">
            Book a Visit
          </Button>
        </Card>
      </div>
    </div>
  );
}

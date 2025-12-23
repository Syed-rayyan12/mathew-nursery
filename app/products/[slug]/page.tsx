"use client";
import React, { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Heart, LocateIcon, LocationEdit, Mail, Phone, Star, Timer } from "lucide-react";
import Header from "@/components/landing-page/header";
import MiniNav from "@/components/landing-page/little-nav";
import Footer from "@/components/landing-page/footer";
import { nurseryService, reviewService, Nursery, Review } from "@/lib/api/nursery";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Helper function to convert video URLs to embed format
const getEmbedUrl = (url: string): string => {
  if (!url) return url;
  
  // YouTube
  if (url.includes('youtube.com/watch')) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  
  // Vimeo
  if (url.includes('vimeo.com/') && !url.includes('player.vimeo.com')) {
    const videoId = url.split('vimeo.com/')[1]?.split('/')[0];
    return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
  }
  
  return url;
};

export default function NurseryDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [nursery, setNursery] = useState<Nursery | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchNursery = async () => {
      try {
        console.log('🔍 Fetching nursery with slug:', slug);
        const response = await nurseryService.getBySlug(slug);
        console.log('📦 API Response:', response);
        
        if (response.success && response.data) {
          console.log('✅ Setting nursery data:', response.data);
          const nurseryData = (response.data as any).data || response.data;
          setNursery(nurseryData);
          
          // Fetch reviews for this nursery
          fetchReviews(nurseryData.id);
        } else {
          console.log('❌ No nursery data in response');
          toast.error("Nursery not found");
        }
      } catch (error) {
        console.error("❌ Failed to fetch nursery:", error);
        toast.error("Failed to load nursery details");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchNursery();
    }
  }, [slug]);

  const fetchReviews = async (nurseryId: string) => {
    setLoadingReviews(true);
    try {
      const response = await reviewService.getNurseryReviews(nurseryId);
      if (response.success && response.data) {
        const reviewsData = Array.isArray(response.data) ? response.data : [];
        setReviews(reviewsData);
      }
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    } finally {
      setLoadingReviews(false);
    }
  };

  if (loading) {
    return (
      <>
        <MiniNav />
        <Header />
        <div className="w-full mx-auto py-10 px-24 shadow-xl bg-white">
          <p className="text-center text-gray-500">Loading nursery details...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!nursery) {
    return (
      <>
        <MiniNav />
        <Header />
        <div className="w-full mx-auto py-10 px-24 shadow-xl bg-white">
          <p className="text-center text-gray-500">Nursery not found</p>
          <p className="text-center text-sm text-gray-400 mt-2">Slug: {slug}</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
     <MiniNav/>
    <Header/>
    <div className="w-full mx-auto py-10 px-24 shadow-xl bg-white">
      {/* HEADER SECTION */}
      <div className="bg-white p-4 rounded-[6px] shadow-[0_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-2xl font-medium uppercase">{nursery?.name || 'Nursery Name'}</h1>
            <p className="text-gray-700 mb-2">{nursery?.address || ''}, {nursery?.city || ''}</p>
            <div className="flex mb-4">
              <Star className="text-yellow-500 fill-yellow-500" size={16} />
              <span className="text-gray-600 ml-2">({nursery.reviewCount || 0} reviews)</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-secondary hover:bg-secondary/90 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-secondary hover:bg-secondary/90 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        {/* IMAGES SLIDER - 2 per row */}
        <div className="mb-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={3}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="rounded-lg nursery-slider pb-12"
            style={{
              '--swiper-navigation-color': '#ffffff',
              '--swiper-pagination-color': '#044A55',
            } as React.CSSProperties}
          >
            {nursery.images && nursery.images.length > 0 ? (
              nursery.images.map((image: string, index: number) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="h-96 w-full object-cover rounded-lg"
                    alt={`${nursery.name} - Image ${index + 1}`}
                  />
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide>
                  <img
                    src="/images/slug-1.png"
                    className="h-96 w-full object-cover rounded-lg"
                    alt={nursery.name}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/slug-2.png"
                    className="h-96 w-full object-cover rounded-lg"
                    alt={`${nursery.name} - Image 2`}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/slug-3.png"
                    className="h-96 w-full object-cover rounded-lg"
                    alt={`${nursery.name} - Image 3`}
                  />
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>

        {/* Video Section */}
        {nursery.videoUrl && (
          <div className="mt-6 mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-[#044A55] font-heading">VIDEO TOUR</h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src={getEmbedUrl(nursery.videoUrl)}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
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
                    {nursery.aboutUs || nursery.description || "A warm, nurturing environment where children thrive through play-based learning and outdoor exploration."}
                  </p>
                </div>

                {/* PHILOSOPHY */}
                {nursery.philosophy && (
                  <div>
                    <h2 className="text-xl mb-2 text-[#044A55] font-medium text-[34px]">OUR PHILOSOPHY</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {nursery.philosophy}
                    </p>
                  </div>
                )}

                {/* FACILITIES & FEATURES */}
                <div>
                  <h2 className="mb-2 text-[#044A55] font-medium text-[34px]">FACILITIES & FEATURES</h2>
                  <div className="grid grid-cols-2 gap-y-3 text-gray-700">
                    {nursery.facilities && nursery.facilities.length > 0 ? (
                      nursery.facilities.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="text-blue-500" size={18} /> {item}
                        </div>
                      ))
                    ) : (
                      ["Large outdoor play area", "Hot nutritious meals", "CCTV in main rooms", "Extended hours available", "SEND support", "Forest school sessions"].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="text-blue-500" size={18} /> {item}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* FEES */}
                <div>
                  <h2 className="mb-2 text-[#044A55] font-medium text-[34px]">FEES & FUNDING</h2>
                  <div className="space-y-3 text-gray-700">
                    {nursery.fees && typeof nursery.fees === 'object' ? (
                      <>
                        {nursery.fees['0-2 years'] && (
                          <div className="flex justify-between border-b-2 pb-2 border-gray-200">
                            <strong>0-2 years:</strong>
                            <div className="flex flex-col text-end">
                              <span className="ml-2 text-secondary font-bold text-[20px] pb-2">{nursery.fees['0-2 years'].fullTime}</span>
                              <span className="ml-2 text-foreground font-sans font-medium">Part-time: {nursery.fees['0-2 years'].partTime}</span>
                            </div>
                          </div>
                        )}
                        {nursery.fees['2-3 years'] && (
                          <div className="flex justify-between border-b-2 pb-2 border-gray-200">
                            <strong>2-3 years:</strong>
                            <div className="flex flex-col text-end">
                              <span className="ml-2 text-secondary font-bold text-[20px] pb-2">{nursery.fees['2-3 years'].fullTime}</span>
                              <span className="ml-2 text-foreground font-sans font-medium">Part-time: {nursery.fees['2-3 years'].partTime}</span>
                            </div>
                          </div>
                        )}
                        {nursery.fees['3-5 years'] && (
                          <div className="flex justify-between border-b-2 pb-2 border-gray-200">
                            <strong>3-5 years:</strong>
                            <div className="flex flex-col text-end">
                              <span className="ml-2 text-secondary font-bold text-[20px] pb-2">{nursery.fees['3-5 years'].fullTime}</span>
                              <span className="ml-2 text-foreground font-sans font-medium">Part-time: {nursery.fees['3-5 years'].partTime}</span>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between border-b-2 pb-2 border-gray-200">
                          <strong>0-2 years:</strong>
                          <div className="flex flex-col text-end">
                            <span className="ml-2 text-secondary font-bold text-[20px] pb-2">£950/month</span>
                            <span className="ml-2 text-foreground font-sans font-medium">Part-time: £550/month</span>
                          </div>
                        </div>
                      </>
                    )}
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
                    <Button 
                      onClick={() => {
                        const params = new URLSearchParams({
                          nurseryId: nursery.id,
                          nurseryName: nursery.name,
                          nurserySlug: nursery.slug,
                          nurseryAddress: nursery.address || '',
                          nurseryCity: nursery.city || '',
                          nurseryPostcode: nursery.postcode || '',
                        });
                        window.location.href = `/submit-review?${params.toString()}`;
                      }}
                      className="bg-primary text-white hover:bg-transparent hover:text-primary border-2 hover:border-primary border-tranparent cursor-pointer px-6 py-5"
                    >
                      Write a Review
                    </Button>
                  </div>
                  
                  {loadingReviews ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">Loading reviews...</p>
                    </div>
                  ) : reviews.length === 0 ? (
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                      <p className="text-gray-500 text-lg">No reviews yet. Be the first to review this nursery!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {reviews.map((review) => {
                        const displayName = review.initialsOnly 
                          ? `${review.firstName} ${review.lastName}`
                          : `${review.firstName} ${review.lastName}`;
                        
                        const timeAgo = new Date(review.createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        });

                        const avatarInitials = `${review.firstName.charAt(0)}${review.lastName.charAt(0)}`.toUpperCase();
                        
                        return (
                          <div key={review.id} className="border-b bg-[#F9F9F9] p-4 rounded-[6px]">
                            <div className="flex justify-between gap-4 items-center mb-4">
                              <div className="flex gap-4 items-center">
                                <div className="flex justify-center items-center bg-secondary rounded-full w-14 h-14">
                                  <span className="text-xl text-white font-heading font-normal tracking-[2px]">
                                    {avatarInitials}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-medium text-[24px] text-[#044A55] tracking-[1px] font-heading">{displayName}</span>
                                  <span className="text-gray-500 text-sm font-sans font-medium">{timeAgo}</span>
                                </div>
                                {review.isVerified && (
                                  <div className="bg-secondary rounded-2xl px-4 py-1 text-white text-sm">
                                    verified
                                  </div>
                                )}
                              </div>
                              <div>
                                <div className="flex">
                                  {Array.from({ length: 5 }, (_, i) => (
                                    <Star 
                                      key={i} 
                                      className={i < review.overallRating ? "text-yellow-500" : "text-gray-300"} 
                                      size={16} 
                                      fill="currentColor" 
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            {review.connection && (
                              <h2 className="font-heading text-[22px] font-medium text-[#1F2937] mb-3">{review.connection}</h2>
                            )}
                            <p className="text-gray-600 font-sans text-[18px]">{review.content}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
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
              <p className="text-[15px] font-medium font-sans text-muted-foreground">
                {nursery.address}, {nursery.city}, {nursery.postcode}
              </p>
            </div>
            {nursery.openingHours && typeof nursery.openingHours === 'object' && (
              <div className="flex items-center gap-4 mb-6">
                <Clock className="text-secondary" />
                <p className="text-[15px] font-medium font-sans text-muted-foreground">
                  {nursery.openingHours.openingTime && nursery.openingHours.closingTime 
                    ? `${nursery.openingHours.openingTime} - ${nursery.openingHours.closingTime}`
                    : 'Monday - Friday: 7:30 AM - 6:30 PM'
                  }
                </p>
              </div>
            )}
            {nursery.phone && (
              <div className="flex items-center gap-4 mb-6">
                <Phone className="text-secondary" />
                <p className="text-[15px] font-medium font-sans text-muted-foreground">{nursery.phone}</p>
              </div>
            )}
            {nursery.email && (
              <div className="flex items-center gap-4 mb-6">
                <Mail className="text-secondary" />
                <p className="text-[15px] font-medium font-sans text-muted-foreground">{nursery.email}</p>
              </div>
            )}
          </div>

          <Button className="mt-5 w-full bg-primary hover:bg-blue-600 rounded-[6px] hover:text-primary hover:bg-transparent cursor-pointer border-2 border-primary transition-all duration-300">
            Book a Visit
          </Button>
        </Card>
      </div>
    </div>
    <Footer />
    </>
  );
}

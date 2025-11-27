'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

const SubmitReviewForm = () => {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className='bg-white shadow-[0_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]'>
    <div className="w-full max-w-4xl mx-auto py-10 px-6 ">
      <div className="flex flex-col gap-6">
        {/* Review Form Card */}
        <div className="bg-white p-6 shadow-[0_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-[6px] p-6">
        
          
          <form className="space-y-4 ">
            {/* Select Nursery */}
            <div className="space-y-2">
              <Label htmlFor="nursery" className="text-[22px] font-heading font-medium">
                Select Nursery
              </Label>
              <select
                id="nursery"
                className="w-full px-4 py-2 border h-12 border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-secondary bg-white"
              >
                <option value="">Choose a nursery...</option>
                <option value="sunshine">Sunshine Nursery</option>
                <option value="bright-beginnings">Bright Beginnings</option>
                <option value="little-stars">Little Stars Nursery</option>
              </select>
            </div>

            {/* Overall Rating */}
            <div className="space-y-2">
              <Label htmlFor="rating" className="text-[22px] font-heading font-medium">
                Overall Rating <span className="text-red-500">*</span>
              </Label>
              <select
                id="rating"
                required
                className="w-full px-4 py-2 border h-12 border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-secondary bg-white"
              >
                <option value="">Select rating...</option>
                <option value="5">5 Stars - Excellent</option>
                <option value="4">4 Stars - Very Good</option>
                <option value="3">3 Stars - Good</option>
                <option value="2">2 Stars - Fair</option>
                <option value="1">1 Star - Poor</option>
              </select>
            </div>

            {/* Review Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-[22px] font-heading font-medium">
                Review Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                type="text"
                required
                placeholder="Summarize your experience"
                className="w-full h-12"
              />
            </div>

            {/* Your Review */}
            <div className="space-y-2">
              <Label htmlFor="review" className="text-[22px] font-heading font-medium">
                Your Review <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="review"
                required
                placeholder="Share your experience with this nursery..."
                className="w-full h-12 min-h-[150px]"
              />
            </div>

            {/* Your Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[22px] font-heading font-medium">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full h-12"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[22px] font-heading font-medium">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full h-12"
              />
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-start gap-3 pt-4">
              <Checkbox
                id="confirm"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="confirm" className="text-sm leading-relaxed cursor-pointer">
                I confirm that this review is based on my own experience and is my genuine opinion. I 
                understand that my review will be publicly visible.
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg font-medium mt-6"
            >
              Submit Review
            </Button>
          </form>
        </div>

        {/* Review Guidelines Card */}
        <div className="bg-white shadow-[0_4px_4px_4px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] mt-8 rounded-[6px] p-6">
          <h2 className="text-2xl font-heading font-bold mb-4">Review Guidelines</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span>Be honest and constructive in your feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span>Focus on your personal experience with the nursery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span>Avoid offensive language or personal attacks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary mt-1">•</span>
              <span>Reviews are moderated and may take 24-48 hours to appear</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SubmitReviewForm;
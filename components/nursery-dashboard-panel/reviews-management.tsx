'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

// ✅ Status Badge Component
function StatusBadge({ status }: { status: string }) {
  const normalizedStatus = status.toLowerCase()
  const statusStyles: Record<string, string> = {
    published: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
  }

  const badgeStyle = statusStyles[normalizedStatus] || 'bg-gray-100 text-gray-700'

  return (
    <Badge className={`capitalize px-3 py-1 text-sm font-medium rounded-full ${badgeStyle}`}>
      {status}
    </Badge>
  )
}

export default function ReviewsOverview() {
  const stats = [
    {
      label: 'Average Rating',
      value: '4.5',
      stars: (
        <div className="flex items-center">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
          <Star className="w-5 h-5 text-gray-300" />
        </div>
      ),
    },
    { label: 'Total Reviews', value: '128' },
    { label: 'Pending Approval', value: '6' },
  ]

  const reviews = [
    {
      name: 'Sarah Johnson',
      timeAgo: '2 hours ago',
      rating: (
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      ),
      status: 'Published',
      desc: 'Great nursery! The staff is caring and the environment is clean.',
    },
    {
      name: 'Michael Lee',
      timeAgo: '5 hours ago',
      rating: (
        <div className="flex items-center">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
          <Star className="w-4 h-4 text-gray-300" />
        </div>
      ),
      status: 'Pending',
      desc: 'Good experience overall, but pickup time could be smoother.',
    },
    {
      name: 'Aisha Khan',
      timeAgo: '1 day ago',
      rating: (
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      ),
      status: 'Published',
      desc: 'My daughter loves going here every morning!',
    },
  ]

  return (
    <div className=" space-y-6 font-sans">
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow bg-white flex flex-col justify-between"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold font-sans text-[16px] text-gray-800">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-3xl font-semibold font-sans text-[36px] text-gray-900">
                {item.value}
              </span>
              {item.stars && item.stars}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Reviews */}
      <Card className="rounded-2xl shadow bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold font-sans text-foreground">
            Recent Reviews
          </CardTitle>
          <p className="text-sm text-gray-500">
            See the latest feedback from parents.
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col gap-2 hover:bg-gray-50 transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold font-sans text-foreground">{review.name}</h3>
                  <span className="text-xs text-gray-500">{review.timeAgo}</span>
                </div>
                <StatusBadge status={review.status} />
              </div>

              {review.rating}
              <p className="text-sm text-gray-500">{review.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

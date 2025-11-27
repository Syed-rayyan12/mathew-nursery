'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';

// Dummy data for mapping
const reviews = [
  {
    nursery: 'Little Learners Nursery',
    date: 'Oct 21, 2025',
    rating: '⭐ 4.5',
    status: 'Approved',
  },
  {
    nursery: 'Bright Minds Academy',
    date: 'Oct 15, 2025',
    rating: '⭐ 4.0',
    status: 'Pending',
  },
  {
    nursery: 'Happy Kids Corner',
    date: 'Oct 05, 2025',
    rating: '⭐ 5.0',
    status: 'Approved',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Approved':
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
          {status}
        </Badge>
      );
    case 'Pending':
      return (
        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
          {status}
        </Badge>
      );
    default:
      return (
        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
          {status}
        </Badge>
      );
  }
};

const MyReviews = () => {
  return (
    <div className="">
      {/* Heading */}
      <div className="mb-6">
        <h2 className='text-secondary font-medium text-[48px] font-heading'><span className='text-foreground'>MY </span>REVIEWS</h2>
        <p className="text-muted-foreground">
          Manage your nursery reviews and feedback
        </p>
      </div>

      {/* Table */}
      <div className="rounded-md bg-white shadow p-4 ">
        <table className="w-full text-left  border-collapse">
          <thead className="bg-[#D1D5DB] ">
            <tr className="">
              <th className="px-6 py-3 text-lg tracking-[0.1rem] font-bold font-heading text-foreground ">
               NURSERY
              </th>
              <th className="px-6 py-3 text-lg tracking-[0.1rem] font-bold font-heading text-foreground ">
               DATE
              </th>
              <th className="px-6 py-3 text-lg tracking-[0.1rem] font-bold font-heading text-foreground ">
                RATING
              </th>
              <th className="px-6 py-3 text-lg tracking-[0.1rem] font-bold font-heading text-foreground ">
                STATUS
              </th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((review, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">{review.nursery}</td>
                <td className="px-6 py-4">{review.date}</td>
                <td className="px-6 py-4">{review.rating}</td>
                <td className="px-6 py-4">{getStatusBadge(review.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;

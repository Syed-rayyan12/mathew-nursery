"use client"

import React from 'react'
import { Input } from '../ui/input'
import { MapPin, Star, Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import AddNurseryModal from '../sharedComponents/add-nursery-modal'
import { useRouter } from 'next/navigation'

export default function ManageNursery() {
  const [openModal, setOpenModal] = React.useState(false)

   const router = useRouter();
  // Dummy nursery data
  const nurseries = [
    { id: 1, name: 'Sunshine Nursery', location: 'London, UK', rating: '4.5 /6', img: '/images/list 1.png' },
    { id: 2, name: 'LITTLE STARS ACADEMY', location: 'London, UK', rating: '4.5 /6', img: '/images/list 2.png' },
    { id: 3, name: 'RAINBOW KIDS CENTER', location: 'London, UK', rating: '4.5 /6', img: '/images/list 3.png' },
    { id: 4, name: 'RAINBOW KIDS CENTER', location: 'London, UK', rating: '4.5 /6', img: '/images/list 4.png' },
  ]

  return (
    <>
      <div>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='text-secondary font-medium text-[48px] font-heading'><span className='text-foreground'>MANAGE</span> NURSERY</h2>
            <p>Manage your saved nurseries and compare options</p>
            <div className='pt-4'>
              <Input placeholder='Search your shortlisted nurseries...' className='w-full rounded-md h-9 bg-white' />
            </div>
          </div>
          <Button onClick={() => setOpenModal(true)} className='bg-secondary hover:bg-none'>
            Add New Nursery
          </Button>
        </div>

        <div className='flex gap-4 '>
          {nurseries.map(nursery => (
            <div key={nursery.id} className='bg-white rounded-md p-3 mt-6 flex flex-col gap-4'>
              <img src={nursery.img} alt={nursery.name} />
              <div className='flex flex-col gap-3'>
                <h3 className='text-xl font-medium font-heading'>{nursery.name}</h3>
                <div className='flex items-center gap-2'>
                  <MapPin className='size-4' />
                  <span>{nursery.location}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Star className='size-4' />
                  <span>{nursery.rating}</span>
                </div>
                <div className='flex gap-3 mt-3 justify-between items-center'>
                  <button onClick={() => router.push("/nursery-dashboard/nursery-profile")} className='bg-secondary text-primary-foreground rounded-md px-9 py-2'>View profile</button>
                  <button className='border border-gray-400 text-foreground rounded-md px-2 py-2'>
                    <Trash2 className='w-5 h-5' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddNurseryModal open={openModal} onOpenChange={setOpenModal} />
    </>
  )
}
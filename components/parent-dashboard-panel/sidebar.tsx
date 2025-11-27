// app/parent-dashboard/components/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Sidebar = () => {
  const links = [
   
    { name: 'My Shortlisted', href: '/parent-dashboard' },
    { name: 'Recently Viewed', href: '/parent-dashboard/recently-viewed' },
    { name: 'My Reviews', href: '/parent-dashboard/my-reviews' },
    { name: 'Account Settings', href: '/parent-dashboard/account-settings' },
    { name: 'Help & Support', href: '/parent-dashboard/help-support' },
  ];
    const pathname = usePathname()

  return (
    <aside className="w-64 bg-white rounded-2xl shadow-md p-6 m-6 flex flex-col flex-shrink-0">
      <img src="/images/logo.png" className='flex justify-start w-50 object-cover' alt="" />
      <nav className="flex flex-col gap-2 mt-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
             className={`px-4 py-2  rounded-lg transition ${
              pathname === link.href
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

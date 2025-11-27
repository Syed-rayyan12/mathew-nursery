'use client';
import Sidebar from '@/components/nursery-admin-panel/sidebar';
import Header from '@/components/parent-dashboard-panel/header';
import React from 'react';

export default function DashboardLayout({ children }  : { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="pr-6 py-6 flex-1 overflow-y-auto">
          {children} {/* ✅ This is what you want */}
        </main>
      </div>
    </div>
  );
}

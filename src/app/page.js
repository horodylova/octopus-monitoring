'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('./components/Dashboard'), { ssr: false });

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <Dashboard />
    </div>
  );
}

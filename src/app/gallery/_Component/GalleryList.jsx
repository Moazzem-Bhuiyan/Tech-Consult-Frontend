'use client';
import { AlertCircle, ChevronLeft, ChevronRight, Wrench, Zap } from 'lucide-react';
import React from 'react';
import GellaryCard from './GellaryCard';

const services = [
  {
    id: 1,
    title: 'Residential Services',
    description:
      'Complete electrical solutions for your home including wiring, lighting, outlets, and upgrades.',
    icon: Wrench,
    image: '/images/residential.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Residential Services',
    description:
      'Complete electrical solutions for your home including wiring, lighting, outlets, and upgrades.',
    icon: Wrench,
    image: '/images/commercial.jpg',
  },
  {
    id: 3,
    title: 'Commercial Electrical',
    description:
      'Professional electrical services for businesses, office spaces, and commercial facilities.',
    icon: Zap,
    image: '/images/emergency.jpg',
  },
  {
    id: 4,
    title: 'Emergency Repairs',
    description:
      '24/7 emergency electrical repair services to keep your home or business safe and secure.',
    icon: AlertCircle,
    image: '/images/emergency.jpg',
  },
  {
    id: 5,
    title: 'Residential Services',
    description:
      'Complete electrical solutions for your home including wiring, lighting, outlets, and upgrades.',
    icon: Wrench,
    image: '/images/emergency.jpg',
  },
  {
    id: 6,
    title: 'Commercial Electrical',
    description:
      'Professional electrical services for businesses, office spaces, and commercial facilities.',
    icon: Zap,
    image: '/images/commercial.jpg',
  },
  {
    id: 7,
    title: 'Emergency Repairs',
    description:
      '24/7 emergency electrical repair services to keep your home or business safe and secure.',
    icon: AlertCircle,
    image: '/images/residential.jpg',
  },
];

const GalleryList = () => {
  return (
    <div className="mx-auto !space-y-20 !mt-[80px]">
      {/* Regular Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-10">
        {services?.map((service) => (
          <GellaryCard key={service.id} service={service} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center !gap-4 !pt-4">
        <button
          className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-neutral-400 text-sm">
          Page <span className="text-white">1</span> of 10
        </span>

        <button
          className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GalleryList;

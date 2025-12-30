'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useState } from 'react';
import useGetAllService from '@/Hooks/UsegetAllService';
import { EmptyOutline } from '@/component/shared/Emty/Emty';
import { SkeletonCarCard } from '@/component/shared/SkeletonCard/SkeletonCard';

export default function AllServices() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const { services, totalPages, loading, error } = useGetAllService({
    limit,
    page: currentPage,
  });
  const featuredService = services?.[0];
  const regularServices = services.slice(1) || [];
  if (loading) {
    return (
      <div>
        <SkeletonCarCard />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-10 !mt-10">
          <SkeletonCarCard />
          <SkeletonCarCard />
          <SkeletonCarCard />
        </div>
      </div>
    );
  }

  if (!services?.length) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-300px)]">
        <EmptyOutline title={'Service'} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="mx-auto md:!space-y-20 !space-y-10 !w-full  ">
      {/* Featured Service Card */}
      {featuredService && <ServiceCard service={featuredService} featured />}

      {/* Regular Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-10">
        {regularServices?.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center !gap-4 !pt-4">
        <button
          className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors disabled:opacity-50"
          aria-label="Previous page"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-neutral-400 text-sm">
          Page <span className="text-gray-500">{currentPage}</span> of {totalPages}
        </span>

        <button
          className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors disabled:opacity-50"
          aria-label="Next page"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

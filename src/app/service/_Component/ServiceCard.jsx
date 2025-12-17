'use client';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import AnimateTextOnHover from '@/component/AnimateTextOnHover/AnimateTextOnHover';
import { ArrowRight, Server } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ServiceCard({ service, featured = false }) {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/service/${id}`);
  };

  if (featured) {
    return (
      <div className="relative overflow-hidden rounded-2xl group cursor-pointer !mt-20 min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src={service.images?.[0] || '/placeholder.svg'}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="relative !p-8 min-h-[400px] flex flex-col justify-between">
          <div className="w-12 h-12 rounded-full bg-[#50BAD3] flex items-center justify-center">
            <Server className="w-6 h-6 text-white" />
          </div>

          <div className="!space-y-3">
            <Animatetext x={-20} duration={1}>
              {' '}
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>{' '}
            </Animatetext>
            <Animatetext x={20} duration={1}>
              {' '}
              <p className="text-neutral-300 text-sm leading-relaxed">{service.description}</p>
            </Animatetext>

            <button
              onClick={() => handleClick(service.id)}
              className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all cursor-pointer"
            >
              <AnimateTextOnHover> Read More</AnimateTextOnHover>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl group cursor-pointer group h-[300px]">
      <div className="absolute inset-0">
        <Image
          src={service.images?.[0] || '/placeholder.svg'}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      </div>

      <div className="relative !p-6 min-h-[300px] h-[300px] flex flex-col justify-between">
        <div className="w-10 h-10 rounded-full bg-[#50BAD3] flex items-center justify-center">
          <Server className="group hover:rotate-90 transform-3d transition-all w-5 h-5 text-white" />
        </div>

        <div className="!space-y-2">
          <Animatetext x={-20} duration={1}>
            {' '}
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>{' '}
          </Animatetext>
          <Animatetext x={20} duration={1}>
            {' '}
            <p className="text-neutral-300 text-sm leading-relaxed">{service.description}</p>
          </Animatetext>

          <div className="flex items-center justify-between">
            <button
              onClick={() => handleClick(service._id)}
              className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all !pt-2 cursor-pointer"
            >
              <AnimateTextOnHover> Read More</AnimateTextOnHover>
              <ArrowRight className="w-4 h-4" />
            </button>

            <h1 className="text-2xl font-semibold">
              <span className="text-[#ffffff]">$</span>{' '}
              <span className="text-white">
                {service.initialPrice} - $ {service.finalPrice}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

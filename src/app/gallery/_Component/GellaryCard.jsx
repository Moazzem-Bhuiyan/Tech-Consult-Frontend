'use client';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import AnimateTextOnHover from '@/component/AnimateTextOnHover/AnimateTextOnHover';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function GellaryCard({ service }) {
  return (
    <div className="relative overflow-hidden rounded-2xl group cursor-pointer group h-[350px]">
      <div className="absolute inset-0">
        <Image
          src={service.image || '/placeholder.svg'}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      </div>

      <div className="relative !p-6 min-h-[300px] h-[300px] flex flex-col justify-between">
        <h1></h1>
        <div className="!space-y-2">
          <Animatetext x={-20} duration={1}>
            {' '}
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>{' '}
          </Animatetext>
          <Animatetext x={20} duration={1}>
            {' '}
            <p className="text-neutral-300 text-sm leading-relaxed">{service.description}</p>
          </Animatetext>
        </div>
      </div>
    </div>
  );
}

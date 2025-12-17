import Animatetext from '@/component/AnimatedText/AnimatedText';
import { Zap, Settings } from 'lucide-react';
import Image from 'next/image';

export default function FeatureSection({ initialService }) {
  return (
    <section className="w-full !px-4 !py-12 !md:py-16">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Image Card */}
          <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[490px] lg:row-span-2">
            <Image
              src={initialService?.images?.[0]}
              alt="Office workspace with electrical equipment"
              fill
              className="object-cover hover:scale-105 transform ease-linear duration-300"
            />
          </div>

          {/* Middle Column - Two Stacked Cards */}
          <div className="flex flex-col gap-4">
            {/* Why Our Services Card */}
            <div className="flex flex-col gap-3 rounded-2xl bg-[#1a1a1a] hover:bg-gradient-to-r transform-3d hover:from-[#156A7E] hover:to-[#26C0E4] from-[#156A7E] to-[#26C0E4] hover:text-white transform ease-linear duration-300 hover:scale-105   !p-6 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#156A7E] ">
                <Zap className="h-5 w-5 text-white" fill="white" />
              </div>
              <Animatetext x={-20} duration={1}>
                {' '}
                <h3 className="text-xl font-semibold">Overview</h3>
              </Animatetext>
              <Animatetext x={20} duration={1}>
                <p className="text-sm leading-relaxed text-gray-400 hover:text-white transform ease-linear duration-300">
                  {initialService?.description}
                </p>
              </Animatetext>
            </div>

            {/* Service Process Card */}
            <div className="flex flex-col gap-3 rounded-2xl bg-gradient-to-r from-[#156A7E] to-[#26C0E4] hover:bg-black transform ease-linear duration-300 hover:scale-105   !p-6 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Settings className="h-5 w-5 text-[#156A7E]" />
              </div>
              <Animatetext x={-20} duration={1}>
                {' '}
                <h3 className="text-xl font-semibold">Starting Price</h3>
              </Animatetext>

              {/* Price Range */}
              <p className="text-lg font-semibold">
                ${initialService?.initialPrice || 'N/A'} - ${initialService?.finalPrice || 'N/A'}
              </p>

              {/* Description */}
              <Animatetext x={20} duration={1}>
                <p className="text-sm leading-relaxed">
                  Prices vary based on service complexity, selected options, or AWS services. You
                  can book this service at the starting price of $
                  {initialService?.initialPrice || 'N/A'}.
                </p>
              </Animatetext>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[490px] lg:row-span-2">
            <Image
              src={initialService?.images?.[1]}
              alt="Electrician performing detailed repair work"
              fill
              className="object-cover hover:scale-105 transform ease-linear duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

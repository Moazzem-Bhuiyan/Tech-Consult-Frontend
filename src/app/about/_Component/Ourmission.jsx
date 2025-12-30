'use client';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { ArrowRight } from 'lucide-react';
import OurExpertise from './OurExpertise';
import CloudArchitectureExcellence from './CloudArchitectureExcellence';
import MigrationMethodologies from './migration-methodologies';
import { useRouter } from 'next/navigation';

const Ourmission = () => {
  const router = useRouter();
  return (
    <div className="md:min-h-[700px] bg-cover bg-center bg-no-repeat !bg-[url('/images/sectionBg.png')] md:!mt-20">
      <ResponsiveContainer>
        <div className="md:flex justify-center items-center md:min-h-[70vh] gap-10">
          <div className="flex-1 !order-2 md:order-2  relative !bg-[url('/images/aboutusImage.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl !min-h-[55vh]">
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-3xl "></div>

            <button
              className="flex absolute border border-white !mt-[250px] !bg-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white gap-5 !justify-between items-center lg:hover-bubble rounded-full text-lg whitespace-nowrap !px-4 !py-1 z-10"
              id="request-quote-btn"
              onClick={() => {
                router.push('/service');
              }}
            >
              Book Now
              <div className="rounded-full  bg-gradient-to-r from-[#FF8E53] to-[#FF6B6B] !p-[6px]">
                <ArrowRight size={20} className="-rotate-45" color="#fff" />
              </div>
            </button>
          </div>
          <div className="flex-1 !order-1 md:order-1 text-center md:text-left md:!space-y-5 !mt-10 md:!md-0">
            <h1 className="text-primary  uppercase font-semibold">OUR MISSION</h1>
            <Animatetext y={-20} duration={1}>
              <h1 className="md:text-5xl text-3xl !mt-5 font-semibold">Expert Service </h1>
            </Animatetext>
            <div className="md:flex md:gap-5">
              <Animatetext x={-20} duration={1}>
                <h1 className="md:text-5xl text-3xl !mt-5 font-semibold">With</h1>
              </Animatetext>
              <Animatetext y={20} duration={1}>
                <h1 className="md:text-5xl text-3xl !mt-5 font-semibold text-primary">
                  Afdorabble Price{' '}
                </h1>
              </Animatetext>
            </div>
            <Animatetext x={-20} duration={1}>
              <p className="!mt-5 text-sm md:text-lg text-left">
                To serve as a trusted partner for businesses navigating the modern data landscape,
                delivering comprehensive, tailored solutions—from architecture and cloud migration
                to analytics—that maximize efficiency and drive sustainable growth
              </p>
            </Animatetext>
          </div>
        </div>
      </ResponsiveContainer>
      {/* our expertise */}
      <div className="md:flex justify-center items-center  gap-10">
        <div>
          <OurExpertise />
          <CloudArchitectureExcellence />
          <MigrationMethodologies />
        </div>
      </div>
    </div>
  );
};

export default Ourmission;

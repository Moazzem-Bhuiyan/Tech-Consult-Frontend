import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { Zap, Settings } from 'lucide-react';
import Image from 'next/image';

export default function OurLeadership() {
  return (
    <ResponsiveContainer className={'flex justify-center'}>
      <section className="w-full !px-4 !py-12 !md:py-16 !space-y-5">
        <div className="!my-10 !space-y-5">
          <Animatetext>
            <h1 className="text-3xl font-semibold  md:text-5xl text-center">Our Leadership</h1>
          </Animatetext>
          <Animatetext>
            <h1 className=" text-center">
              Expert electrical wiring services for residential buildings to ensure safety,
              efficiency, and compliance with all electrical codes.
            </h1>
          </Animatetext>
        </div>
        <div className="mx-auto ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Left Image Card */}
            <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[490px] lg:row-span-2">
              <Image
                src="/images/service1.png"
                alt="Office workspace with electrical equipment"
                fill
                className="object-cover hover:scale-105 transform ease-linear duration-300"
              />
            </div>

            {/* Middle Column - Two Stacked Cards */}
            <div className="flex flex-col gap-4">
              {/* Key Qualifications Card */}
              {/* <div className="flex flex-col gap-3 rounded-2xl bg-[#1a1a1a]   hover:bg-gradient-to-r from-[#156A7E] to-[#26C0E4] transform ease-linear duration-300 hover:scale-95   !p-6 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#156A7E] to-[#26C0E4] ">
                  <Zap className="h-5 w-5 text-white" fill="white" />
                </div>
                <Animatetext x={-20} duration={1}>
                  {' '}
                  <h3 className="text-xl font-semibold">Key Qualifications</h3>
                </Animatetext>
                <ul className="text-sm leading-relaxed text-gray-400 hover:text-white transform ease-linear duration-300">
                  <li>Master's Degree in Data Analytics</li>
                  <li>AWS Certified Solutions Architect - Professional</li>
                  <li>Oracle Certified Associate (OCA)</li>
                  <li>Extensive experience with 100TB+ enterprise environments</li>
                </ul>
              </div> */}

              {/* Service Process Card */}
              <div className="flex flex-col gap-3 rounded-2xl bg-gradient-to-r from-[#156A7E] to-[#26C0E4]  hover:bg-black transform ease-linear duration-300 hover:scale-95   !p-6 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <Settings className="h-5 w-5 text-[#26C0E4]" />
                </div>
                <Animatetext x={-20} duration={1}>
                  {' '}
                  <h3 className="text-xl font-semibold">Our Growth Vision</h3>
                </Animatetext>
                <Animatetext x={20} duration={1}>
                  <p className="text-sm leading-relaxed">
                    We lead with the core principles of integrity, expertise, and a commitment to
                    our clients' success. Our leadership is dedicated to fostering a culture of
                    technical excellence and transparent communication, ensuring that every
                    engagement is guided by a partnership mentality. We empower our teams to deliver
                    robust, secure, and future-ready data solutions that provide measurable value to
                    our clients.
                  </p>
                </Animatetext>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[490px] lg:row-span-2">
              <Image
                src="/images/service2.png"
                alt="Electrician performing detailed repair work"
                fill
                className="object-cover hover:scale-105 transform ease-linear duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </ResponsiveContainer>
  );
}

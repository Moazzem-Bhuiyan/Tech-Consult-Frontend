'use client';
import Animatetext from '@/component/AnimatedText/AnimatedText';

import { Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutusContainer = () => {
  const router = useRouter();
  return (
    <div>
      <div className='relative bg-[url("/images/aboutpagecontactbg.jpg")] bg-no-repeat bg-cover bg-center min-h-[450px] rounded-4xl !mt-10'>
        <div className="absolute inset-0 bg-black opacity-40 rounded-4xl z-10"></div>

        <button
          className="group gap-5 bg-gradient-to-r from-[#156A7E] to-[#26C0E4] w-[200px] hover:opacity-90 transition-all duration-300 font-semibold h-[50px] cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white !z-10 border flex justify-center items-center rounded-2xl 
        "
          onClick={() => {
            router.push('/contact');
          }}
        >
          <Send className="!ml-2 group-hover:rotate-45 ease-linear duration-300 group-hover:border-none" />
          Contact Us
        </button>
      </div>
      <Animatetext y={20} duration={1}>
        <h1 className=" md:text-center !text-wrap md:!w-[50%] text-lg !mx-auto !mt-20">
          With deep expertise in both traditional on-premises database platforms and cutting-edge
          cloud-native solutions, we guide businesses through the complexities of managing,
          optimizing, and migrating their critical data infrastructure. Our team works closely with
          clients to develop customized strategies that ensure seamless transitions, minimal
          downtime, and peak performance. Whether it's moving from Oracle, SQL Server, or MySQL to
          AWS, Azure, or Google Cloud, we prioritize scalability, security, and long-term
          efficiency.
        </h1>
      </Animatetext>
    </div>
  );
};

export default AboutusContainer;

import Animatetext from '@/component/AnimatedText/AnimatedText';
import CustomCountUp from '@/component/CustomCountUp/CustomCountUp';
import { Send } from 'lucide-react';
import React from 'react';
import Ourmission from './Ourmission';
import { OurTeam } from './OurTeam';
import ContactContainer from '@/app/contact/_Component/ContactContainer';

const AboutusContainer = () => {
  return (
    <div>
      <div className='relative bg-[url("/images/aboutpagecontactbg.png")] bg-no-repeat bg-cover bg-center min-h-[450px] rounded-4xl !mt-10'>
        <div className="absolute inset-0 bg-black opacity-40 rounded-4xl z-10"></div>

        <button
          className="group gap-5 bg-gradient-to-r from-[#156A7E] to-[#26C0E4] w-[200px] hover:opacity-90 transition-all duration-300 font-semibold h-[50px] cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white !z-10 border flex justify-center items-center rounded-2xl 
        "
        >
          <Send className="!ml-2 group-hover:rotate-45 ease-linear duration-300 group-hover:border-none" />
          Contact Us
        </button>
      </div>
      <Animatetext y={20} duration={1}>
        <h1 className=" md:text-center !text-wrap md:!w-[50%] text-lg !mx-auto !mt-20">
          Our team works closely with clients to develop customized migration strategies that ensure
          seamless transitions, minimal downtime, and optimized performance. Whether it's moving
          from Oracle, SQL Server, PostgreSQL, or MySQL to AWS or other cloud platforms, we
          prioritize scalability, security, and long-term efficiency.
        </h1>
      </Animatetext>
    </div>
  );
};

export default AboutusContainer;

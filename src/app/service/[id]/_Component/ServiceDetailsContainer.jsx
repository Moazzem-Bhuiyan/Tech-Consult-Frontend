import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import FeatureSection from './ServiceFeatureSection';
import WhyChooseSection from './WhyUsSection';
import { BillingDetailsFormModal } from './BillingDetailsFormModal';

const ServiceDetailsContainer = ({ initialService: data, id }) => {
  const initialService = data?.data;
  return (
    <div>
      <ResponsiveContainer className={' md:!mt-[115px] !mt-20'}>
        <div className="flex-center min-h-[60vh] !w-full md:!p-10">
          <div className="!space-y-5">
            <Animatetext x={-20} duration={1}>
              <h3 className="mdtext-lg text-primary text-center font-semibold uppercase">
                Service
              </h3>
            </Animatetext>
            <Animatetext x={20} duration={1}>
              <h3 className="md:text-5xl text-3xl text-center font-semibold">
                {initialService?.title}
              </h3>
            </Animatetext>
            <Animatetext x={-20} duration={1}>
              <h3 className="  text-center text-gray-700 ">{initialService?.subTitle}</h3>
            </Animatetext>

            {/* ⬇⬇⬇ Checkout opens modal */}
            <BillingDetailsFormModal initialService={initialService}>
              <div>
                <button
                  className="flex absolute group !mt-[50px] !bg-gradient-to-r from-[#156A7E] to-[#26C0E4] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white gap-5 !justify-between items-center lg:hover-bubble rounded-full text-lg whitespace-nowrap !px-4 !py-1 z-10"
                  id="request-quote-btn"
                >
                  Book this service
                  <div className=" group-hover:rotate-45 transform ease-linear duration-300 rounded-full  bg-gradient-to-r from-[#ffff] to-[#ffff] !p-[6px]">
                    <ArrowRight size={20} className="-rotate-45" color="#156A7E" />
                  </div>
                </button>
              </div>
            </BillingDetailsFormModal>
          </div>
          {/* featured services */}
          <FeatureSection initialService={initialService} />
        </div>
      </ResponsiveContainer>

      {/*================== why choose us============= */}
      <div className=' bg-[url("/images/sectionBg.png")] bg-no-repeat bg-cover bg-center min-h-[450px]'>
        <ResponsiveContainer>
          <WhyChooseSection />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ServiceDetailsContainer;

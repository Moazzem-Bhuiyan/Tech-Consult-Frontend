import Animatetext from '@/component/AnimatedText/AnimatedText';
import CustomCountUp from '@/component/CustomCountUp/CustomCountUp';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function AboutSection() {
  return (
    <div className="min-h-[700px] bg-cover bg-center bg-no-repeat !bg-[url('/images/sectionBg.png')]">
      <ResponsiveContainer>
        <div className="md:flex justify-center items-center min-h-[70vh]">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-primary uppercase font-semibold md:!mt-0 !mt-5"></h1>
            <Animatetext y={-20} duration={1}>
              <h1 className="md:text-5xl text-3xl md:!mt-5 font-semibold ">
                Why Choose Our <span className="text-[#0F8BA8]">Database</span>{' '}
              </h1>
            </Animatetext>
            <div className="flex md:gap-5 gap-2">
              <Animatetext x={-20} duration={1}>
                <h1 className="md:text-5xl text-3xl md:!mt-5 text-[#0F8BA8] font-semibold">
                  Consulting
                </h1>
              </Animatetext>
              <Animatetext y={20} duration={1}>
                <h1 className="md:text-5xl text-3xl md:!mt-5 font-semibold ">Services? </h1>
              </Animatetext>
            </div>
            <Animatetext x={-20} duration={1}>
              <p className="!mt-5 text-left ">
                In today's rapidly evolving digital landscape, organizations need robust, scalable,
                and cost-effective database solutions. Our team delivers comprehensive database
                consulting with deep expertise across all major platforms and AWS cloud
                architecture, driving business transformation and operational excellence for
                enterprises worldwide.
              </p>
            </Animatetext>
            {/*------------- project and experience count--------  */}
          </div>
          <div className="flex-1 relative !bg-[url('/images/whyus.png')] bg-cover bg-center bg-no-repeat rounded-3xl !min-h-[55vh]">
            {/* overlay */}
            {/* <div className="absolute inset-0 bg-black opacity-40 rounded-3xl "></div> */}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}

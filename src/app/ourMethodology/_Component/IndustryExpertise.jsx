import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { HandPlatter } from 'lucide-react';
import React from 'react';

export default function IndustryExpertise() {
  const features = [
    {
      icon: HandPlatter,
      title: 'Financial Services',
      description:
        'Cxpert solutions ensuring regulatory compliance and high availability for financial institutions.',
    },
    {
      icon: HandPlatter,
      title: 'Healthcare',
      description:
        'HIPAA-compliant cloud solutions with robust security for patient data protection and operational efficiency.',
    },
    {
      icon: HandPlatter,
      title: 'E-commerce',
      description:
        'Scalable database solutions handling high-volume transactions with real-time analytics and performance optimization.',
    },
    {
      icon: HandPlatter,
      title: 'Manufacturing',
      description:
        'IoT-integrated database systems for supply chain optimization and predictive maintenance analytics.',
    },
    {
      icon: HandPlatter,
      title: 'Technology',
      description:
        'High-performance database architectures supporting rapid scaling and innovative tech product development.',
    },
    {
      icon: HandPlatter,
      title: 'Education',
      description:
        'Secure, scalable learning management systems with robust data analytics for educational institutions.',
    },
  ];

  return (
    <div>
      <>
        <div>
          <section className=" !py-16 !px-4 !sm:px-6 !lg:px-8 !mt-[100px]">
            <div className=" mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left side - Heading */}
                <div>
                  <Animatetext x={20} duration={1}>
                    {' '}
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 !mb-6">
                      Database Platform Mastery
                    </h2>
                  </Animatetext>
                  <Animatetext x={-20} duration={1}>
                    {' '}
                    <p className="text-gray-600 text-lg">
                      Our team brings deep expertise across all major database platforms:
                    </p>
                  </Animatetext>
                </div>

                {/* Right side - Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6  !p-6">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex flex-col bg-primary/5 hover:bg-primary/40 rounded-2xl !p-5 transform ease-linear duration-500 cursor-pointer hover:scale-105"
                      >
                        <div className="w-12  transform ease-linear duration-500 h-12 rounded-full bg-gradient-to-r from-[#156A7E] to-[#26C0E4] flex items-center justify-center !mb-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Animatetext x={-20} duration={1}>
                          {' '}
                          <h3 className="text-xl font-bold text-gray-900 !mb-2">
                            {feature.title}
                          </h3>{' '}
                        </Animatetext>
                        <Animatetext x={20} duration={1}>
                          {' '}
                          <p className="text-black  leading-relaxed">{feature.description}</p>
                        </Animatetext>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
}

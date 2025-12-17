import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { HandPlatter } from 'lucide-react';
import React from 'react';

export default function OurExpertise() {
  const features = [
    {
      icon: HandPlatter,
      title: 'Oracle',
      description:
        'Expertise in Oracle RAC, ASM, Exadata, Golden Gate, and Data Guard for enterprise-grade database solutions.',
    },
    {
      icon: HandPlatter,
      title: 'SQL Server',
      description:
        'Advanced solutions for Always On Availability Groups and Failover Clustering with high-performance optimization.',
    },
    {
      icon: HandPlatter,
      title: 'PostgreSQL',
      description: 'Zero-downtime migrations using advanced replication technologies',
    },
    {
      icon: HandPlatter,
      title: 'MySQL',
      description:
        'Mastery in replication, clustering, and performance optimization for robust web-scale applications.',
    },
  ];

  return (
    <div>
      <ResponsiveContainer>
        <div>
          <div className="!space-y-5 !my-20">
            <Animatetext x={-20} duration={1}>
              <h1 className="text-primary text-center uppercase font-semibold">Expertise</h1>
            </Animatetext>
            <Animatetext x={20} duration={1}>
              <h1 className="text-4xl text-center font-semibold">Our Expertise</h1>
            </Animatetext>

            <Animatetext y={-20} duration={1}>
              <p className="text-center text-sm text-gray-600">
                Deep mastery across all major database platforms and cloud architectures, driving
                seamless migrations and optimized performance.
              </p>
            </Animatetext>
          </div>
          <section className=" !py-16 !px-4 !sm:px-6 !lg:px-8">
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
      </ResponsiveContainer>
    </div>
  );
}

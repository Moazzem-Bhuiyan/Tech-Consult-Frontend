import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { Zap, Clock, Award, Headphones, HandPlatter } from 'lucide-react';

export default function Record() {
  const features = [
    {
      icon: HandPlatter,
      title: 'Certified Experts',
      description: '500+ databases successfully migrated and optimized',
    },
    {
      icon: HandPlatter,
      title: 'Timely Completion',
      description: 'Enterprise-scale expertise: Projects up to 100TB+ environments',
    },
    {
      icon: HandPlatter,
      title: 'Quality Materials',
      description: 'Multi-platform mastery: Oracle, SQL Server, PostgreSQL, MySQL',
    },
    {
      icon: HandPlatter,
      title: '24/7 Support',
      description: 'Zero-downtime migrations using advanced replication technologies',
    },
    {
      icon: HandPlatter,
      title: '24/7 Support',
      description: 'AWS Advanced Consulting Partner status',
    },
    {
      icon: HandPlatter,
      title: '24/7 Support',
      description: 'Certified team with industry-leading credentials',
    },
  ];

  return (
    <div className=' bg-[url("/images/sectionBg.png")] bg-no-repeat bg-cover bg-center min-h-[450px]'>
      <ResponsiveContainer>
        <section className=" !py-16 !px-4 !sm:px-6 !lg:px-8">
          <div className=" mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Heading */}
              <div>
                <Animatetext y={-20} duration={1}>
                  {' '}
                  <p className="text-primary uppercase font-semibold !mb-4">Record</p>
                </Animatetext>
                <Animatetext x={20} duration={1}>
                  {' '}
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 !mb-6">
                    Our Track Records
                  </h2>
                </Animatetext>
                <Animatetext x={-20} duration={1}>
                  {' '}
                  <p className="text-gray-600 text-lg">
                    Proven Success in Transforming Enterprise Database Infrastructures with Over 500
                    Migrations
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
                      {/* <Animatetext x={-20} duration={1}>
                        {' '}
                        <h3 className="text-xl font-bold text-gray-900 !mb-2">
                          {feature.title}
                        </h3>{' '}
                      </Animatetext> */}
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
      </ResponsiveContainer>
    </div>
  );
}

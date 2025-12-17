import Animatetext from '@/component/AnimatedText/AnimatedText';
import { Zap, Clock, Award, Headphones } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: Award,
      title: 'Minimal Downtime',
      description: 'Advanced replication technologies ensure minimal service interruption',
    },
    {
      icon: Award,
      title: 'Scalability',
      description: 'ully optimized for AWS Cloud with increased scalability for future growth',
    },
    {
      icon: Award,
      title: 'Cost Efficiency',
      description: 'Optimized resource usage and potential long-term savings',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Extensive experience migrating from all major platforms to AWS',
    },
  ];

  return (
    <section className=" !py-16 !px-4 !sm:px-6 !lg:px-8">
      <div className=" mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Heading */}
          <div>
            <Animatetext y={-20} duration={1}>
              {' '}
              <p className="text-primary font-medium !mb-4">Services</p>
            </Animatetext>
            <Animatetext x={20} duration={1}>
              {' '}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 !mb-6">
                Why Choose Our Service
              </h2>
            </Animatetext>
            <Animatetext x={-20} duration={1}>
              {' '}
              <p className="text-gray-600 text-lg">Key Benefits</p>
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
                    <h3 className="text-xl font-bold text-gray-900 !mb-2">{feature.title}</h3>{' '}
                  </Animatetext>
                  <Animatetext x={20} duration={1}>
                    {' '}
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </Animatetext>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

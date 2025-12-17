import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { Database } from 'lucide-react';
import React from 'react';

export default function CloudArchitectureExcellence() {
  const data = [
    {
      id: 1,
      title: 'Infrastructure Architecture',
      description:
        'Design and implement secure, scalable cloud infrastructures using AWS services like VPC, EC2, RDS, and Aurora.',
    },
    {
      id: 2,
      title: 'Migration Strategies',
      description:
        'Seamlessly migrate your data and applications with services like AWS DMS, SCT, and custom automation frameworks.',
    },
    {
      id: 3,
      title: 'Infrastructure as Code',
      description:
        'Implement Infrastructure as Code (IaC) with AWS CloudFormation and Terraform for automated provisioning and management.',
    },
    {
      id: 4,
      title: 'Security Implementation',
      description:
        'Follow AWS Well-Architected principles to ensure your cloud infrastructure is secure, reliable, and cost-effective.',
    },
  ];
  return (
    <ResponsiveContainer className={'!my-20 justify-center items-center'}>
      <div className="">
        <Animatetext x={-20} duration={1}>
          <h1 className="md:text-5xl text-3xl md:!mt-5 font-semibold text-center bg-gradient-to-r from-[#0F8BA8] via-[#1b3236] to-[#48CAE4] bg-clip-text text-transparent">
            AWS Cloud Architecture Excellence
          </h1>
        </Animatetext>
        <Animatetext x={-20} duration={1}>
          <p className="!mt-5 text-center text-sm text-gray-600 ">
            Designing Robust, Scalable, and Secure Cloud Solutions Tailored to Your Business Needs
          </p>
        </Animatetext>
        {/* New Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 !mt-10 text-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="!p-6 bg-white hover:bg-primary/40 rounded-lg shadow-md hover:shadow-lg transform ease-linear duration-500 cursor-pointer hover:scale-105"
            >
              <div className="flex justify-center !mb-2 ">
                <span className="inline-block !p-2 text-white bg-gradient-to-r from-[#156A7E] to-[#26C0E4]   rounded-full ">
                  <Database />
                </span>
              </div>
              <Animatetext x={-20} duration={1}>
                {' '}
                <h3 className="text-xl font-bold text-gray-900 !mb-2">{item.title}</h3>{' '}
              </Animatetext>
              <Animatetext x={20} duration={1}>
                {' '}
                <p className="text-black  leading-relaxed">{item.description}</p>
              </Animatetext>
            </div>
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
}

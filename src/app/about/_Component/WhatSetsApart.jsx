import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import Image from 'next/image';
import techthree from '@/assets/images/tech-three.jpg';

export default function WhatSetsUsApart() {
  return (
    <ResponsiveContainer className={'flex justify-center items-center'}>
      <section className="!py-16 !px-4 md:!px-8 lg:!px-16 min-h-[400px] flex items-center justyfy-center ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="flex justify-center md:justify-start">
              <Image
                width={500}
                height={500}
                src={techthree}
                alt="Team collaborating in a data center"
                className="w-full max-w-md rounded-2xl shadow-lg object-cover"
              />
            </div>

            {/* Text Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground !mb-6 text-balance">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our unique combination of deep database expertise and modern cloud architecture
                skills allows us to deliver transformational outcomes. We don't just migrate
                databases— we architect future-ready data platforms that scale with your business
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ResponsiveContainer>
  );
}

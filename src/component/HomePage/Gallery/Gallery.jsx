import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Gallery() {
  const gellary = [
    { _id: 1, image: '/images/gellary2.png' },
    { _id: 1, image: '/images/gellary1.png' },
    { _id: 3, image: '/images/gellary2.png' },
  ];
  return (
    <div className="min-h-[750px] bg-cover bg-center bg-no-repeat !bg-[url('/images/sectionBg.png')] !mt-[900px] md:!mt-0 !pt-10">
      <ResponsiveContainer>
        <div className="w-full  ">
          {/* text and button */}
          <div className="flex justify-between  !w-full items-center  md:min-h-[30vh] ">
            <div className="text-center md:text-left">
              <h1 className="text-primary uppercase font-semibold">Gallery</h1>
              <Animatetext y={-20} duration={1}>
                <h1 className="md:text-5xl text-3xl !mt-5 font-semibold">Our Recent Work</h1>
              </Animatetext>
              <Animatetext y={20} duration={1}>
                <h1 className=" !mt-2 !md:mb-0 !mb-4 ">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque pharetra malesuada magna
                  vitae dignissim vitae nisl scelerisque consectetur. <br />
                  electrical solutions with guaranteed quality and safety.
                </h1>
              </Animatetext>
            </div>
            <div></div>
          </div>
          {/* image- carousel */}
          <Carousel
            // plugins={[
            //   Autoplay({
            //     delay: 2500,
            //   }),
            // ]}
            // opts={{
            //   loop: true,
            // }}
            className="w-full"
          >
            {gellary ? (
              <CarouselContent className="!-ml-4 md:-ml-6">
                {gellary.map((gellary) => (
                  <CarouselItem
                    key={gellary._id}
                    className="md:basis-1/2 basis-full pl-4 md:pl-6 !ml-5 rounded-2xl"
                  >
                    <Link href={`/`}>
                      <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
                        <Image
                          src={gellary.image || '/images/gallery1.jpg'}
                          alt="Gallery"
                          height={2000}
                          width={2000}
                          className="transition-all duration-300 ease-in-out group-hover:scale-105 !h-[400px] w-full object-cover rounded-lg"
                        />
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            ) : (
              <div className="flex items-center justify-center h-[250px] w-full">
                <p className="text-gray-500">No categories available</p>
              </div>
            )}

            <div className="md:absolute right-5 -top-30 mt-1 ">
              <CarouselPrevious
                size={30}
                className="border-none !px-6 !py-6 bg-primary text-white !text-2xl "
              />
              <CarouselNext className="border-none !px-6 !py-6 bg-primary text-white" />
            </div>
          </Carousel>
        </div>
      </ResponsiveContainer>
    </div>
  );
}

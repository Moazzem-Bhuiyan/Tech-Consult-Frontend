import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import Image from 'next/image';

const team = [
  {
    id: 1,
    name: 'John Doe',
    image: '/images/teams/team1.png',
    position: 'CEO',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    image: '/images/teams/team4.jpg',
    position: 'Project Manager',
  },
  {
    id: 3,
    name: 'Michael Lee',
    image: '/images/teams/team3.png',
    position: 'Lead Developer',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    image: '/images/teams/team2.png',
    position: 'UI/UX Designer',
  },
];

export function OurTeam() {
  return (
    <div>
      <div className="!my-10">
        <Animatetext x={-20} duration={1}>
          <h1 className="md:text-5xl text-3xl text-center !mt-5 font-semibold">Meet Our Team</h1>
        </Animatetext>
        <Animatetext x={20} duration={1}>
          <h1 className=" text-center !mt-5 ">The skilled professionals behind our success</h1>
        </Animatetext>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {team?.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="!p-4">
                <Card className="overflow-hidden rounded-2xl shadow-lg">
                  <CardContent className="relative !p-0">
                    {/* Team Member Image */}
                    <Image
                      src={item.image}
                      width={6000}
                      height={6000}
                      className="w-full h-[450px] !object-cover hover:scale-105 transition duration-500 ease-in-out"
                      alt={item.name}
                    />

                    {/* Overlay text section */}
                    <div className="absolute !bottom-0 !left-0 w-full bg-gradient-to-t from-black/100 via-black/60 to-transparent text-white !p-5 z-10">
                      <Animatetext x={-20} duration={1}>
                        {' '}
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                      </Animatetext>
                      <Animatetext x={20} duration={1}>
                        {' '}
                        <p className="text-sm text-gray-200">{item.position}</p>
                      </Animatetext>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

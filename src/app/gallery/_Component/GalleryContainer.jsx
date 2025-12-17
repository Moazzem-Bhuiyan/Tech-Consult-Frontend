import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';
import GalleryList from './GalleryList';

const GalleryContainer = () => {
  return (
    <div>
      <ResponsiveContainer className={' md:!mt-[115px] !mt-20'}>
        <div className="flex-center min-h-[60vh] !w-full md:!p-10">
          <div className="!space-y-5">
            <Animatetext x={-20} duration={1}>
              <h3 className="md:text-lg text-primary text-center font-semibold uppercase">
                Gallery
              </h3>
            </Animatetext>
            <Animatetext x={20} duration={1}>
              <h3 className="md:text-5xl text-3xl text-center font-semibold">
                Our Recent Projects
              </h3>
            </Animatetext>
            <Animatetext x={-20} duration={1}>
              <h3 className="  text-center text-gray-700 ">
                Browse through our completed projects to see the quality of our work and the
                excellence we bring to every electrical service.
              </h3>
            </Animatetext>
          </div>

          {/* all photos */}
          <GalleryList />
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default GalleryContainer;

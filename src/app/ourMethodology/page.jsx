import React from 'react';
import OurMethodology from './_Component/OurMethodologyContainer';
import IndustryExpertise from './_Component/IndustryExpertise';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';

export async function generateMetadata() {
  return {
    title: 'Our Methodology',
    description: ' Our Methodology page',
  };
}

export default function page() {
  return (
    <div>
      <OurMethodology />
      <div className='bg-[url("/images/sectionBg.png")] bg-no-repeat bg-cover'>
        {/*========================== IndustryExpertise========================= */}
        <ResponsiveContainer>
          {/*========================== IndustryExpertise========================= */}
          <IndustryExpertise />
        </ResponsiveContainer>
      </div>
    </div>
  );
}

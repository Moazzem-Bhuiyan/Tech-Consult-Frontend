import React from 'react';
import GalleryContainer from './_Component/GalleryContainer';
export async function generateMetadata() {
  return {
    title: 'Gallery',
    description: 'Gallery page',
  };
}
export default function page() {
  return (
    <div>
      <GalleryContainer />
    </div>
  );
}

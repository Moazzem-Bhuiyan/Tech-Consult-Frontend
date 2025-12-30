'use client';
import React from 'react';
import Animatetext from '../AnimatedText/AnimatedText';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Hero() {
  return (
    <div className=" relative min-h-[100vh] w-full bg-cover bg-center bg-no-repeat !bg-[url('/images/heroBanner.png')]">
      <div className="absolute inset-0 z-0 md:flex hidden items-end justify-center opacity-70">
        <DotLottieReact
          src="https://lottie.host/e6209e35-f8b1-444b-984b-60a13b7c9d0a/2mBnBaTLgd.lottie"
          loop
          autoplay
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* text */}
      <div className="absolute lg:!top-1/2  !top-1/3  md:left-[700px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <Animatetext x={30} duration={2}>
          <h1 className="font-bold md:text-[42px] text-4xl text-white uppercase">
            Professional database solutions you can trust. Expertly managed, securely optimized, and
          </h1>
        </Animatetext>
        <Animatetext x={-30} duration={2}>
          <h1 className="font-bold  md:text-4xl text-3xl text-white uppercase">
            committed to excellence.{' '}
          </h1>
        </Animatetext>
        <Animatetext y={-30} duration={2}>
          <p className="md:text-[18px] text-white !mt-5">
            Leading database consulting firm specializing in seamless migrations from on-premises to
            AWS Cloud with proven expertise across Oracle, SQL Server, PostgreSQL, and MySQL
            platforms.
          </p>
        </Animatetext>
      </div>
    </div>
  );
}

export default Hero;

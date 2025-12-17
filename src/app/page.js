import Hero from '@/component/Hero/Hero';
import AboutSection from '@/component/HomePage/AboutUs/AboutSection';
import Services from '@/component/HomePage/Services/Services';
import ContactContainer from './contact/_Component/ContactContainer';
import Record from '@/component/HomePage/Record/Record';

export const metadata = {
  title: 'PL Tech  Website | Home',
  description: 'PL Tech  Website by using this platfrom you can book electrical services',
};

export default function Home() {
  return (
    <div className=" z-10 !overflow-hidden px-5 md:px-10 lg:mx-auto lg:w-[90%] lg:space-y-40 lg:px-0 !w-full !max-w-2xl:w-3/4 2xl:!max-w-[1920px] 2xl:px-10 ">
      <Hero />
      <AboutSection />
      <Services />
      <Record />
      <ContactContainer />
    </div>
  );
}

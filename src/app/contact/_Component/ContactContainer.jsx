import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';

const ContactContainer = () => {
  return (
    <ResponsiveContainer className={' !mt-[115px] !my-10'}>
      <div className="w-full ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Contact Information */}
          <ContactInfo />
          {/* Right side - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default ContactContainer;

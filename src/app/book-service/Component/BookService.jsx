import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';
import BookServiceForm from './BookServiceForm';
import Animatetext from '@/component/AnimatedText/AnimatedText';

function BookService() {
  return (
    <div className=" md:!p-10 !w-full !mt-10">
      <div className="mx-auto flex w-full max-w-[2920px] md:!px-10 lg:w-[100%] !lg:px-0 !p-1">
        <div className='  relative bg-[url("/images/bookingbg.png")] bg-cover bg-center !p-2 flex-col bg-no-repeat min-h-[700px] flex  !w-full rounded-4xl'>
          <div className="absolute inset-0 bg-black opacity-50 rounded-4xl"></div>
          <div className="!z-100">
            {/* overlay */}
            <div className="!z-100 md:w-[50%] !mx-auto">
              <div className="!my-20 !space-y-3">
                <Animatetext y={20} duration={1}>
                  {' '}
                  <h1 className="md:text-5xl text-2xl font-semibold text-white text-center">
                    Book Your Service
                  </h1>
                </Animatetext>
                <Animatetext y={-20} duration={1}>
                  <p className="text-white text-center !text-sm">
                    Book your electrical service today and experience the PEC ELECTRICAL difference
                  </p>
                </Animatetext>
              </div>
              <BookServiceForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookService;

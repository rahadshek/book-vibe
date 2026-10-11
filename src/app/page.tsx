import Banner from '@/components/homeshow/Banner';
import React, { Suspense } from 'react';
import Books from './books/page';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={ <div className="flex min-h-screen items-center justify-center">
      <span className="loading loading-spinner loading-xl"></span>
    </div>}>
        <Books></Books>
      </Suspense>
    </div>
  );
};

export default page;
import Banner from '@/components/homeshow/Banner';
import Books from '@/components/homeshow/Books';
import React, { Suspense } from 'react';

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
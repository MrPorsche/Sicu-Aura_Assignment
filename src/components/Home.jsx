import React from 'react';
import Banner from './Auth/sub-components/Banner';
import Registration from './Auth/Registration';

const Home = () => {

  return (
    <div className="overflow-hidden pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <Banner />
        <Registration />
      </div>
    </div>
  );
};

export default Home;
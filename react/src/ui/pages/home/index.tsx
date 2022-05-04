import React from 'react';
import Feed from '../../components/Feed';
import Sidebar from '../../components/Sidebar';

import './style.scss';

const HomePage = () => {
  return (
    <div className='homeWrapper'>
      <Feed />
      <Sidebar />
    </div>
  );
};

export default HomePage;

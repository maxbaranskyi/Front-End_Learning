import React from 'react';
import Story from '../Story';

import './style.scss';

const Sotries = () => {
  return (
    <div className='storiesWrapper'>
      <div className='storiesList'>
        <div className='leftGradient'></div>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <div className='rightGradient'></div>
      </div>
    </div>
  );
};

export default Sotries;

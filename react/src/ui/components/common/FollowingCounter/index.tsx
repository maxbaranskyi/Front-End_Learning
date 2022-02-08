import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

interface Props {
  styles: string
}

const FollowingCounter = (props: Props) => {
  return (
    <div className={'followingCounter ' + props.styles}>
      <NavLink className='followingLink' to='following'>
        <span className='number'>863</span>
        <span className='title'>Following</span>
      </NavLink>
    </div>
  );
};

export default FollowingCounter;

import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

interface Props {
  styles: string,
}

const FollowersCounter = (props: Props) => {
  return (
    <div className={'followersCounter ' + props.styles}>
      <NavLink className='followersLink' to="followers">
        <span className='number'>1,1 K</span>
        <span className='title'>Followers</span>
      </NavLink>
    </div>
  );
};

export default FollowersCounter;

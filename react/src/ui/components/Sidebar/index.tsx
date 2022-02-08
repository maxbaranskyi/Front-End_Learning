import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../common/Avatar';
import FollowersCounter from '../common/FollowersCounter';
import FollowingCounter from '../common/FollowingCounter';
import ProfileDescription from '../common/ProfileDescription';
import ProfileName from '../common/ProfileName';

import './style.scss';

export class Sidebar extends Component {
  render() {
    return (
      <div className='sidebarWrapper'>
        <div className='profilePanel homeElement'>
          <div className='avatarAndCounters'>
            <FollowersCounter styles='homeElement'/>
            <Avatar styles='homeElement'/>
            <FollowingCounter styles='homeElement' />
          </div>
          <div className='titleAndDescription'>
            <ProfileName styles='homeElement'/>
            <ProfileDescription />
          </div>
          <div className='profileButtons'>
            <NavLink to="edit-profile">Edit profile</NavLink>
            <NavLink to="new-post">New post</NavLink>
          </div>
        </div>
        <div className='siteInfoBlock'>
          <div className='siteLinks'>
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Language</a>
          </div>
          <div className='copyright'>
            © 2022 Linkstagram
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

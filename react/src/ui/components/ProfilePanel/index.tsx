import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../common/Avatar';
import FollowersCounter from '../common/FollowersCounter';
import FollowingCounter from '../common/FollowingCounter';
import ProfileDescription from '../common/ProfileDescription';
import ProfileName from '../common/ProfileName';

import './style.scss';

const MobileAndSidebarComponent = () => {
    return (
      <div className='profilePanel homeElement'>
        <div className='avatarAndCounters'>
          <FollowersCounter styles='homeElement'/>
          <Avatar styles='homeElement'/>
          <FollowingCounter styles='homeElement' />
        </div>
        <div className='titleAndDescription'>
          <ProfileName styles=''/>
          <ProfileDescription />
        </div>
        <div className='profileButtons'>
          <NavLink to="edit-profile">Edit Profile</NavLink>
          <NavLink to="new-post">New Post</NavLink>
        </div>
      </div>
    );
}

const DesktopComponent = () => {
    return (
        <div className='profilePanel profileElement'>
            <div className='profileInfo'>
                <Avatar styles='profileElement'/>
                <div className='titleAndDescription'>
                    <ProfileName styles='profileElement'/>
                    <ProfileDescription />
                </div>
            </div>
            <div className=''>
                <div className='counters'>
                    <FollowersCounter styles='profileElement'/>
                    <FollowingCounter styles='profileElement'/>
                </div>
                <div>
                    <NavLink to="edit-profile">Edit Profile</NavLink>
                    <NavLink to="new-post">New Post</NavLink>
                </div>
            </div>
        </div>
    )
}

const ProfilePanel = () => {
  

    return null;
};

export default ProfilePanel;

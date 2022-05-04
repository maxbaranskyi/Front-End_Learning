import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../components/common/Avatar';
import FollowersCounter from '../../components/common/FollowersCounter';
import FollowingCounter from '../../components/common/FollowingCounter';
import ProfileDescription from '../../components/common/ProfileDescription';
import ProfileName from '../../components/common/ProfileName';
import ProfilePost from '../../components/ProfilePost';

import './style.scss';

const Profile = () => {
 return (
   <div className='profile'>
     <div className='profilePanel profileElement'>
        <Avatar styles='profileElement'/>
        <div className='titleAndDescription'>
          <ProfileName styles='profileElement'/>
          <ProfileDescription />
        </div>
        <div className='countersAndControlButtons'>
          <div className='counters'>
            <FollowersCounter styles='profileElement'/>
            <FollowingCounter styles='profileElement'/>
          </div>
          <div className='controlButtons'>
            <NavLink to="edit-profile">Edit profile</NavLink>
            <NavLink to="new-post">New post</NavLink>
          </div>
        </div>
     </div>
     <div className='profilePosts'>
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
       <ProfilePost />
     </div>
   </div>
 );
};

export default Profile;

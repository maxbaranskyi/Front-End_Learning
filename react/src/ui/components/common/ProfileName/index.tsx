import React from 'react';

import './style.scss';

interface Props {
  styles: string
}

const ProfileName = (props: Props) => {
  return (
    <div className={'profileName ' + props.styles}>
      <span className='fullName'>Alexandr Sokolov</span>
      <span className='jobTitle'>Photographer</span>
    </div>
  );
};

export default ProfileName;

import React from 'react';

import './style.scss';

interface Props {
  styles: string
}

const Avatar = (props: Props) => {
  return (
    <div className={'avatar ' + props.styles}>
        <img srcSet='https://fionadiaries.files.wordpress.com/2012/04/hilarious-duck-faces-poses-16.jpeg' />
    </div>
  );
};

export default Avatar;

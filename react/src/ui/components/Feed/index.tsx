import React, { Component } from 'react';
import PostList from '../PostList';
import Sotries from '../Stories';

import './style.scss';

export class Feed extends Component {
  render() {
    return (
      <div className='feedWrapper'>
        <Sotries />
        <PostList />
      </div>
    );
  }
}

export default Feed;

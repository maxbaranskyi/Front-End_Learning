import React, { Component } from 'react';
import LikeIcon from './../../../public/images/like_icon.svg';
import CommentIcon from './../../../public/images/comment_icon.svg';
import ShareIcon from './../../../public/images/share_icon.svg';

import './style.scss';

// TODO: replace text with other from server

export class Post extends Component {
  render() {
    return (
      <div className='post'>
        <div className='postHeader'>
          <div className='authorAvatar'>
            <img srcSet='https://fionadiaries.files.wordpress.com/2012/04/hilarious-duck-faces-poses-16.jpeg' />
          </div>
          <div className='authorNameAndPostTime'>
            <a className="" href="#">Nettie Fernandez</a>
            <span></span>
          </div>
          <div className='postOptions'></div>
        </div>
        <div className='postPhoto'>
          <img srcSet='https://fionadiaries.files.wordpress.com/2012/04/hilarious-duck-faces-poses-16.jpeg' />
        </div>
        <div className='postFooter'>
          <div className='postDescription'>
          TB to New York October 2018.
          "You shouldn't wait for other people to make special things happen. You have to create your own memories." Heidi Klum
          </div>
          <div className='postButtons'>
            <div className='likesCount'>
              <a >
                <img srcSet={LikeIcon} />
              </a>
              <span>204</span>
            </div>
            <div className='commentsCount'>
              <a >
                <img srcSet={CommentIcon} />
              </a>
              <span>138</span>
            </div>
            <div className='shareContainer'>
              <a >
                <span>Share</span>
                <img srcSet={ShareIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;

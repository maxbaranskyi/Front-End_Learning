import React, { Component } from 'react';
import LanguageDropdown from '../LanguageDropdown';
import LogoImage from './../../../public/images/logo.svg';

import './style.scss';


export class Header extends Component {
  render() {
    return <div className='header-wrapper'>
        <div className='logoBlock'>
          <img srcSet={LogoImage} />
        </div>
        <div className='headerNavigation'>
          <LanguageDropdown />
        </div>
    </div>;
  }
}

export default Header;

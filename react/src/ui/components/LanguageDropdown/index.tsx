import React from 'react';

import './style.scss'

const LanguageDropdown = () => {
  return (
    <div className='languageDropdown'>
        <div className='selectedLanguage'>EN</div>
        <div className='dropdownContent'>
            <div className='language'>UA</div>
            <div className='language'>ES</div>
            <div className='language'>FR</div>
        </div>
    </div>
  );
};

export default LanguageDropdown;

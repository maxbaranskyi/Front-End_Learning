import React from 'react';
import LoginForm from '../../components/LoginForm';
import PhoneImage from '../../../public/images/Group26.png';

import './style.scss';

const LoginPage = () => {
 return (
   <div className='loginWrapper'>
     <div className='linkstagramOnPhone'>
        <img srcSet={PhoneImage}/>
     </div>
     <div className='loginOrRegisterWindow'>
        <LoginForm />
     </div>
   </div>
 );
};

export default LoginPage;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../common/Input';

import './style.scss';

const LoginForm = () => {
  return (
    <div className='loginWindow'>
        <h1>Log In</h1>
        <form className='loginForm'>
            <Input name='email' type='text' label='Email' placeholder='example@mail.com'/>
            <Input name='password' type='password' label='Password' placeholder='Type in...'/>
            <div>
                <p>
                    Don't have an account? <NavLink to='register'>Sign Up</NavLink>
                </p>
            </div>
        </form>
    </div>
    );
};

export default LoginForm;

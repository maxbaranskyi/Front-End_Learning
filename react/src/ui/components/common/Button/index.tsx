import React from 'react';

import './style.scss';

interface Props {
    styleClasses: string,
    label: string,
}

const Button = (props: Props) => {
    return (
        <button 
            className={' ' + props.styleClasses}
        >
            {props.label}
        </button>
    );
};

export default Button;

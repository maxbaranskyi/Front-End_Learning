import React, { Component, ReactChild } from 'react';

import './style.scss';

interface Props {
     children: ReactChild
}

interface State {
    width: number
}

export class ModalWindow extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
    }
    
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const isMobile = this.state.width <= 980;

        if (isMobile) {
            return (
                <div></div>
            );
        } else {
            return (
                <div className='modal'>
                    <div className='modalContent'>
                        {this.props.children}
                    </div>
                </div>
            );
        }
    }
}

export default ModalWindow;

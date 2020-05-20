import React, { Component } from 'react';
import LoaderImage from '../../assets/45.gif';
import './FullPageLoader.css';

class FullPageLoader extends Component {
    state = { }
    render() {
        return (
            <div className='loader-container center'>
                <div className='loader'>
                    <img src={LoaderImage}></img>
                </div>
                
            </div>
        );
    }
}

export default FullPageLoader;
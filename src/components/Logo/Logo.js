import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import logo from './logo.png';

// a simple component, with no state, so a pure function is used.
const Logo = () => {
    return(
    <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
                <img className='pa2' alt='logo' src={logo}></img>
            </div>
        </Tilt>
    </div>
    );
}

export default Logo;
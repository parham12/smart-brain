import React from 'react';
import './Navigation.css';
 
// a simple component, with no state, so a pure function is used.
const Navigation = ({ onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return ( 
            <nav className='Nav'>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                <img src={`https://robohash.org/${1}?size=100x100`} alt='' width='100' height='100'/>

            </nav>
        )
        } else {
            return (
            <nav className='Nav'>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
            );
        }
}

export default Navigation;
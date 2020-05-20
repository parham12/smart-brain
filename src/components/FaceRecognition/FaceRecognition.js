import React from 'react';
import './FaceRecognition.css';

// a simple component, with no state, so a pure function is used.
const FaceRecognition = ( {imageUrl, box} ) => {
    console.log('box:', box);
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div
                className='bounding-box'
                style={{
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.bottomRow,
                    left: box.leftCol
                }}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;
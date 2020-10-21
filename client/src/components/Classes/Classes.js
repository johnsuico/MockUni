import React from 'react';
import Axios from 'axios';

// Import CSS File
import './classes.css';

// Import Sidebar Component
import Sidebar from '../Sidebar/Sidebar';

function Classes() {
    return (
        <div className="classes">
            <Sidebar active="classes" />
            <div className="classes-container">
                <div className="classes-sideOne">
                    <h1>Classes Side One</h1>
                </div>
                <div className="classes-sideTwo">
                    <h1>Classes Side Two</h1>
                </div>
            </div>
        </div>
    )
}

export default Classes;
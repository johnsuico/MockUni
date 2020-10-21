import React from 'react';
import Axios from 'axios';

// Import CSS File
import './students.css';

// Import Sidebar Component
import Sidebar from '../Sidebar/Sidebar';

function Students() {
    return (
        <div className="students">
            <Sidebar active="students" />
            <div className="students-container">
                <div className="students-sideOne">
                    <h1>Student Side One</h1>
                </div>
                <div className="students-sideTwo">
                    <h1>Student Side Two</h1>
                </div>
            </div>
        </div>
    )
}

export default Students;
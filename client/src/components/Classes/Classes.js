import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// Import CSS File
import './classes.css';
import './class-sideOne.css';

// Import Sidebar Component
import Sidebar from '../Sidebar/Sidebar';
import SideOne from './SubComponents/ClassSideOne';

function Classes() {

    const [selected, setSelected] = useState('');
    const [toggleClass, setToggleClass] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:5000/classes')
            .then(response => setSelected(response.data[0]._id))
    }, [])
    
    function getSelected(selected) {
        setSelected(selected);
    }
    
    function getAddClass(toggle) {
        setToggleClass(toggle);
    }

    return (
        
        <div className="classes">
            <Sidebar active="classes" />

            <div className="classes-container">
                <div className="classes-sideOne">
                    <div className="sideOne-header">
                        <h2>Class Management</h2>
                    </div>
                    <SideOne getSelected={getSelected} getToggle={getAddClass}/>
                </div>
                <div className="classes-sideTwo">
                    <h1>Classes Side Two</h1>
                </div>
            </div>
        </div>
    )
}

export default Classes;
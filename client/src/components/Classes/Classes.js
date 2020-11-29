import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// Import CSS File
import './classes.css';
import './class-sideOne.css';
import './class-sideTwo.css';

// Import Component
import Sidebar from '../Sidebar/Sidebar';
import SideOne from './SubComponents/ClassSideOne';
import SideTwo from './SubComponents/ClassSideTwo';

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

            <div className="class-container">
                {/* Classes Side One */}
                <div className="classes-sideOne">
                    <div className="sideOne-header">
                        <h2>Class Management</h2>
                    </div>
                    <SideOne getSelected={getSelected} getToggle={getAddClass}/>
                </div>

                {/* Classes Side Two */}
                <div className="classes-sideTwo">
                    <div className="sideTwo-header">
                        <h2>Mock University Name</h2>
                    </div>
                    <SideTwo selected={selected} toggleAdd={toggleClass}/>
                </div>
            </div>
        </div>
    )
}

export default Classes;
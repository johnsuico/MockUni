import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

// Icon Imports
import { FaBookOpen } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// Import CSS File
import './sidebar.css';

function Sidebar(props) {
    return(
        <div className="sidebar">

            {/* Logo container */}
            <div className="logo-container">
                <FaBookOpen className="logo-pic"/>
                <h1 className="logo-name">MockUni</h1>
            </div>

            {/* Admin Container */}
            <div className="admin-container">
                <h2 className="admin-title">Admin</h2>
                <h3 className="admin-name">Admin Name Here</h3>
            </div>

            {/* Sidebar Nav Container */}
            <div className="sidebar-nav-container">
                <Link to='/' className={props.active === 'dashboard' ? 'sidebar-nav-item-active ' : 'sidebar-nav-item'}>
                    <FaClipboard className="sidebar-nav-icon"/>
                    <div className="sidebar-nav-title">Dashboard</div>
                </Link>
                <Link to='/students' className={props.active === 'students' ? 'sidebar-nav-item-active ' : 'sidebar-nav-item'}>
                    <FaUserGraduate className="sidebar-nav-icon"/>
                    <div className="sidebar-nav-title">Students</div>
                </Link>
                <Link to='/classes' className={props.active === 'classes' ? 'sidebar-nav-item-active' : 'sidebar-nav-item'}>
                    <FaPencilAlt className="sidebar-nav-icon"/>
                    <div className="sidebar-nav-title">Classes</div>
                </Link>
                <Link to='/books' className={props.active === 'books' ? 'sidebar-nav-item-active' : 'sidebar-nav-item'}>
                    <FaBook className="sidebar-nav-icon"/>
                    <div className="sidebar-nav-title">Books</div>
                </Link>
            </div>

            {/* Fake Logout Button Container */}
            <div className="logout-container">
                <FaArrowLeft className="logout-icon"/>
                <div className="logout-text">Logout</div>
            </div>
        </div>
    )
}

export default Sidebar;
import React, { useState } from 'react'
import './Sidebar.css'
import { sidebarItems } from '../../utils/sidebarData'
import { TbHexagonLetterO } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import profilePicture from '../../images/profilePicture.webp'

const Sidebar = () => {

    const [activeItem, setActiveItem] = useState(1);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };


    return (
        <div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
            <div className='dashboard-top'>
                <div className='dashboard'>
                    <TbHexagonLetterO size={35} />
                    <span>Dashboard</span>

                </div>
                <span className='hamburger' onClick={toggleSidebar}><GiHamburgerMenu /></span>
            </div>
            <ul>
                {sidebarItems.map((item) => (
                    <li
                        key={item.id}
                        className={`${activeItem === item.id ? "active" : ""}`}
                        onClick={() => setActiveItem(item.id)}
                    >
                        <div className='sidebar-item'>
                            <span>{item.icon}</span>
                            <span className="litext">{item.text}</span>
                        </div>
                        <span className={`sidebar-icon ${sidebarVisible ? "visible" : ""}`}>{item.icon}</span>
                        <span className={`sidebar-forwardarrow ${sidebarVisible ? "visible" : ""}`}><IoIosArrowForward /></span>
                    </li>
                ))}
            </ul>
            <div className="profile">
                <div className='user-details'>
                    <img src={profilePicture} alt="Profile" />
                    <div className="username">
                        <span>Evano</span>
                        <span>Project Manager</span>
                    </div>
                </div>
                {/* <span>{sidebarVisible ? <img src={profilePicture} alt="Profile" /> : <IoIosArrowDown />}</span> */}
                <span className={`sidebar-img ${sidebarVisible ? "visible" : ""}`}><img src={profilePicture} alt="Profile" /></span>
                <span className={`sidebar-downarrow ${sidebarVisible ? "visible" : ""}`}><IoIosArrowDown /></span>
            </div>
        </div>
    )
}

export default Sidebar
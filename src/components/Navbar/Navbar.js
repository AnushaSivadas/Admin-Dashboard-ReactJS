import React from 'react'
import './Navbar.css'
import {RiSearchLine} from 'react-icons/ri'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h4> Hello Kiara &#128075;,</h4>
            <div className="searchbar">
                <button  type="submit">
                    <RiSearchLine size={18}/>
                </button>
                <input type="text" placeholder="Search.." name="search" />
            </div>
        </div>
    )
}

export default Navbar
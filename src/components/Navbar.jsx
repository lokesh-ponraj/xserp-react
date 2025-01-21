import React from 'react'
import image from '../site_media/images/xs-logo-with-border.png'
import UpperBar from './UpperBar'
import { FaGear, FaBell, FaCircleUser } from 'react-icons/fa6'
import { IoAddCircle } from 'react-icons/io5'

function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary p-2 shadow">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Leftmost: Navbar Brand */}
                <a className="navbar-brand" href="/">
                    <img src={image} alt="Logo" width="35" height="35" />
                </a>

                {/* Center: Add Icon */}
                <div className="d-flex justify-content-center">
                    <IoAddCircle size={30} color="#209be1" />
                </div>

                {/* Rightmost: Other Items */}
                <div className="d-flex align-items-center gap-3">
                    <a href="/">Schnell Energy Equipments (P) Ltd</a>
                    <FaGear size={20} color="#209be1" />
                    <FaBell size={20} color="#209be1" />
                    <FaCircleUser size={20} color="#209be1" />
                </div>
            </div>
        </nav>

    )
}

export default Navbar
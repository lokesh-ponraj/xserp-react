import React from 'react'
import image from '../site_media/images/xs-logo-with-border.png'
import { FaGear, FaBell, FaCircleUser } from 'react-icons/fa6'
import { IoAddCircle } from 'react-icons/io5'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        (
            <nav className="navbar bg-body-tertiary p-2 shadow">
                <>
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <a className="navbar-brand" href="/">
                            <img src={image} alt="Logo" width="35" height="35" />
                        </a>
                        <div className="position-relative">
                            <motion.div
                                initial={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={togglePopup}
                                style={{ cursor: "pointer" }}
                            >
                                <IoAddCircle size={30} color="#209be1" />
                            </motion.div>

                            <AnimatePresence>
                                {showPopup && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="position-absolute bg-white shadow p-3 rounded"
                                        style={{
                                            top: "40px",
                                            zIndex: 1000,
                                        }}
                                    >
                                        <div>

                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                        <a href="/">Schnell energy equipments</a>
                            <motion.div
                                whileTap={{ scale: 0.8 }}
                                style={{ cursor: "pointer" }}
                            >
                                <FaGear size={20} color="#209be1" />
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 0.8 }}
                                style={{ cursor: "pointer" }}
                            >
                                <FaBell size={20} color="#209be1" />
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 0.8 }}
                                style={{ cursor: "pointer" }}
                            >
                                <FaCircleUser size={20} color="#209be1" />
                            </motion.div>
                        </div>
                    </div>
                </>
            </nav>

        ))
}

export default Navbar
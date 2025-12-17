import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFlagUsa, FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import { IoMdNotificationsOff } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { GiPrayerBeads } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import { RiGalleryView2 } from "react-icons/ri";
import { RiMapPin5Fill } from "react-icons/ri";
import { FaIceCream } from "react-icons/fa";
import { FaIgloo } from "react-icons/fa";
import { GiFairyWings } from "react-icons/gi";
import { SiClarifai } from "react-icons/si";
import { GiPilgrimHat } from "react-icons/gi";
import { SiAnalogue } from "react-icons/si";
import { IoPersonAdd } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { LiaAlignCenterSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { FcConferenceCall } from "react-icons/fc";
import { GiVideoConference } from "react-icons/gi";
import { ImPodcast } from "react-icons/im";
import './Navbar.css';
const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };
    return (
        <>
            <section className="Adminnav">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button">Sidebar</a>
                        <NavLink className="nav-link  " to="/Dashboard">Dashboard</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <input type="text" placeholder='Search Box' className='form-control' />
                            <div className="navicon">
                                <NavLink className="link" to=""><MdDarkMode /></NavLink>
                                <NavLink className="link" to=""><FaFlagUsa /></NavLink>
                                <NavLink className="link" to=""><IoMdNotificationsOff /></NavLink>
                                <NavLink className="link" to=""><FaCartShopping /></NavLink>
                                <NavLink className="link" to=""><FaRegUserCircle /></NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample">
                <div className="offcanvas-header">
                    <h5>Close Sidebar</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <img src="https://ik.imagekit.io/hmdcfponi/Logo's/Logo?updatedAt=1764926876354" className="img-fluid" />
                    <NavLink className="Blink" to="/"><GiPrayerBeads className='icon' /> Prayer Timings</NavLink>
                    <NavLink className="Blink" to="/"><GiPodiumWinner className='icon' /> Competition Winners</NavLink>
                    <NavLink className="Blink" to="/"><RiGalleryView2 className='icon' /> Institute Gallery</NavLink>
                    <span className='D1'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D1")}>
                            <div className="toggle-left">
                                <RiMapPin5Fill className="menu-icon" />
                                <span> 5 PillARS OF ISLAM</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D1" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D1" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="#"><FaIceCream /> Shahada (Faith)</NavLink></li>
                                <li><NavLink className="link" to="#"><FaIgloo /> Salah (Prayer)</NavLink></li>
                                <li><NavLink className="link" to="#"><GiFairyWings /> Zakat (Charity)</NavLink></li>
                                <li><NavLink className="link" to="#"><SiClarifai /> Sawm (Fasting)</NavLink></li>
                                <li><NavLink className="link" to="#"><GiPilgrimHat /> Hajj (Pilgrimage)</NavLink></li>
                            </ul>
                        )}
                    </span>
                    <span className='D2'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D2")}>
                            <div className="toggle-left">
                                <SiAnalogue className="menu-icon" />
                                <span>Honorable Guests</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D2" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D2" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="#"><IoPersonAdd /> Add Guests</NavLink></li>
                                <li><NavLink className="link" to="#"><FiEdit3 /> Edit Guests</NavLink></li>
                                <li><NavLink className="link" to="#"><FaListCheck /> Guests List</NavLink></li>
                            </ul>
                        )}
                    </span>
                    <span className='D3'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D3")}>
                            <div className="toggle-left">
                                <FaCompressArrowsAlt className="menu-icon" />
                                <span>Competition Winners</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D3" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D3" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="#"><IoPersonAdd /> Add Winners</NavLink></li>
                                <li><NavLink className="link" to="#"><FiEdit3 /> Edit Winners</NavLink></li>
                                <li><NavLink className="link" to="#"><FaListCheck /> Winners List</NavLink></li><hr />
                                <li><NavLink className="link" to="#"><PiStudentBold />Students</NavLink></li>
                                <li><NavLink className="link" to="#"><LiaAlignCenterSolid />Centers</NavLink></li>
                                <li><NavLink className="link" to="#"><FaUsers />Member</NavLink></li>
                                <li><NavLink className="link" to="#"><SiProgress />Programs</NavLink></li>
                            </ul>
                        )}
                    </span>
                    <span className='D4'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D4")}>
                            <div className="toggle-left">
                                <GiVideoConference className="menu-icon" />
                                <span>Conferences's</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D4" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D4" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="#"><FcConferenceCall />Yadgar Aslaf Conference</NavLink></li>
                                <li><NavLink className="link" to="#"><FcConferenceCall />Allama Shabbir Ahmed Usmani Conference</NavLink></li>
                                <li><NavLink className="link" to="#"><FcConferenceCall />Ghulam Yahya Hashmi Conference</NavLink></li>
                            </ul>
                        )}
                    </span>
                    <span className='D5'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D5")}>
                            <div className="toggle-left">
                                <ImPodcast className="menu-icon" />
                                <span>Zameer’s Podcast</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D5" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D5" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="#"><IoPersonAdd />add Podcast</NavLink></li>
                                <li><NavLink className="link" to="#"><FiEdit3 />Edit Podcast</NavLink></li>
                                <li><NavLink className="link" to="#"><FaListCheck />List Podcast</NavLink></li>
                            </ul>
                        )}
                    </span>
                    <span className='D7'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D7")}>
                            <div className="toggle-left">
                                <FaShoppingBag className="menu-icon" />
                                <span>Zameer’s Team</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D7" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D7" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="#"><IoPersonAdd />add Team Membar</NavLink></li>
                                <li><NavLink className="link" to="#"><FaEdit />Edit Team Membar</NavLink></li>
                                <li><NavLink className="link" to="#"><FaListCheck />List Team Membar</NavLink></li>
                            </ul>
                        )}
                    </span>
                    <span className='D8'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D8")}>
                            <div className="toggle-left">
                                <FaShoppingBag className="menu-icon" />
                                <span>Zameer’s Biogarafi</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D8" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D8" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="#"><IoPersonAdd />add Biogarafi</NavLink></li>
                                <li><NavLink className="link" to="#"><FaEdit />Edit Biogarafi</NavLink></li>
                                <li><NavLink className="link" to="#"><FaListCheck />List Biogarafi</NavLink></li>
                            </ul>
                        )}
                    </span>
                    <span className='D9'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D9")}>
                            <div className="toggle-left">
                                <FaShoppingBag className="menu-icon" />
                                <span>Zameer’s Library</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D9" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D9" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="#"><IoPersonAdd />add Library</NavLink></li>
                                <li><NavLink className="link" to="#"><FaEdit />Edit Library</NavLink></li>
                                <li><NavLink className="link" to="#"><FaListCheck />List Library</NavLink></li>
                            </ul>
                        )}
                    </span>
                </div>
            </div>
        </>
    );
};
export default Navbar;
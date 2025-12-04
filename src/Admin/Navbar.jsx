import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFlagUsa, FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import { IoMdNotificationsOff } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import FullscreenToggle from "../Helper/FullscreenToggle";
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
                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button">Open Sidebar</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <NavLink className="nav-link" to="/Dashboard/MainHome">Dashboard</NavLink>
                            </ul>
                            <input type="text" className='form-control w-100' placeholder='Search...' />
                            <div className="navicon">
                                <NavLink className="link" to=""><MdDarkMode /></NavLink>
                                <NavLink className="link" to=""><FullscreenToggle /></NavLink>
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
                    <span className='D1'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D1")}>
                            <div className="toggle-left">
                                <FaShoppingBag className="menu-icon" />
                                <span>Products</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D1" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D1" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="/Dashboard/AddProduct"><IoBagAddOutline /> Add Product</NavLink></li>
                                <li><NavLink className="link" to="/Dashboard/EditProduct"><FaEdit /> Edit Product</NavLink></li>
                                <li><NavLink className="link" to="/Dashboard/ProductList"><FaListCheck /> Product List</NavLink></li>
                            </ul>
                        )}
                    </span>
                    <li><NavLink className="link" to="/Dashboard/MainHome"><IoBagAddOutline /> Customer Gift Offe</NavLink></li>
                    <span className='D2'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D2")}>
                            <div className="toggle-left">
                                <FaShoppingBag className="menu-icon" />
                                <span>Customer Gift Offer</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D2" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D2" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="/Dashboard/EditProduct"><FaEdit /> Edit Product</NavLink></li>
                                <li><NavLink className="link" to="/Dashboard/ProductList"><FaListCheck /> Product List</NavLink></li>
                            </ul>
                        )}
                    </span>
                    <span className='D3'>
                        <div className="dropdown-toggle" onClick={() => toggleDropdown("D3")}>
                            <div className="toggle-left">
                                <FaShoppingBag className="menu-icon" />
                                <span>Customer Order Tracking</span>
                            </div>
                            <IoIosArrowDown className={`arrow-icon ${activeDropdown === "D3" ? "rotate" : ""}`} />
                        </div>
                        {activeDropdown === "D3" && (
                            <ul className="dropdown-items">
                                <li><NavLink className="link" to="/Dashboard/AddProduct"><IoBagAddOutline /> Add Product</NavLink></li>
                                <li><NavLink className="link" to="/Dashboard/EditProduct"><FaEdit /> Edit Product</NavLink></li>
                                <li><NavLink className="link" to="/Dashboard/ProductList"><FaListCheck /> Product List</NavLink></li>
                            </ul>
                        )}
                    </span>
                </div>
            </div>
        </>
    );
};
export default Navbar;
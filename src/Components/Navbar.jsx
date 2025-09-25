import React, { useEffect } from 'react'
import { MdLanguage } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { FaHeadphones } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
    useEffect(() => {
        const links = document.querySelectorAll(".navbar-nav .nav-link");
        links.forEach(link => {
            link.addEventListener("click", () => {
                // Collapse navbar on mobile
                let navbarToggler = document.querySelector(".navbar-collapse");
                if (navbarToggler && navbarToggler.classList.contains("show")) {
                    new window.bootstrap.Collapse(navbarToggler).toggle();
                }

                // Scroll to top smoothly
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        });
    }, []);
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="https://ik.imagekit.io/hmdcfponi/Logo?updatedAt=1758266481774" alt="Logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="https://ik.imagekit.io/hmdcfponi/toggle2?updatedAt=1758708124291" alt="Navbar Toggle" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/About">About Us</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Libriri">Libriri</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Bazam_Zameer">Bazam Zameer</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Biogarafi">Biogarafi</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Pod_Cast">Pod Cast</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Team">Team</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Conatct">Conatct Us</NavLink></li>
                        </ul>
                        <div className="navicon">
                            <NavLink to="" className='link0'><MdLanguage className='link' /></NavLink>
                            <NavLink to="" className='link0'><CgDarkMode className='link' /></NavLink>
                            <NavLink to="" className='link0'><FaHeadphones className='link' /></NavLink>
                            <NavLink to="" className='link0'><FaRegUserCircle className='link' /></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

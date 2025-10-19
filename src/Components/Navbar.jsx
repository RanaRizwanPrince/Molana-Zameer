import React, { useEffect, useState } from 'react';
import { MdLanguage } from "react-icons/md";
import { FaHeadphones, FaRegUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [hide, setHide] = useState(false);
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const vh50 = window.innerHeight / 2;
            if (window.scrollY > vh50) {
                setHide(false); // scroll > 50vh → navbar visible (upar aa jaye)
            } else if (window.scrollY > lastScrollY) {
                setHide(true); // scrolling down → navbar upar hide
            } else {
                setHide(false); // scrolling up → navbar show
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // ✅ function to close navbar after clicking a link
    const closeNavbar = () => {
        const navbar = document.getElementById("navbarSupportedContent");
        if (navbar && navbar.classList.contains("show")) {
            navbar.classList.remove("show");
        }
    };
    return (
        <div className="navbar-wrapper" style={{ position: "fixed", top: hide ? "-100px" : "0", left: 0, width: "100%", transition: "top 0.5s ease", zIndex: 1, }}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
                        <img src="https://ik.imagekit.io/hmdcfponi/Logo?updatedAt=1758266481774" alt="Logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="https://ik.imagekit.io/hmdcfponi/toggle2?updatedAt=1758708124291" alt="Navbar Toggle" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" onClick={closeNavbar}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About" onClick={closeNavbar}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Libriri" onClick={closeNavbar}>Libriri</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Bazam_Zameer" onClick={closeNavbar}>Bazam Zameer</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Biogarafi" onClick={closeNavbar}>Biogarafi</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Pod_Cast" onClick={closeNavbar}>Pod Cast</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Regestration" onClick={closeNavbar}>Membership</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Ansar_Shabbir" onClick={closeNavbar}>Ansar Shabbir</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Team" onClick={closeNavbar}>Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact" onClick={closeNavbar}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="navicon">
                            <NavLink to="" className="link0" onClick={closeNavbar}><MdLanguage className="link" /></NavLink>
                            <NavLink to="" className="link0" onClick={closeNavbar}><FaHeadphones className="link" /></NavLink>
                            <NavLink to="" className="link0" onClick={closeNavbar}><FaRegUserCircle className="link" /></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
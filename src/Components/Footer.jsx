import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa6";
NavLink
const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 my-3">
                            <img src="https://ik.imagekit.io/hmdcfponi/Logo?updatedAt=1758266481774" alt="Footer Logo" className='img-fluid' />
                            <p>Discover the essence of faith and community at Siraj Islamic Center. We are dedicated to nurturing spiritual growth, fostering unity, and providing meaningful services for all. Guided by the Qur’an and Sunnah, we strive to inspire, educate, and connect hearts.</p>
                            <div className="icon">
                                <NavLink className="link" to=""><FaFacebook /></NavLink>
                                <NavLink className="link" to=""><FaInstagram /></NavLink>
                                <NavLink className="link" to=""><FaWhatsapp /></NavLink>
                                <NavLink className="link" to=""><IoLogoYoutube /></NavLink>
                                <NavLink className="link" to=""><FaTiktok /></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-3 my-3">
                            <h1>Contact Info</h1>
                            <p> 📍  Murree Road Bagnoter Abbottabad</p>
                            <p>🎧   +92 327 600 9702 </p>
                            <p>📞   +92 310 322 3633 </p>
                            <p>📩   info@molanazameer.com</p>
                            <p>🌐   molanazameer.com</p>
                        </div>
                        <div className="col-lg-3 my-3">
                            <h1>Quick Links</h1>
                            <NavLink className="link" to="">✔ About Us</NavLink> <br />
                            <NavLink className="link" to="">✔ Services</NavLink> <br />
                            <NavLink className="link" to="">✔ Donations</NavLink> <br />
                            <NavLink className="link" to="">✔ Projects</NavLink> <br />
                            <NavLink className="link" to="">✔ Blogs</NavLink> <br />
                            <NavLink className="link" to="">✔ Contact</NavLink>
                        </div>
                        <div className="col-lg-3 my-3">
                            <h1>Our Services</h1>
                            <NavLink className="link" to="">✔ Matrimonial Service</NavLink> <br />
                            <NavLink className="link" to="">✔ weekend school</NavLink> <br />
                            <NavLink className="link" to="">✔ Funeral Service</NavLink> <br />
                            <NavLink className="link" to="">✔ Legal Assistance</NavLink> <br />
                            <NavLink className="link" to="">✔ Counseling</NavLink> <br />
                            <NavLink className="link" to="">✔ Hajj Assistance</NavLink> <br />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
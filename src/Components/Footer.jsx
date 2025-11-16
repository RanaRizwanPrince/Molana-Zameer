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
                <img src="https://ik.imagekit.io/hmdcfponi/Contact/footer_border?updatedAt=1763202065007" className="w-100 img-fluid" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 my-3">
                            <img src="https://ik.imagekit.io/hmdcfponi/Logo?updatedAt=1758266481774" alt="Footer Logo" className='img-fluid' data-aos="flip-left" />
                            <p>Discover the essence of faith and community at Siraj Islamic Center. We are dedicated to nurturing spiritual growth, fostering unity, and providing meaningful services for all. Guided by the Qur’an and Sunnah, we strive to inspire, educate, and connect hearts.</p>
                            <div className="icon">
                                <NavLink target='_blank' className="link" to="https://www.facebook.com/molanazameer2025"><FaFacebook /></NavLink>
                                <NavLink target='_blank' className="link" to="https://www.instagram.com/mola.nazameer/"><FaInstagram /></NavLink>
                                <NavLink target='_blank' className="link" to="https://wa.link/r57e5m"><FaWhatsapp /></NavLink>
                                <NavLink target='_blank' className="link" to="https://www.youtube.com/@Zameer-e2t"><IoLogoYoutube /></NavLink>
                                <NavLink target='_blank' className="link" to="https://www.tiktok.com/@molanazameer"><FaTiktok /></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 my-3">
                            <h1>Contact Info</h1>
                            <p> 📍 College Road Shamim Market Near Fiaz Apartment Mandian Nari Road, Abbottabad</p>
                            <p>🎧  +92 327 600 9702 </p>
                            <p>📞  +92 313 510 4001 </p>
                            <p>📩  info@molanazameer.com</p>
                        </div>
                        <div className="col-lg-4 col-md-4 my-3">
                            <h1>Quick Links</h1>
                            <NavLink className="link" to="/">✔ Home</NavLink> <br />
                            <NavLink className="link" to="/About">✔ About Us</NavLink> <br />
                            <NavLink className="link" to="">✔ Zameer Libriri</NavLink> <br />
                            <NavLink className="link" to="">✔ Bazam Zameer</NavLink> <br />
                            <NavLink className="link" to="">✔ Biogarafi</NavLink> <br />
                            <NavLink className="link" to="">✔ Blogs</NavLink> <br />
                            <NavLink className="link" to="">✔ Pod Cast</NavLink><br />
                            <NavLink className="link" to="">✔ Team</NavLink><br />
                            <NavLink className="link" to="">✔ Contact Us</NavLink>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center">
                        <h6>© 2025 — Reserved by Smile Tech Solutions</h6>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer
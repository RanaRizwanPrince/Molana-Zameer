import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { Ri24HoursLine } from "react-icons/ri";
const Contact = () => {
    useEffect(() => {
        document.title = 'Contact | Molana Zameer – Get in Touch for Guidance and Inquiries';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Reach out to Molana Zameer for religious guidance, event details, or any inquiries. We are here to connect, assist, and spread the message of Islam."
            );
        }
    }, []);
    return (
        <>
            <section className="Contact1 text-center">
                <div className="container-fluid">
                    <h1>Welcome to Our Website</h1>
                    <p>Thank you for visiting our official platform. We warmly welcome you and truly appreciate your time. To connect with us, share your queries, or seek guidance, please visit our Contact Us page. We are always here to assist you with dedication and sincerity.</p>
                </div>
            </section>
            <section className="contact2">
                <div className="container-fluid">
                    <h5>Contact Us</h5>
                    <h1>Get In Touch</h1>
                    <p>Contact us for any inquiries, support, or collaboration. We're always ready to assist you.</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 my-2 d-flex align-items-stretch">
                            <div className="box">
                                <h3><FaLocationDot /> Our Location</h3>
                                <hr />
                                <h6>College Road Shamim Market Near Fiaz Apartment Mandian Nari Road, Abbottabad</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 my-2 d-flex align-items-stretch">
                            <div className="box">
                                <h3><FaPhone /> Phone us</h3>
                                <hr />
                                <h6>+92 327 600 9702</h6>
                                <h6>+92 313 510 4001</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 my-2 d-flex align-items-stretch">
                            <div className="box">
                                <h3><SiMinutemailer /> Email us</h3>
                                <hr />
                                <h6>info@molanazameer.com</h6>
                                <h6>it@molanazameer.com</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 my-2 d-flex align-items-stretch">
                            <div className="box">
                                <h3><Ri24HoursLine /> Work Hours</h3>
                                <hr />
                                <h6>Mon - Saturday</h6>
                                <h6>Sunday : Closed</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact3">
                <div className="container-fluid">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.2765637850546!2d73.23377501060013!3d34.19383131974996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3059f7a345c9%3A0x890cf7e40ea40914!2sDaewoo%20Express!5e0!3m2!1sen!2s!4v1763297994888!5m2!1sen!2s" width="100%" height="500px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            {/* <section className="contact4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Send a Message</h1>
                            <p className='lead'>Have a question, feedback, or inquiry? We’d love to hear from you! Please fill out the form below and send us a message. Our team will get back to you as soon as possible to assist you.</p>
                            <div class="input-group mb-3">
                                <input type="text" className='form-control' placeholder='Full Name' />
                            </div>
                            <div class="input-group mb-3">
                                <input type="email" className='form-control' placeholder='Email' />
                            </div>
                            <div class="input-group mb-3">
                                <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='Message'></textarea>
                            </div>
                            <div class="d-grid gap-2">
                                <button className="btn" type="button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}
export default Contact
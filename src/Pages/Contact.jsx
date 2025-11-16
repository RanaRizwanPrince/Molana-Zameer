import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { Ri24HoursLine } from "react-icons/ri";
const Contact = () => {
    // FORM STATES
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // POPUP CONTROL
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    // LOADING
    const [loading, setLoading] = useState(false);
    const handleSubmit = () => {
        if (!name || !email || !message) {
            setPopupMessage("Please Fill All Fields Before Submitting!");
            setShowPopup(true);
            return;
        }
        setLoading(true); // Start Spinner
        setTimeout(() => {
            setLoading(false); // Stop Spinner
            setPopupMessage("Your Message Has Been Sent Successfully!");
            setShowPopup(true);
            // CLEAR FORM
            setName("");
            setEmail("");
            setMessage("");
        }, 5000); // 5 seconds
    };
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
            {/* POPUP MODAL */}
            {showPopup && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 }} >
                    <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", width: "90%", maxWidth: "400px", textAlign: "center", boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" }} >
                        <h4>{popupMessage}</h4>
                        <button className="btn btn-danger mt-3" onClick={() => setShowPopup(false)} >  Close </button>
                    </div>
                </div>
            )}
            {/* MAIN PAGE */}
            <section className="Contact1 text-center">
                <div className="container-fluid">
                    <h1>Welcome to Our Website</h1>
                    <p>Thank you for visiting our official platform. We warmly welcome you...</p>
                </div>
            </section>
            <section className="contact2">
                <div className="container-fluid">
                    <h5>Contact Us</h5>
                    <h1>Get In Touch</h1>
                    <p>Contact us for any inquiries, support, or collaboration...</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 my-2 d-flex align-items-stretch">
                            <div className="box">
                                <h3><FaLocationDot /> Our Location</h3>
                                <hr />
                                <h6>College Road Shamim Market...</h6>
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
                    <iframe src="https://www.google.com/maps/embed?pb=..."
                        width="100%" height="500px" style={{ border: 0 }} loading="lazy"></iframe>
                </div>
            </section>
            <section className="contact4">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 my-2">
                            <h1>Send a Message</h1>
                            <p className='lead'>Have a question or inquiry? Fill out the form below.</p>
                            {/* LOADING SPINNER */}
                            {loading && (
                                <div className="text-center mb-3">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="mt-2">Please wait...</p>
                                </div>
                            )}
                            <div className="input-group mb-3">
                                <input type="text" className='form-control' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} disabled={loading} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                            </div>
                            <div className="input-group mb-3">
                                <textarea cols="30" rows="10" className='form-control' placeholder='Message' value={message} disabled={loading} onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="button" onClick={handleSubmit} disabled={loading}  >  {loading ? "Processing..." : "Submit"}  </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2 text-center">
                            <img src="https://ik.imagekit.io/hmdcfponi/Contact/contact1"
                                className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contact;
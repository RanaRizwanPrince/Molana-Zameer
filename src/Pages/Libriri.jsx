import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiDailymotion } from "react-icons/si";
import LibririCarousel from './LibririCarousel';
import LibririBookle from './LibririBookle';
const Libriri = () => {
    const [activeTab, setActiveTab] = useState("Book"); // default tab
    // Placeholder text based on active tab
    const getPlaceholder = () => {
        switch (activeTab) {
            case "Book":
                return "Enter book name";
            case "Author":
                return "Enter author name";
            case "Publisher":
                return "Enter publisher name";
            default:
                return "Search here...";
        }
    };
    return (
        <>
            <section className="Libriri1 text-center">
                <img src="https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/1?updatedAt=1759906546566" alt="Footer Logo" className="img-fluid" />
                <h1>Explore the World Molana Zameer of Knowledge with Library</h1>
                <p> Libriri brings you closer to books, stories, and knowledge that inspire growth, spark curiosity, and brighten every day </p>
                <div className="box">
                    {/* Tabs */}
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "15px", marginTop: "20px" }}>
                        {["Book", "Author", "Publisher"].map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: activeTab === tab ? "#DB9933" : "transparent", color: activeTab === tab ? "#fff" : "#DB9933", border: "1px solid #DB9933", padding: "8px 15px", borderRadius: "5px", cursor: "pointer", transition: "0.3s" }}>{tab}</button>
                        ))}
                    </div>
                    {/* Search Bar */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <input type="text" placeholder={getPlaceholder()} style={{ width: "300px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px 0 0 5px", outline: "none" }} />
                        <button style={{ background: "#DB9933", color: "white", border: "none", padding: "10px 15px", borderRadius: "0 5px 5px 0", cursor: "pointer" }}><IoSearchOutline /></button>
                    </div>
                </div>
            </section>
            <section className="Libriri2">
                <div className="container-fluid">
                    <h1>Exceptional Service & Guaranteed Confidence!</h1>
                    <p>Shop confidently! We offer a Money Back Guarantee with easy Return & Refund and Secure Payment. Our Quality Support is here 24/7, and you get exclusive Daily Offers just for subscribing. Experience hassle-free shopping today!</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <div className="icon">
                                    <FaShippingFast />
                                </div>
                                <h1>Return & refund</h1>
                                <p>Money back guarantee</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <div className="icon">
                                    <RiSecurePaymentFill />
                                </div>
                                <h1>Secure Payment</h1>
                                <p>30% off by subscribing</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <div className="icon">
                                    <MdOutlineSupportAgent />
                                </div>
                                <h1>Quality Support</h1>
                                <p>Always online 24/7</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <div className="icon">
                                    <SiDailymotion />
                                </div>
                                <h1>Daily Offers</h1>
                                <p>20% off by subscribing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Libriri3">
                <div className="container-fluid">
                    <div className="col-lg-10 offset-lg-1">
                        <h1>Top Categories Book</h1>
                        <p>Discover our Top Categories Books, carefully selected to guide readers through knowledge, faith, and inspiration. From Islamic teachings and history to thought-provoking literature, these books highlight the wisdom of renowned scholars and offer timeless lessons for every reader.</p>
                    </div>
                    <LibririCarousel />
                </div>
            </section>
            <LibririBookle />
        </>
    )
}
export default Libriri
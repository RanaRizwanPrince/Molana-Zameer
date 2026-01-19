import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Bazam_Featured_Author from './Bazam_Featured_Author'
import { BazamData } from "../Utils/Most_Popular_EpisodesAPI";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";

const Bazam_Zameer = () => {
    const [filter, setFilter] = useState("2025");
    useEffect(() => {
        document.title = 'Bazam Zameer | Molana Zameer – A Circle of Faith and Unity';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Join Bazam Zameer, an initiative by Molana Zameer, dedicated to spreading Islamic teachings, unity, and community engagement through knowledge and guidance."
            );
        }
    }, []);
    return (
        <>
            <section className="Bazam_Zameer1 text-center">
                <div className="container-fluid">
                    <img src="https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/1?updatedAt=1759906963001" className="img-fluid" />
                    <h1>Bazam Zameer</h1>
                    <p className='lead'>Bazam Zameer is a platform dedicated to spreading knowledge, unity, and positive change under the guidance of Molana Zameer. It inspires hearts, connects minds, and promotes the true message of peace and faith</p>
                </div>
            </section>
            <section className="Bazam_Zameer2">
                <div className="container-fluid">
                    <h1>All Conferences   Inspiring & Insightful Gatherings</h1>
                    <p>This section showcases all our memorable conferences! Here, you can explore past and upcoming academic and thought-provoking events. Each conference offers knowledge, guidance, and inspiration. Stay with us and experience the highlights of these meaningful gatherings!</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 my-2 d-flex align-items-stretch">
                            <div className="card">
                                <img src="https://ik.imagekit.io/hmdcfponi/Conferences/1?updatedAt=1765190181410" className="img-fluid img-thumbnail" alt="..." />
                                <div className="card-body">
                                    <h5>Yadgar Aslaf Conference</h5>
                                    <p><b>Yadgar Aslaf Conference</b> was successfully held on <b>October 30, 2025</b>, at Jalal Baba Auditorium, Abbottabad. The event offered deep knowledge, spiritual inspiration, and valuable insights into the character and services of our ancestors. It left a lasting impact on attendees and broadened their intellectual perspective. Read more below for details.</p>
                                    <NavLink target='_rizwan' to="https://youtube.com/playlist?list=PLBfasRK6U7Q_XlFMX5XXdbJOuBKgR8xse&si=9alMlnS3FpW11Eor" className="link">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 my-2 d-flex align-items-stretch">
                            <div className="card">
                                <img src="https://ik.imagekit.io/hmdcfponi/Conferences/2?updatedAt=1765191448137" className="img-fluid img-thumbnail" alt="..." />
                                <div className="card-body">
                                    <h5>Allama Shabbir Ahmed Usmani Conference</h5>
                                    <p><b>Allama Shabbir Ahmed Usmani Conference</b> will be organized by Bazm Zameer Abbottabad on <b>December 13, 2025</b>. The event pays tribute to Allama Usmani’s scholarly legacy, enlightened thinking, and national service. It will bring together scholars, students, and researchers, providing guidance, research opportunities, and meaningful dialogue. The program promises to be an informative, dignified, and impactful experience.</p>
                                    <NavLink target='_rizwan' to="https://youtube.com/playlist?list=PLBfasRK6U7Q9o8Q1_JAijefVqbUEyTpgy&si=emoVYol1kQ95lC-l" className="link">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 my-2 d-flex align-items-stretch">
                            <div className="card">
                                <img src="https://ik.imagekit.io/hmdcfponi/Conferences/3?updatedAt=1765196033174" className="img-fluid img-thumbnail" alt="..." />
                                <div className="card-body">
                                    <h5>Ghulam Yahya Hashmi Conference</h5>
                                    <p>The <b>Ghulam Yahya Hashmi Conference</b> is scheduled for <b>July 2026</b>, with the final date to be <b>Announced Soon</b>. This upcoming event will highlight his intellectual legacy, inspiring thought, and contributions to society. Scholars, students, and participants will gather for meaningful dialogue, learning, and reflection. More details will be shared shortly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Bazam_Zameer3">
                <div className="container-fluid">
                    {/* Heading */}
                    <div className="content">
                        <h1>List of all past, present and upcoming programs of Baaz-e-Zaamir</h1>
                        <p>Details of all past, ongoing, and upcoming academic and intellectual programs, conferences, and speech competitions organized by Baaz-e-Zamir have been compiled here, so that readers and listeners can get complete information in one place.</p>
                    </div>
                    {/* 🔥 Filter Buttons */}
                    <div className="content mb-4">
                        <button onClick={() => setFilter("all")} className="btn btn-dark me-2">All</button>
                        <button onClick={() => setFilter("2025")} className="btn btn-dark me-2">2025</button>
                        <button onClick={() => setFilter("2026")} className="btn btn-dark me-2">2026</button>
                        <button onClick={() => setFilter("2027")} className="btn btn-dark">2027</button>
                    </div>
                    {/* Cards */}
                    <div className="content">
                        <div className="row">
                            {BazamData.filter(item => filter === "all" || item.category === filter).map((data, index) => (
                                <div key={index} className="col-lg-2 col-md-3 my-3 d-flex align-items-stretch">
                                    <div className="card">
                                        <img src={data.img} className="img-fluid img-thumbnail" />
                                        <div className="card-body">
                                            <h5>{data.h1}</h5>
                                            <p>{data.p}</p>
                                            <div className="box">
                                                <NavLink to={data.Facebook} target="_Rizwan" className="link"><FaFacebook /></NavLink>
                                                <NavLink to={data.Instagram} target="_Rizwan" className="link"><RiInstagramFill /></NavLink>
                                                <NavLink to={data.Youtube} target="_Rizwan" className="link"><FaYoutube /></NavLink>
                                                <NavLink to={data.Whatsapp} target="_Rizwan" className="link"><IoLogoWhatsapp /></NavLink>
                                                <NavLink to={data.TikTok} target="_Rizwan" className="link"><AiFillTikTok /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Bazam_Featured_Author />
            <br />
        </>
    )
}
export default Bazam_Zameer;
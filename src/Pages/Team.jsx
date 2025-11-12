import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Teamsection } from "../Utils/Most_Popular_EpisodesAPI";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Team = () => {
    useEffect(() => {
        document.title = 'Team | Molana Zameer – Dedicated Members Behind Our Mission of Faith';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Meet the dedicated team working with Molana Zameer to spread Islamic knowledge, unity, and peace through education and community service."
            );
        }
    }, []);
    return (
        <>
            <section className="team1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 my-3">
                            <h1>Welcome to Our Team Page</h1>
                            <h5>Meet Our Dedicated Team</h5>
                            <p>At Molana Zameer Foundation, our team is committed to spreading knowledge, guiding the youth, and serving the community with sincerity. Each member plays a vital role in carrying forward our vision of unity, faith, and positive change.</p>
                            <p>Our team combines experience, dedication, and passion to achieve meaningful results. Together, we work to inspire, educate, and support everyone who visits our foundation, ensuring a positive impact in every initiative we undertake.</p>
                            <NavLink className="link" to="">Start A Journey</NavLink>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-4 my-3">
                            <img src="https://ik.imagekit.io/hmdcfponi/Team/1?updatedAt=1762944600521" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="team2">
                <div className="container-fluid">
                    <h1>Our Professional Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odio quam laudantium ullam optio esse ut sapiente fuga aliquam non illum sed a, sint quod deserunt unde dignissimos quis aperiam repudiandae magnam accusamus molestiae rerum! Repellat, doloribus, velit qui eligendi sunt laudantium similique exercitationem cum earum sed facilis voluptatibus eveniet illo. Qui corrupti quos.</p>
                    <div className="row">
                        {Teamsection.map((data, index) => (
                            <>
                                <div key={index} className="col-lg-4 col-md-6 my-2">
                                    <div class="card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src={data.img} class="img-fluid rounded-start" />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.paragraph}</p>
                                                    <div className="icon">
                                                        <NavLink className="link" to=""><FaFacebook /></NavLink>
                                                        <NavLink className="link" to=""><FaInstagram /></NavLink>
                                                        <NavLink className="link" to=""><FaWhatsapp /></NavLink>
                                                        <NavLink className="link" to=""><IoLogoLinkedin /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Team
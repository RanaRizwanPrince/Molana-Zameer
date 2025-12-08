import React, { useEffect } from 'react'
import Most_Popular_EpisodesAPI from "../Utils/Most_Popular_EpisodesAPI";
const Pod_Cast = () => {
    useEffect(() => {
        document.title = 'Podcast | Molana Zameer – Listen to Inspiring Islamic Talks & Discussions';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Tune in to Molana Zameer’s podcasts featuring insightful Islamic talks, spiritual discussions, and lessons that enlighten hearts and minds."
            );
        }
    }, []);
    return (
        <>
            <section className="Pod_Cast1">
                <div className="container-fluid">
                    <img src="https://ik.imagekit.io/hmdcfponi/PodCast/logo?updatedAt=1762524715582" alt="" />
                    <h1>Welcome to Molana Zameer’s Podcast</h1>
                    <p>Experience the spiritual wisdom of Molana Zameer through enlightening talks and heartfelt discussions. Each episode is filled with guidance, reflection, and inspiration to strengthen your faith and bring peace to your soul.</p>
                </div>
            </section>
            <section className="Pod_Cast2">
                <div className="container-fluid">
                    <div className="content">
                        <h1>Featured Islamic Podcasts</h1>
                        <p>Explore inspiring podcasts featuring Molana Zameer and distinguished scholars sharing deep Islamic knowledge, life guidance, and spiritual reflections for all listeners.</p>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 d-flex align-items-center my-2" data-aos="fade-up">
                                <div className="box">
                                    <h4>Zameer Voice of Wisdom</h4>
                                    <p>Molana Zameer shares enlightening talks on faith, character building, and real-life Islamic teachings that guide today’s generation toward truth.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-center my-2" data-aos="fade-up">
                                <div className="box">
                                    <h4>Ulema Discussion Panel</h4>
                                    <p>A group of respected scholars engage in thoughtful conversations on modern Islamic issues, guiding listeners toward spiritual understanding and unity.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-center my-2" data-aos="fade-up">
                                <div className="box">
                                    <h4>Youth and Islam</h4>
                                    <p>Focused on empowering the youth, this podcast discusses challenges faced by young Muslims and offers Islamic solutions with motivational insights.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-center my-2" data-aos="fade-up">
                                <div className="box">
                                    <h4>Quranic Reflections</h4>
                                    <p>A beautiful series explaining Quranic verses with deep meanings, helping listeners connect their hearts to Allah through knowledge and reflection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Pod_Cast3">
                <div className="container-fluid">
                    <h6 data-aos="fade-up">Our Episodes</h6>
                    <h1 data-aos="fade-up">Most Popular Episodes</h1>
                    <hr data-aos="fade-up" />
                    <div className="row">
                        {Most_Popular_EpisodesAPI.map((data, index) => (
                            <>
                                <div className="col-lg-2 col-md-4 col-sm-6 my-3 d-flex align-items-stretch" data-aos="flip-right">
                                    <div className="card">
                                        <img src={data.img} className="img-fluid" alt="..." />
                                        <div class="card-body">
                                            <h5>{data.title}</h5>
                                            <p>{data.description}</p>
                                            <small>{data.date}</small>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}
export default Pod_Cast
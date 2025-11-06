import React, { useEffect } from 'react'
import Bazam_Evants from './Bazam_Evants'
import Bazam_Featured_Author from './Bazam_Featured_Author'
const Bazam_Zameer = () => {
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
                <div className="container-fluid  text-center">
                    <h1 data-aos="fade-up">Digital Resources</h1>
                    <p className='lead' data-aos="fade-in">Digital Resources provide easy access to Molana Zameer’s speeches, writings, and educational materials — helping followers learn, share, and stay connected in today’s digital world.</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch">
                            <div className="box" data-aos="flip-left">
                                <h3>eBooks</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe asperiores necessitatibus eligendi, nostrum ut quidem et fugit magni impedit.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch">
                            <div className="box" data-aos="flip-left">
                                <h3>Audiobooks</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe asperiores necessitatibus eligendi, nostrum ut quidem et fugit magni impedit.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch">
                            <div className="box" data-aos="flip-right">
                                <h3>Videos</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe asperiores necessitatibus eligendi, nostrum ut quidem et fugit magni impedit.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch">
                            <div className="box" data-aos="flip-right">
                                <h3>Magazines</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe asperiores necessitatibus eligendi, nostrum ut quidem et fugit magni impedit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Bazam_Zameer3">
                <div className="container-fluid">
                    <h1>News and Events</h1>
                    <p className='lead'>Stay updated with the latest news and events of Molana Zameer’s mission. Explore upcoming gatherings, community activities, and spiritual sessions that aim to spread knowledge, unity, and peace among people.</p>
                    <hr />
                    <Bazam_Evants />
                </div>
            </section>
            <section className="Bazam_Zameer4">
                <Bazam_Featured_Author />
            </section>
        </>
    )
}
export default Bazam_Zameer
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
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
                <div className="container-fluid">
                    <h1>All Conferences   Inspiring & Insightful Gatherings</h1>
                    <p>This section showcases all our memorable conferences! Here, you can explore past and upcoming academic and thought-provoking events. Each conference offers knowledge, guidance, and inspiration. Stay with us and experience the highlights of these meaningful gatherings!</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 my-2 d-flex align-items-stretch">
                            <div class="card">
                                <img src="https://ik.imagekit.io/hmdcfponi/Conferences/1?updatedAt=1765190181410" className="img-fluid img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <h5>Yadgar Aslaf Conference</h5>
                                    <p><b>Yadgar Aslaf Conference</b> was successfully held on <b>October 30, 2025</b>, at Jalal Baba Auditorium, Abbottabad. The event offered deep knowledge, spiritual inspiration, and valuable insights into the character and services of our ancestors. It left a lasting impact on attendees and broadened their intellectual perspective. Read more below for details.</p>
                                    <NavLink target='_rizwan' to="https://www.youtube.com/@Zameer-e2t/playlists" className="link">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 my-2 d-flex align-items-stretch">
                            <div class="card">
                                <img src="https://ik.imagekit.io/hmdcfponi/Conferences/2?updatedAt=1765191448137" className="img-fluid img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <h5>Allama Shabbir Ahmed Usmani Conference</h5>
                                    <p><b>Allama Shabbir Ahmed Usmani Conference</b> will be organized by Bazm Zameer Abbottabad on <b>December 13, 2025</b>. The event pays tribute to Allama Usmani’s scholarly legacy, enlightened thinking, and national service. It will bring together scholars, students, and researchers, providing guidance, research opportunities, and meaningful dialogue. The program promises to be an informative, dignified, and impactful experience.</p>
                                    <NavLink target='_rizwan' to="https://youtube.com/@zameer-e2t?si=xwpa4yxDYZXo7sS_" className="link">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 my-2 d-flex align-items-stretch">
                            <div class="card">
                                <img src="https://ik.imagekit.io/hmdcfponi/Conferences/3?updatedAt=1765196033174" className="img-fluid img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <h5>Ghulam Yahya Hashmi Conference</h5>
                                    <p>The <b>Ghulam Yahya Hashmi Conference</b> is scheduled for <b>July 2026</b>, with the final date to be <b>Announced Soon</b>. This upcoming event will highlight his intellectual legacy, inspiring thought, and contributions to society. Scholars, students, and participants will gather for meaningful dialogue, learning, and reflection. More details will be shared shortly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Bazam_Zameer4">
                <Bazam_Featured_Author />
            </section>
        </>
    )
}
export default Bazam_Zameer
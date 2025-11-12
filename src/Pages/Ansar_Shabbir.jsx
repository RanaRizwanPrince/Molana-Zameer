import React, { useEffect } from 'react'
import Ansar_e_ShabbirForm from "./Ansar_e_ShabbirForm";
const Ansar_Shabbir = () => {
    useEffect(() => {
        document.title = 'Ansar Shabbir | Molana Zameer – A Dedicated Voice for Islamic Knowledge';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Discover Ansar Shabbir’s contributions under the guidance of Molana Zameer, promoting Islamic education, unity, and the message of peace through knowledge and service."
            );
        }
    }, []);
    return (
        <>
            <section className="as1">
                <div className="container-fluid">
                    <img src="https://ik.imagekit.io/hmdcfponi/Ansar-e-Shabbir/logo?updatedAt=1762784174149" className="img-fluid" />
                    <h1>Welcome to Ansar Shabbir!</h1>
                    <p className='lead'>Explore our page to discover amazing content and updates.</p>
                </div>
            </section>
            <section className="as2">
                <div className="container-fluid">
                    <h1>Ansar-e-Shabbir  Bearers of Allama Shabbir Ahmed Usmani’s Vision</h1>
                    <p>Ansar-e-Shabbir represents the true spirit of Allama Shabbir Ahmed Usmani’s mission — a movement rooted in faith, knowledge, and unity. Inspired by his vision of an Islamic and ideological Pakistan, Ansar-e-Shabbir strives to preserve the moral, spiritual, and intellectual legacy he left behind. This group serves as torchbearers of his teachings, promoting education, Islamic values, and national integrity. Through dedication and collective effort, Ansar-e-Shabbir continues to uphold Allama Usmani’s dream of a strong, united, and faith-driven nation.</p>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-7 col-md-7 my-2 text-start">
                            <h1>Ansar-e-Shabbir</h1>
                            <p>1, Loyal to the mission of Allama Shabbir Ahmad Usmani and the bearers of his intellectual heritage.</p>
                            <p>2, Ansar-e-Shabbir, A metaphor for knowledge and action, faith and unity</p>
                            <p>3, Ansar-e-Shabbir, The ideological guardian of the establishment of Pakistan, the guardian of the Islamic constitution.</p>
                            <p>4, Ansar-e-Shabbir, The practical continuation of Usmani’s thought, a pledge of unity of the Ummah</p>
                            <p>5, Ansar-e-Shabbir, The caravan that wants to connect Pakistan with its intellectual foundations</p>
                            <p>6, Ansar-e-Shabbir, The new connection between Sharia, politics, and the unity of the Ummah</p>
                            <p>7, Ansar-e-Shabbir, Unity of the Ummah, the system of Islam Unity, sacrifice, perseverance this is the message of Ansar-e-Shabbir!</p>
                            <h1>Slogans</h1>
                            <p>Unity is our message, Shabbir is our Imam <br />
                                Long live the thought of Usmani! Long live the Ansar-e-Shabbir <br />
                                We are the Ansar-e-Shabbir - the soldiers of religion and constitution <br />
                                We are the Ansar of Shabbir - the mourners of religion and constitution! <br />
                                The pen is our weapon, the thought of Shabbir is our motto</p>
                        </div>
                        <div className="col-lg-5 col-md-5 my-2">
                            <img src="https://ik.imagekit.io/hmdcfponi/Ansar-e-Shabbir/1?updatedAt=1762774668684" alt="Image" className="w-100 img-thumbnail" />
                        </div>
                    </div>
                </div>
            </section>
            <Ansar_e_ShabbirForm />
        </>
    )
}
export default Ansar_Shabbir
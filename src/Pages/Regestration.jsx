import React from 'react'
import { IoBook } from "react-icons/io5";
import { FaMosque } from "react-icons/fa";
import { AiFillOpenAI } from "react-icons/ai";
import { SiHelpscout } from "react-icons/si";
import MembershipForm from './MembershipForm';
const Regestration = () => {
    const membership = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Regestration/4?updatedAt=1760962751630",
            h1: "Pakistan Flags",
            paragraph: "A huge well done to the dedicated 3rd Position Holder! Your efforts are rewarded with a high-quality Laptop prize.",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Regestration/2?updatedAt=1760962753016",
            h1: "Maulana Shabbir Ahmed Usmani",
            paragraph: "Heartiest congratulations to the 1st Position Holder! Your outstanding achievement earns you a brand-new, powerful Laptop for future success.",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Regestration/1?updatedAt=1760962753584",
            h1: "Allama Muhammad Yousuf Banuri",
            paragraph: "Congratulations to the brilliant 2nd Position Holder! We honor your hard work by presenting you with a state-of-the-art Laptop.",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Regestration/3?updatedAt=1760962754353",
            h1: "Maulana Zameer Ahmed Qureshi",
            paragraph: "A huge well done to the dedicated 3rd Position Holder! Your efforts are rewarded with a high-quality Laptop prize.",
        },
    ]
    return (
        <>
            <section className="Rhead">
                <div className="container-fluid">
                    <div className="col-lg-8 offset-lg-2">
                        <img src="https://ik.imagekit.io/hmdcfponi/Regestration/logo?updatedAt=1760984823885" alt="Logo" className='img-fluid' data-aos="fade-up" />
                        <h1 data-aos="fade-up">Welcome to the Membership Community</h1>
                        <p data-aos="fade-up">We warmly welcome you to join the blessed circle of knowledge and guidance under the teachings of Molana Zameer. By becoming a member, you take a step toward spiritual growth, unity, and spreading the message of truth and compassion.</p>
                    </div>
                </div>
            </section>
            <section className="Regestration1">
                <div className="container-fluid">
                    <div className="row py-3">
                        {membership.map((data, index) => (
                            <>
                                <div key={index} className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                                    <div class="card">
                                        <img src={data.img} className='w-100 img-thumbnail' />
                                        <div class="card-body">
                                            <h5 data-aos="fade-up">{data.h1}</h5>
                                            <p data-aos="fade-up">{data.paragraph}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
            <section className="Regestration3">
                <div className="container-fluid">
                    <div className="col-lg-6">
                        <h1 data-aos="fade-up">Our Center</h1>
                        <p data-aos="fade-up">Established in 1987 to serve people who are in need of funds or education. We are developing dolor sit amet. Click edit button to change this text. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,Consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
            <section className="Regestration4">
                <div className="container-fluid">
                    <div className="text-center">
                        <h6 data-aos="fade-up">Serving Humanity</h6>
                        <h1 data-aos="fade-up">Our Services</h1>
                        <p data-aos="fade-up">At Smile Centre, we provide Quranic education in both modern and Rohini styles, so that every person is enlightened with Quranic knowledge.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-3" data-aos="fade-up">
                            <div className="box">
                                <div className="icon"><IoBook /></div>
                                <h3>Quran Learning</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam assumenda rem deserunt ab placeat iste nobis tempora enim laborum repudiandae excepturi accusantium eum repellat! Officia placeat tenetur earum laudantium?</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3" data-aos="fade-up">
                            <div className="box">
                                <div className="icon"><AiFillOpenAI /></div>
                                <h3>Chartiy Service</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam assumenda rem deserunt ab placeat iste nobis tempora enim laborum repudiandae excepturi accusantium eum repellat! Officia placeat tenetur earum laudantium?</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3" data-aos="fade-up">
                            <div className="box">
                                <div className="icon"><FaMosque /></div>
                                <h3>Mosque Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam assumenda rem deserunt ab placeat iste nobis tempora enim laborum repudiandae excepturi accusantium eum repellat! Officia placeat tenetur earum laudantium?</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3" data-aos="fade-up">
                            <div className="box">
                                <div className="icon"><SiHelpscout /></div>
                                <h3>Help Poor's</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam assumenda rem deserunt ab placeat iste nobis tempora enim laborum repudiandae excepturi accusantium eum repellat! Officia placeat tenetur earum laudantium?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MembershipForm />
        </>
    )
}
export default Regestration
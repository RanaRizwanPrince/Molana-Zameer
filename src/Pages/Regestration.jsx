import React from 'react'
import { IoBook } from "react-icons/io5";
import { FaMosque } from "react-icons/fa";
import { AiFillOpenAI } from "react-icons/ai";
import { SiHelpscout } from "react-icons/si";
import MembershipForm from './MembershipForm';
const Regestration = () => {
    return (
        <>
            <section className="Regestration1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <img src="https://ik.imagekit.io/hmdcfponi/Regestration/main-right?updatedAt=1760512911427" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='Regestration2'>
                <div className="container-fluid">
                    <div className="col-lg-8 offset-lg-3 col-xs-12">
                        <div className="content">
                            <h1>The Foundation of Faith in Islam</h1>
                            <p>This image beautifully represents the core structure of Islam through its sacred pillars — guiding every Muslim toward faith, discipline, and devotion. Each pillar — from prayer and fasting to charity and pilgrimage — reflects a deep commitment to spiritual growth and unity under one God.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-3">
                            <div className="box">
                                <h1>Salah</h1>
                                <p>Salat ipsum dolor sit amet, consectetur adipiscing. dolor sit amet, consectetur adipiscing.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3">
                            <div className="box">
                                <h1>Fasting</h1>
                                <p>Salat ipsum dolor sit amet, consectetur adipiscing. dolor sit amet, consectetur adipiscing.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3">
                            <div className="box">
                                <h1>Zakah</h1>
                                <p>Salat ipsum dolor sit amet, consectetur adipiscing. dolor sit amet, consectetur adipiscing.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3">
                            <div className="box">
                                <h1>Hajj</h1>
                                <p>Salat ipsum dolor sit amet, consectetur adipiscing. dolor sit amet, consectetur adipiscing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Regestration3">
                <div className="container-fluid">
                    <div className="col-lg-6">
                        <h1>Our Center</h1>
                        <p>Established in 1987 to serve people who are in need of funds or education. We are developing dolor sit amet. Click edit button to change this text. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,Consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
            <section className="Regestration4">
                <div className="container-fluid">
                    <div className="text-center">
                        <h6>Serving Humanity</h6>
                        <h1>Our Services</h1>
                        <p>At Smile Centre, we provide Quranic education in both modern and Rohini styles, so that every person is enlightened with Quranic knowledge.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-3">
                            <div className="box">
                                <div className="icon"><IoBook /></div>
                                <h3>Quran Learning</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam assumenda rem deserunt ab placeat iste nobis tempora enim laborum repudiandae excepturi accusantium eum repellat! Officia placeat tenetur earum laudantium?</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3">
                            <div className="box">
                                <div className="icon"><AiFillOpenAI /></div>
                                <h3>Chartiy Service</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam assumenda rem deserunt ab placeat iste nobis tempora enim laborum repudiandae excepturi accusantium eum repellat! Officia placeat tenetur earum laudantium?</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3">
                            <div className="box">
                                <div className="icon"><FaMosque /></div>
                                <h3>Mosque Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam assumenda rem deserunt ab placeat iste nobis tempora enim laborum repudiandae excepturi accusantium eum repellat! Officia placeat tenetur earum laudantium?</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3">
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
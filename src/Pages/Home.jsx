import React from 'react'
import HeadSlider from '../Components/HeadSlider'
import { PiStudentBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
const Home = () => {
    const Home3 = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Home/Service/1?updatedAt=1758360780615",
            h1: "Quran Learning",
            paragraph: "This is Photoshop's version of Lorem Ipsum. proin gravida liton mia velit auctor aliquet. Aenean sollicitudin,",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Home/Service/2?updatedAt=1758360780222",
            h1: "Mosque Development",
            paragraph: "This is Photoshop's version of Lorem Ipsum. proin gravida liton mia velit auctor aliquet. Aenean sollicitudin,",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Home/Service/3?updatedAt=1758360780348",
            h1: "Islamic Center",
            paragraph: "This is Photoshop's version of Lorem Ipsum. proin gravida liton mia velit auctor aliquet. Aenean sollicitudin,",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Home/Service/3?updatedAt=1758360780348",
            h1: "Marriage Islamic",
            paragraph: "This is Photoshop's version of Lorem Ipsum. proin gravida liton mia velit auctor aliquet. Aenean sollicitudin,",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Home/Service/5?updatedAt=1758360780443",
            h1: "Funeral Services",
            paragraph: "This is Photoshop's version of Lorem Ipsum. proin gravida liton mia velit auctor aliquet. Aenean sollicitudin,",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Home/Service/6?updatedAt=1758360780173",
            h1: "Funeral Services",
            paragraph: "This is Photoshop's version of Lorem Ipsum. proin gravida liton mia velit auctor aliquet. Aenean sollicitudin,",
        },
    ]
    return (
        <>
            {/* <HeadSlider /> */}
            <section className="head">
                <div className="container-fluid">
                    <div className="col-lg-8 offset-lg-2">
                        <img src="https://ik.imagekit.io/hmdcfponi/Logo?updatedAt=1758266481774" className='img-fluid' alt="Main Logo" />
                        <img src="https://ik.imagekit.io/hmdcfponi/Home/banner-ayat?updatedAt=1758795387573" alt="Banner Ayat" className='img-fluid' />
                        <h1>O Allah, send blessings upon Muhammad and the family of Muhammad.</h1>
                        <p className='lead'>Welcome to Molana Zameer’s website, a place of peace, knowledge, and blessings. Here, every visitor is greeted with prayers, inspiration, and a beautiful spiritual atmosphere that refreshes the heart and soul.</p>
                    </div>
                </div>
            </section>
            <section className="Pillars">
                <div className="container-fluid">
                    <h1 data-aos="fade-up">5 PillARS OF ISLAM</h1>
                    <p className='lead' data-aos="fade-in">Lorem ipsum dolor sit amet consectetur. Eget ornare ac eleifend leo mauris suspendisse. Bibendum suspendisse proin aliquet porttitor.</p>
                    <div className="row">
                        <div className="row text-center">
                            <div className="col-6 col-md my-2 d-flex align-items-stretch">
                                <div className="box" data-aos="flip-left">
                                    <h3>Shahada (Faith)</h3>
                                    <p>Shahada is belief in Allah’s oneness and Muhammad ﷺ as His final Messenger.</p>
                                </div>
                            </div>
                            <div className="col-6 col-md my-2 d-flex align-items-stretch">
                                <div className="box" data-aos="flip-left">
                                    <h3>Salah (Prayer)</h3>
                                    <p>Salah are five daily prayers connecting Muslims with Allah, promoting discipline and spirituality.</p>
                                </div>
                            </div>
                            <div className="col-6 col-md my-2 d-flex align-items-stretch">
                                <div className="box" data-aos="flip-right">
                                    <h3>Zakat (Charity)</h3>
                                    <p>Zakat purifies wealth by helping the poor, reducing inequality, and supporting community welfare.</p>
                                </div>
                            </div>
                            <div className="col-6 col-md my-2 d-flex align-items-stretch">
                                <div className="box" data-aos="flip-left">
                                    <h3>Sawm (Fasting)</h3>
                                    <p>Sawm in Ramadan builds patience, self-control, gratitude, and empathy for the less fortunate.</p>
                                </div>
                            </div>
                            <div className="col-6 col-md my-2 d-flex align-items-stretch">
                                <div className="box" data-aos="flip-right">
                                    <h3>Hajj (Pilgrimage)</h3>
                                    <p>Hajj is pilgrimage to Makkah, symbolizing unity, equality, and devotion among all Muslims.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home1">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 my-2">
                            <img className='img img-fluid' data-aos="fade-up" src="https://ik.imagekit.io/hmdcfponi/Home/title?updatedAt=1758351999181" alt="About Image 01" />
                            <h1 data-aos="flip-up">Welcome to Molana Zameer Center for Muslims!</h1>
                            <p data-aos="flip-down">Zameer is the know how to pursue pleasure rationally encounter consequences that are extremely painful. nor again is there anyone who loves or pursue or desires too btain pain of itself, because it is pain, but because</p>
                            <h3 data-aos="flip-left">Molana Zameer Center for Muslims to Achieve Spiritual Goals</h3>
                            <p data-aos="flip-right">Consectetur adipisicing elit sed eiusmod tempor ncid parrot withdrew less a darn overheard foolish ran forwards. Labore et dolore magna aliqua enim ad minim veniam quis nostrud exerc eitation nisi ut aliquip ex ea consequat duis aute irure doly reprehenderit.</p>
                            <NavLink to="" data-aos="fade-up" className="link">ASK About Zameer</NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2 text-center">
                            <img data-aos="fade-up" src="https://ik.imagekit.io/hmdcfponi/Home/about?updatedAt=1758351999888" className='img-fluid' alt="About Image 02" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home2">
                <div className="container-fluid">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <img data-aos="fade-up" src="https://ik.imagekit.io/hmdcfponi/Home/title?updatedAt=1758351999181" className='img-fluid' alt="About Us image" />
                        <h1 data-aos="fade-up">Prayer Timings</h1>
                        <p data-aos="fade-up">Prayer is a source of spiritual peace and blessings in human life. To maximize your daily devotions, respect prayer timings and seek Allah's blessings by praying on time.</p>
                    </div>
                    <div className="row text-center">
                        <div className="col-6 col-md my-2 d-flex align-items-stretch">
                            <div className="box" data-aos="slide-up">
                                <img src="https://ik.imagekit.io/hmdcfponi/Home/Namaz%20Icon/fajir?updatedAt=1758356295346" alt="" />
                                <h3>Fajr 3:58</h3>
                                <p>Fajr prayer brings light to the soul and blessings to the day;</p>
                            </div>
                        </div>
                        <div className="col-6 col-md my-2 d-flex align-items-stretch">
                            <div className="box" data-aos="slide-down">
                                <img src="https://ik.imagekit.io/hmdcfponi/Home/Namaz%20Icon/zuhr?updatedAt=1758356295454" alt="" />
                                <h3>Dhuhr 11:56</h3>
                                <p>Fajr prayer brings light to the soul and blessings to the day;</p>
                            </div>
                        </div>
                        <div className="col-6 col-md my-2 d-flex align-items-stretch">
                            <div className="box" data-aos="slide-left">
                                <img src="https://ik.imagekit.io/hmdcfponi/Home/Namaz%20Icon/asr?updatedAt=1758356295392" alt="" />
                                <h3>Asr 4:19</h3>
                                <p>Fajr prayer brings light to the soul and blessings to the day;</p>
                            </div>
                        </div>
                        <div className="col-6 col-md my-2 d-flex align-items-stretch">
                            <div className="box" data-aos="slide-right">
                                <img src="https://ik.imagekit.io/hmdcfponi/Home/Namaz%20Icon/magrib?updatedAt=1758356295352" alt="" />
                                <h3>Maghrib 6:02</h3>
                                <p>Fajr prayer brings light to the soul and blessings to the day;</p>
                            </div>
                        </div>
                        <div className="col-6 col-md my-2 d-flex align-items-stretch">
                            <div className="box" data-aos="zoom-in">
                                <img src="https://ik.imagekit.io/hmdcfponi/Home/Namaz%20Icon/isha?updatedAt=1758356295364" alt="" />
                                <h3>Isha 7:30</h3>
                                <p>Fajr prayer brings light to the soul and blessings to the day;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 text-center">
                            <img data-aos="flip-left" src="https://ik.imagekit.io/hmdcfponi/Home/title?updatedAt=1758351999181" alt="Islamic Zameer" className='img-fluid img' />
                            <h1 data-aos="flip-right">Our Zameer Scholar</h1>
                            <p data-aos="flip-left">Molana Zameer inspires hearts with wisdom, guiding people towards faith, peace, and the true essence of spirituality.</p>
                        </div>
                        {Home3.map((data, index) => (
                            <>
                                <div key={index} className="col-lg-4 col-md-6 my-2">
                                    <img src={data.img} className='w-100' data-aos="flip-right" />
                                    <div className="box" data-aos="flip-left">
                                        <h2>{data.h1}</h2>
                                        <p>This is Photoshop's version of Lorem Ipsum. proin gravida liton mia velit auctor aliquet. Aenean sollicitudin,</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
            <section className="counter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box" data-aos="flip-left">
                                <center><div className="icon"><PiStudentBold /></div></center>
                                <h1>743+</h1>
                                <h4>Students</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box" data-aos="flip-right">
                                <center><div className="icon"><IoHome /></div></center>
                                <h1>13+</h1>
                                <h4>Centers</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box" data-aos="flip-left">
                                <center><div className="icon"><FaUsers /></div></center>
                                <h1>850+</h1>
                                <h4>Member</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box" data-aos="flip-right">
                                <center><div className="icon"><AiFillProduct /></div></center>
                                <h1>38+</h1>
                                <h4>Programs</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery">
                <div className="container-fluid">
                    <div className="content">
                        <h6 data-aos="fade-up">Gallery</h6>
                        <h1 data-aos="fade-up">Our Islamic Institute Gallery</h1>
                        <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur. Eget ornare ac eleifend leo mauris suspendisse. Bibendum suspendisse proin aliquet porttitor.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/hmdcfponi/Islamic%20Institute%20Gallery/1?updatedAt=1758710235012" alt="Institute Gallery" className='img-fluid img-thumbnail' />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/hmdcfponi/Islamic%20Institute%20Gallery/2?updatedAt=1758784925474" alt="Institute Gallery" className='img-fluid img-thumbnail' />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/hmdcfponi/Islamic%20Institute%20Gallery/3?updatedAt=1758784961692" alt="Institute Gallery" className='img-fluid img-thumbnail' />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/hmdcfponi/Islamic%20Institute%20Gallery/4?updatedAt=1758784961819" alt="Institute Gallery" className='img-fluid img-thumbnail' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home
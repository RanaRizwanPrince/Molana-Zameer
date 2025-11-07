import React from 'react'
import HeadSlider from '../Components/HeadSlider'
import { PiStudentBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import PrayerTimes from '../Components/PrayerTimes';
const Home = () => {
    const Home3 = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/1?updatedAt=1762098680816",
            pro: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/2?updatedAt=1760957379602",
            h1: "1st Position Inamullah",
            paragraph: "Hard work always pays off! The 1st position student was awarded a brand-new laptop — a gift to empower their journey of knowledge and success.",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/2?updatedAt=1762098680394",
            pro: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/2?updatedAt=1760957379602",
            h1: "2nd Position Ehtesham-ul-Haq",
            paragraph: "The talented 2nd position student received an Ultra Pro Max Watch — a perfect reminder that every second counts on the path to achievement!",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/3?updatedAt=1762098680295",
            pro: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/2?updatedAt=1760957379602",
            h1: "3rd Position Muhammad Saffron",
            paragraph: "The hardworking 3rd position student was gifted an Android Watch a token of appreciation for their dedication, passion, and well-deserved success.",
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
                        <p className='lead'>Today, amidst the noise of the decline, division and anxiety of the Ummah, we are hearing a voice again — the voice that arose from the solitude of the Maltese prison, the voice that came from the depths of the heart of Sheikh-ul-Hind Maulana Mahmud-ul-Hasan. This is the voice that reminds us that the cure for the Ummah does not lie in the noise of any slogan, any government or any movement, but in the light of the Quran and in the relationship of mutual love.</p>
                    </div>
                </div>
            </section>
            <section className="Pillars">
                <div className="container-fluid">
                    <h1 data-aos="fade-up">5 PillARS OF ISLAM</h1>
                    <p className='lead' data-aos="fade-in">The Five Pillars of Islam form the foundation of a true Muslim’s faith and practice Shahadah, Salah, Zakat, Sawm, and Hajj guiding believers toward spiritual strength, discipline, and unity in devotion to Allah.</p>
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
            <section className="qari">
                <div className="container-fluid">
                    <h1 data-aos="fade-up">Heartfelt Gratitude to Our Honorable Guests</h1>
                    <p data-aos="fade-up">We are truly grateful to the respected scholars who graced our event with their presence and inspiring words. Their wisdom and guidance filled the gathering with light, faith, and positivity. ✨ Thank you for honoring us with your time and making this occasion truly meaningful and blessed.</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 my-2" data-aos="fade-up">
                            <div className="box">
                                <img src="https://ik.imagekit.io/hmdcfponi/Home/1?updatedAt=1762156409538" className="img-fluid img-thumbnail" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 my-2" data-aos="fade-up">
                            <div className="box">
                                <img src="https://ik.imagekit.io/hmdcfponi/Home/3?updatedAt=1762156409613" className="img-fluid img-thumbnail" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 my-2" data-aos="fade-up">
                            <div className="box">
                                <img src="https://ik.imagekit.io/hmdcfponi/Home/2?updatedAt=1762156409731" className="img-fluid img-thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home1">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 my-2">
                            <img className='img-fluid' data-aos="fade-up" src="https://ik.imagekit.io/hmdcfponi/Home/title?updatedAt=1758351999181" alt="About Image 01" />
                            <h1 data-aos="flip-up">Welcome to Molana Zameer Center for Muslims!</h1>
                            <p data-aos="flip-down">Zameer is the know how to pursue pleasure rationally encounter consequences that are extremely painful. nor again is there anyone who loves or pursue or desires too btain pain of itself, because it is pain, but because</p>
                            <h3 data-aos="flip-left">Molana Zameer Center for Muslims to Achieve Spiritual Goals</h3>
                            <p data-aos="flip-right">Consectetur adipisicing elit sed eiusmod tempor ncid parrot withdrew less a darn overheard foolish ran forwards. Labore et dolore magna aliqua enim ad minim veniam quis nostrud exerc eitation nisi ut aliquip ex ea consequat duis aute irure doly reprehenderit.</p>
                            <NavLink to="" data-aos="fade-up" className="link">ASK About Zameer</NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2 text-center">
                            <img data-aos="fade-up" src="https://ik.imagekit.io/hmdcfponi/Home/about?updatedAt=1758351999888" className='img-fluid' alt="About Image 02" />
                            {/* <img data-aos="fade-up" src="https://ik.imagekit.io/hmdcfponi/Regestration/main-right?updatedAt=1760512911427" className="img-fluid" /> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="home2">
                <div className="container-fluid text-center">
                    <h1 data-aos="fade-up">Prayer Timings</h1>
                    <p data-aos="fade-up">Prayer is a source of spiritual peace and blessings in human life. To maximize your daily devotions, respect prayer timings and seek Allah's blessings by praying on time.</p>
                    <PrayerTimes />
                </div>
            </section>
            <section className="home3">
                <div className="container-fluid">
                    <div className="row">
                        <div className=" text-center">
                            <img data-aos="flip-left" src="https://ik.imagekit.io/hmdcfponi/Home/title?updatedAt=1758351999181" alt="Islamic Zameer" className='img-fluid img' />
                            <h1 data-aos="flip-right">The Spotlight is On! Meet Our Top Zameer Scholars & Competition Winners!</h1>
                            <p data-aos="flip-left">We celebrate the intellect, dedication, and eloquence of the participants! This section is dedicated to honoring the exceptional individuals who demonstrated profound skill and wisdom in our event. Congratulations to the 1st, 2nd, and 3rd Position Holders—you truly embody the spirit of learning and guidance championed by Maulana Zameer. Stay tuned as we proudly reveal the names and achievements of these winning scholars who now stand as beacons of inspiration for our community!</p>
                        </div>
                        {Home3.map((data, index) => (
                            <>
                                <div key={index} className="col-lg-4 col-md-6 my-2">
                                    <img src={data.img} className='w-100' data-aos="flip-right" />
                                    <div className="box" data-aos="fade-up">
                                        <h5>{data.h1}</h5>
                                        <p>{data.paragraph}</p>
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
                                <h1>20</h1>
                                <h4>Students</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box" data-aos="flip-right">
                                <center><div className="icon"><IoHome /></div></center>
                                <h1>01</h1>
                                <h4>Centers</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box" data-aos="flip-left">
                                <center><div className="icon"><FaUsers /></div></center>
                                <h1>10</h1>
                                <h4>Member</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box" data-aos="flip-right">
                                <center><div className="icon"><AiFillProduct /></div></center>
                                <h1>01</h1>
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
                        <p data-aos="fade-up">Our Islamic Institute Gallery beautifully showcases memorable moments from our events, scholarly gatherings, and student activities. Each photograph reflects our commitment to spreading the light of knowledge, faith, and unity within the community.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/hmdcfponi/Home/Gallery/1?updatedAt=1760958129028" alt="Institute Gallery" className='img-fluid img-thumbnail' />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/hmdcfponi/Home/Gallery/2?updatedAt=1760958259805" alt="Institute Gallery" className='img-fluid img-thumbnail' />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/hmdcfponi/Home/Gallery/3?updatedAt=1760958369772" alt="Institute Gallery" className='img-fluid img-thumbnail' />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/hmdcfponi/Home/Gallery/4?updatedAt=1760958515228" alt="Institute Gallery" className='img-fluid img-thumbnail' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home
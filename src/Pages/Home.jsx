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
            h1: "1st Inamullah",
            paragraph: "Heartiest congratulations to the 1st Position Holder! Your outstanding achievement earns you a brand-new, powerful Laptop for future success.",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/2?updatedAt=1762098680394",
            pro: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/2?updatedAt=1760957379602",
            h1: "2st Ehtesham-ul-Haq",
            paragraph: "Congratulations to the brilliant 2nd Position Holder! We honor your hard work by presenting you with a state-of-the-art Laptop.",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/3?updatedAt=1762098680295",
            pro: "https://ik.imagekit.io/hmdcfponi/Home/GiftStudent/2?updatedAt=1760957379602",
            h1: "3st Muhammad Saffron",
            paragraph: "A huge well done to the dedicated 3rd Position Holder! Your efforts are rewarded with a high-quality Laptop prize.",
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
            <section className="qari">
                <div className="container-fluid">
                    <h1 data-aos="fade-up">Our Honorable Scholars & Guests</h1>
                    <p data-aos="fade-up">We are deeply honored to welcome the respected scholars who will enlighten us with their words of wisdom. Their presence adds immense spiritual value to our event and strengthens our connection to the teachings of Islam. All these honorable scholars will, Insha’Allah, be joining us on <b>30/10/2025</b> and will deliver their enlightening speeches at <b>Jalal Baba Torium</b>. May this gathering be a source of guidance, unity, and blessings for all.</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <div className="box">
                                <img src="https://ik.imagekit.io/hmdcfponi/1?updatedAt=1760987540111" className="img-fluid img-thumbnail" />
                                <h5>Mufti Abdul Wahid Qureshi</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <div className="box">
                                <img src="https://ik.imagekit.io/hmdcfponi/2?updatedAt=1760987538726" className="img-fluid img-thumbnail" />
                                <h5>Mufti Shabbir Ahmed Usmani</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <div className="box">
                                <img src="https://ik.imagekit.io/hmdcfponi/3?updatedAt=1760987538793" className="img-fluid img-thumbnail" />
                                <h5>Mufti Mahmoodul Hassan Shah Sahib</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <div className="box">
                                <img src="https://ik.imagekit.io/hmdcfponi/4?updatedAt=1760987538105" className="img-fluid img-thumbnail" />
                                <h5>Hazrat Maulana Tayyab Qasmi</h5>
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
                                        <h2>{data.h1}</h2>
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
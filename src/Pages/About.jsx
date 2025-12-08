import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
    useEffect(() => {
        document.title = 'About Us | Molana Zameer – Spreading the Light of Islamic Knowledge';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Learn about Molana Zameer, an inspiring Islamic scholar devoted to guiding people towards faith, unity, and authentic religious understanding."
            );
        }
    }, []);
    return (
        <>
            <section className="About1 text-center">
                <div className="container-fluid">
                    <div className="col-md-10 offset-lg-1 content">
                        <img src="https://ik.imagekit.io/hmdcfponi/Logo?updatedAt=1758266481774" className="img-fluid" />
                        <h1>Welcome to Molana Zameer Ahmed Qureshi Legacy</h1>
                        <p className='lead'>Welcome to Molana Zameer Ahmed Qureshi Hashmi Legacy a humble space dedicated to preserving the spiritual wisdom, noble character, and inspirational services of Hazrat Molana Zameer Ahmed Qureshi, Here, we honor his lifelong commitment to deen, his profound teachings, and the legacy that continues to guide hearts toward righteousness and unity.</p>
                    </div>
                </div>
            </section>
            <section className="ZameerContent">
                <div className="container-fluid">
                    <div className="content">
                        <h1 data-aos="fade-up">The Legacy of Molana Zameer</h1>
                        <p className='lead' data-aos="fade-up">Maulana Zamir Ahmad Qureshi Hashmi A reformer, a practical teacher and a preacher of monotheism and Sunnah Early life and education</p>
                        <p className='lead' data-aos="fade-up">In 1916, in the Bagnutar Valley of Abbottabad, a mountainous region of the subcontinent, a child was born whose forehead was adorned with the light of knowledge and action he was Maulana Zamir Ahmad Qureshi Hashmi. He belonged to a religious and scholarly family. His father, Hazrat Maulana Ghulam Yahya Qureshi Hashmi, was a prominent religious scholar and a righteous person of the area.</p>
                        <p className='lead' data-aos="fade-up">He received his early education from his father, then studied elementary books in the schools of the village of Rewaiya and Kokal Barsin. The passion for religious knowledge was instilled in him since childhood, and this passion took him to India, where he enrolled in Darul Uloom Deoband.</p>
                        <h3 data-aos="fade-up">Educational travel and companionship of elders</h3>
                        <p className='lead' data-aos="fade-up">During his education, he was in the company of great scholars of the subcontinent. After Deoband, he was associated with the academic centers of Dabhil and Saharanpur. Here, he was blessed with the discipleship of the great hadith scholar, commentator of the Quran and the spirit of the Pakistan Movement, Hazrat Allama Shabbir Ahmed Usmani (may Allah have mercy on him). Under his patronage, he refined his knowledge and perfected his religious studies.</p>
                        <h3 data-aos="fade-up">Bagnutar's return and reformist struggle</h3>
                        <p className='lead' data-aos="fade-up">When he returned home after completing his education in 1939, the darkness of polytheism and innovation was shrouding the village. He took up the duty of reforming the nation and with great wisdom and patience lit the candle of truth in this environment.</p>
                        <p className='lead' data-aos="fade-up">His principle was that he would not make religion a means of earning worldly gain.</p>
                        <p className='lead' data-aos="fade-up">With this aim in mind, he joined the Army Medical Corps (A.M.C) in search of a halal livelihood and served as a nursing soldier for four years.</p>
                        <h3 data-aos="fade-up">Teaching Journey</h3>
                        <p className='lead' data-aos="fade-up">In 1946, he joined the Education Department and was appointed as a primary school teacher. His teaching career enlightened countless minds. His distinguished students include:</p>
                        <p className='lead' data-aos="fade-up">Justice Sardar Raza Khan (Namli Mira)</p>
                        <p className='lead' data-aos="fade-up">Sardar Muhammad Riaz (Former Secretary C&W)</p>
                        <p className='lead' data-aos="fade-up">Sardar Rahim Dad</p>
                        <p className='lead' data-aos="fade-up">Sardar Farhan</p>
                        <p className='lead' data-aos="fade-up">Along with teaching, he performed the duties of Imam and sermon in mosques and gave religious awareness to hundreds of people. In 1953, he was appointed as an Islamic teacher at Government High School Ghazi. Later, he served at Sirikot, Nawanshahr and finally at High School Bagnotar. His total teaching tenure spanned 38 years. Tablighi and Reformatory Services After retirement in 1975, he turned his life towards purely religious and missionary work. He spent a long period of one year with the Tablighi Jamaat and on his return, he served as a preacher in various mosques, including:</p>
                        <p className='lead' data-aos="fade-up">Jamia Masjid Upper Kahal, Jamia Masjid Marri, Jamia Masjid Dilkha Marri, Jamia Masjid Habibullah Colony, Jamia Masjid Sawar Gali are prominent.</p>
                        <h3 data-aos="fade-up">Madrasa Islamia Taleeluddin and Jamia Masjid Quba Bagnutr</h3>
                        <p className='lead' data-aos="fade-up">In his last years, he accomplished a great religious feat in the village of Bagnutr. He founded the Jamia Masjid Quba and Madrasa Islamia Taleemuddin Jamilabad Bagnutr, which was later registered with the Federation of Arab Schools Pakistan (Multan). This institution proved to be a source of light of knowledge and faith for the boys and girls of the village and its surroundings. Under the curriculum of the Federation of Arab Schools Pakistan, dozens of students have emerged from here with the jewel of religious education. This madrasa was established in the memory of Hafiz and Qari Sagheer Ahmed Qureshi, Shaheed (may Allah have mercy on him), which is an ongoing charity for his family.</p>
                        <h3 data-aos="fade-up">Farewell</h3>
                        <p className='lead' data-aos="fade-up">This man of truth, this patient teacher, this preacher of religion appeared before his true Creator in 2011. We belong to Allah and we shall return to Him. Maulana Zamir Ahmad Qureshi (may Allah have mercy on him) has four sons (Shabbir Ahmad Qureshi, Hazrat Maulana Jamil Ahmad Qureshi Shaheed (may Allah have mercy on him), Zaheer Ahmad Qureshi, Hafiz Qari Sagheer Ahmad Qureshi Shaheed (may Allah have mercy on him) and two daughters.</p>
                        <p className='lead' data-aos="fade-up">His memory still resonates in the doors and walls of Bagnutr. His students, Mutawassilin, and scholars pay tribute to his character and service.</p>
                        <p className='lead' data-aos="fade-up">Maulana Zamir Ahmed Qureshi Hashmi (may Allah have mercy on him) was not only a religious scholar and teacher, but he was a movement. The Movement of Knowledge and Reform, the Movement of Sincerity and Action. The Movement of Rejecting Bid’ah and Shirk, the Movement of Revival of the Sunnah</p>
                        <h3 data-aos="fade-up">Their lives teach us this lesson:</h3>
                        <p className='lead' data-aos="fade-up">Learning religion is worship, <br /> teaching religion is service, <br /> and adhering to religion is the highest level of closeness to God.</p>
                    </div>
                </div>
            </section>
            <section className="About2">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <h1 data-aos="fade-up">The venerable teachers of Hazrat Maulana Zameer Ahmad Qureshi</h1>
                        <p data-aos="fade-up" className='lead'>The two great personalities who gave Hazrat Maulana Zameer Ahmed Qureshi the bright lights of knowledge, training and spirituality were his venerable teachers. The guidance, compassion and prayers of these elders shaped his personality and provided a strong foundation for serving the religion.</p>
                        <div className="col-lg-6 col-md-6 my-3" data-aos="fade-up">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-5">
                                        <img src="https://ik.imagekit.io/hmdcfponi/Regestration/2?updatedAt=1760962753016" class="img-fluid img-thumbnail" alt="..." />
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h4>Maulana Shabbir Ahmed Usmani</h4>
                                            <p>This chapter is attributed to <b>Allama Shabbir Ahmad Usmani</b> (may Allah have mercy on him). He was not just a scholar, but a movement. A movement that awakened the Ummah with the light of the Quran, the power of knowledge, and the warmth of faith. This man of faith, who opened his eyes in an academic environment in 1887, received the light of knowledge from the teachers of Darul Uloom Deoband, which later became a beacon of light on the horizon of the subcontinent.</p>
                                            <NavLink to="/Maulana_Shabbir_Ahmed_Usmani" className='link'>Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 my-3" data-aos="fade-up">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-5">
                                        <img src="https://ik.imagekit.io/hmdcfponi/Regestration/1?updatedAt=1760962753584" class="img-fluid img-thumbnail" alt="..." />
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h4>Allama Muhammad Yousuf Banuri</h4>
                                            <p>The service of religion is not only through sermons and advice, but also through knowledge, character and organization. Undoubtedly, the personality of <b>Allama Muhammad Yusuf Banuri</b> (may Allah have mercy on him) was such a movement that is still giving direction to the intellectual and religious journey of the Muslim Ummah today. His name has become a symbol of knowledge and action, insight and sincerity, and invitation and leadership.</p>
                                            <NavLink to="/Allama_Muhammad_Yousuf_Banuri" className='link'>Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about3">
                <div className="container-fluid">
                    <div className="row">
                        <h3 data-aos="fade-up">Four prominent teachings of Hazrat Maulana Zameer Ahmad Qureshi</h3>
                        <p data-aos="fade-up" className='lead'>These four sayings of Hazrat Maulana Zameer Ahmed Qureshi are a vivid summary of his teachings and character. These same principles strengthened his personality and became a source of guidance for others.</p>
                        <div className="col-lg-3 col-md-6 my-3 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="box">
                                <h5>Shabbir Ahmed Qureshi</h5>
                                <p className='lead'>Shabbir Ahmad Qureshi is the eldest son of Maulana Zamir Ahmad Qureshi (may Allah have mercy on him). One of the prominent aspects of his personality is that his name itself carries a great significance. Maulana Zamir Ahmad Qureshi (may Allah have mercy on him) named his eldest son Shabbir Ahmad as an expression of his deep devotion and love for his respected teacher, Sheikh-ul-Islam Allama Shabbir Ahmad Usmani (may Allah have mercy on him). This name is not just an introduction but a clear symbol of the intellectual, spiritual and heartfelt bond between the teacher and the student.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="box">
                                <h5>Hazrat Maulana Jamil Ahmed Qureshi, Shaheed</h5>
                                <p className='lead'>Among the personalities who played a prominent role in the success of the Yadgar-e-Aslaf Conference and Speech Competition organized by Bazm-e-Zamir, Abbottabad District, Mr. Zaheer Ahmed Qureshi, son of the esteemed Hazrat Maulana Zamir Ahmed Qureshi (may Allah have mercy on him), is worth mentioning. He supervised the administrative affairs of the entire program with great wisdom, seriousness and responsibility. His cooperation, guidance and practical involvement at every stage were a source of strength for the administration.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="box">
                                <h5>Hafiz Sagheer Ahmed Qureshi, Shaheed</h5>
                                <p className='lead'>Hafiz Qari Sagheer Ahmed Qureshi Shaheed (May Allah have mercy on him) Hafiz Qari Sagheer Ahmed Qureshi Shaheed (May Allah have mercy on him) was a very talented, well-mannered and religiously committed son of Hazrat Maulana Zameer Ahmed Qureshi (May Allah have mercy on him). He was born on 25th April 1965 in Bagnutar, Abbottabad. Nature had endowed him with intelligence, honesty, love of the Quran and a passion for serving the religion.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-3 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="box">
                                <h5>Zaheer Ahmed Qureshi</h5>
                                <p className='lead'>Among the personalities who played a prominent role in the success of the Yadgar-e-Aslaf Conference and Speech Competition organized by Bazm-e-Zamir, Abbottabad District, Mr. Zaheer Ahmed Qureshi, son of the esteemed Hazrat Maulana Zamir Ahmed Qureshi (may Allah have mercy on him), is worth mentioning. He supervised the administrative affairs of the entire program with great wisdom, seriousness and responsibility. His cooperation, guidance and practical involvement at every stage were a source of strength for the administration.</p>
                            </div>
                        </div>
                        <h3 className='py-1 text-center' data-aos="fade-up">🌟 Our Mission, Our Vision Preserving the Legacy of Knowledge & Guidance 🌟</h3>
                        <div className="col-lg-4 col-md-4 py-3" data-aos="fade-up">
                            <div class="card">
                                <img src="https://ik.imagekit.io/hmdcfponi/About/amaz?updatedAt=1764857929797" class="img-fluid img-thumbnail" />
                                <div class="card-body">
                                    <h2 class="card-title">Muhammad Ammaz</h2>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 py-3" data-aos="fade-up">
                            <div class="card">
                                <img src="https://ik.imagekit.io/hmdcfponi/About/Vision?updatedAt=1764858981448" class="img-fluid img-thumbnail" />
                                <div class="card-body">
                                    <h2 class="card-title">Our Vision</h2>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 py-3" data-aos="fade-up">
                            <div class="card">
                                <img src="https://ik.imagekit.io/hmdcfponi/About/Mission?updatedAt=1764858981983" class="img-fluid img-thumbnail" alt="..." />
                                <div class="card-body">
                                    <h2 class="card-title">Our Mission</h2>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
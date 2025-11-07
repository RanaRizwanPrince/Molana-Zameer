import React from "react";
const Bazam_Featured_Author = () => {
    const authors = [
        { id: 1, name: "Abad ur Rehman", para: "Abad ur Rehman participated in the Molana Zameer event with great enthusiasm, discipline, and confidence, showing an impressive performance overall.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 2, name: "Muhammad Shahid Hazarvi", para: "Muhammad Shahid Hazarvi showed excellent participation in the Molana Zameer program, performing confidently, responsibly, and inspiring others through his positive attitude.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 3, name: "Muhammad Sami Ullah", para: "Muhammad Sami Ullah took part in the Molana Zameer event actively, showing confidence, determination, and great interest in learning activities.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 4, name: "Ismat Ullah", para: "Ismat Ullah participated in the Molana Zameer event with passion and discipline, performing sincerely and showing a remarkable learning attitude.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 5, name: "Jamaluddin", para: "Jamal Uddin actively joined the Molana Zameer event, showing confidence, motivation, and discipline throughout his participation and performance.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 6, name: "Hasher Siraj", para: "Hasher Siraj showed wonderful participation in the Molana Zameer event, performing confidently with strong teamwork, respect, and positive energy.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Rustam Zaib", para: "Rustam Zaib participated in the Molana Zameer program with discipline and dedication, showing excellent enthusiasm and impressive teamwork spirit.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Talha Mujeeb", para: "Talha Mujeeb took part in the Molana Zameer event passionately, showing discipline, confidence, and a strong desire to learn.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Hussain Khan", para: "Hussain Khan actively participated in the Molana Zameer event, showing confidence, respect, and a responsible attitude during all activities.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Muhammad Sufyan", para: "Muhammad Sufyan participated in the Molana Zameer event enthusiastically, showing dedication, teamwork, and confidence in every task performed.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Muhammad Shiraz", para: "Muhammad Shiraz showed active participation in the Molana Zameer event, demonstrating discipline, confidence, and a strong learning spirit.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Muhammad Talha Ahmad", para: "Muhammad Talha Ahmed participated sincerely in the Molana Zameer event, performing energetically and showing great teamwork and responsibility.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Asjal Murtaza", para: "Asjal Murtaza actively joined the Molana Zameer program, showing excellent confidence, teamwork, and passion for continuous self-improvement.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Muhammad Talha", para: "Muhammad Talha participated actively in the Molana Zameer event, showing strong discipline, enthusiasm, and a positive learning attitude.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Naseeb Ullah Khan", para: "Naseeb Ullah Khan participated in the Molana Zameer event with motivation, discipline, and teamwork, showing confidence in his performance.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Hizb Ullah", para: "Hizb Ullah showed active participation in the Molana Zameer event, performing responsibly and displaying excellent teamwork and confidence.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Bilal Ahmed", para: "Bilal Ahmed participated in the Molana Zameer program with passion and energy, showing discipline, motivation, and good communication skills.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Alam Zaib", para: "Alam Zaib took part in the Molana Zameer event actively, showing confidence, dedication, and teamwork throughout his performance.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Muhammad Zahid", para: "Muhammad Zahid showed sincere participation in the Molana Zameer event, demonstrating discipline, respect, and enthusiasm for learning.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Inam Ullah", para: "Inam Ullah participated in the Molana Zameer event with enthusiasm, teamwork, and confidence, performing responsibly in all activities.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Ehtesham ul Haq", para: "Ehtesham ul Haq actively participated in the Molana Zameer program, showing discipline, responsibility, and enthusiasm for learning new things.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Muhammad Zafran", para: "Muhammad Zafran participated in the Molana Zameer event passionately, showing confidence, motivation, and an impressive performance in every activity.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
    ];
    return (
        <section className="featurd">
            <div className="container-fluid">
                <img src="https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/bismilallah?updatedAt=1759920794467" className="img-fluid" data-aos="flip-left" />
                <h1 data-aos="flip-left">Refresh Your Faith and Find Guidance with Molana Zameer!</h1>
                <p className="lead" data-aos="flip-left">Welcome! This is your central hub for all the latest religious programs, conferences, speeches, and lectures by Molana Zameer.  Our mission is to promote Islamic teachings according to the needs of the modern age, following the Sunnah and the path of our righteous predecessors. Molana Zameer's passionate and well-reasoned discourse will quench your spiritual thirst and inspire you to be a better Muslim. Stay connected to get all the updates on his upcoming conferences and important announcements!</p>
                <div className="author-slider" data-aos="flip-left">
                    <div className="slider-track">
                        {[...authors, ...authors].map((a, i) => (
                            <div className="author-card" key={i}>
                                <img src={a.img} alt={a.name} />
                                <h4>{a.name}</h4>
                                <small>{a.para}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Bazam_Featured_Author;
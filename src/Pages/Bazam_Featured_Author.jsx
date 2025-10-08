// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// const authors = [
//     { id: 1, name: "Leslie Alexander", books: 5, imageUrl: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
//     { id: 2, name: "Guy Hawkins", books: 12, imageUrl: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
//     { id: 3, name: "Esther Howard", books: 10, imageUrl: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
//     { id: 4, name: "Shikhon Islam", books: 7, imageUrl: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
//     { id: 5, name: "Kawser Ahmed", books: 4, imageUrl: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
//     { id: 6, name: "Brooklyn Simmons", books: 15, imageUrl: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
// ];
// const Bazam_Featured_Author = () => {
//     const [index, setIndex] = useState(0);
//     const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
//     function getCardsPerView() {
//         if (window.innerWidth < 600) return 1;
//         if (window.innerWidth < 900) return 3;
//         return 5;
//     }
//     // Responsive resize listener
//     useEffect(() => {
//         const handleResize = () => setCardsPerView(getCardsPerView());
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);
//     const nextSlide = () =>
//         setIndex((prev) => (prev >= authors.length - cardsPerView ? 0 : prev + 1));
//     const prevSlide = () =>
//         setIndex((prev) => (prev <= 0 ? authors.length - cardsPerView : prev - 1));
//     // Auto-slide
//     useEffect(() => {
//         const slide = setInterval(nextSlide, 5000);
//         return () => clearInterval(slide);
//     }, [cardsPerView]);
//     return (
//         <section style={styles.section}>
//             <h2 style={styles.heading}>Featured Authors</h2>
//             <p style={styles.text}>Discover brilliant minds and their literary journeys.</p>
//             <div style={styles.sliderContainer}>
//                 <button onClick={prevSlide} style={styles.navBtn}><FaChevronLeft /></button>
//                 <div style={styles.sliderWrapper}>
//                     <div style={{ ...styles.track, transform: `translateX(-${index * (100 / cardsPerView)}%)`, width: `${(authors.length / cardsPerView) * 100}%`, }} >
//                         {authors.map((a) => (
//                             <div key={a.id} style={{ ...styles.card, flex: `0 0 ${100 / cardsPerView}%` }}>
//                                 <img src={a.imageUrl} alt={a.name} style={styles.img} />
//                                 <h4 style={styles.name}>{a.name}</h4>
//                                 <p style={styles.books}>{a.books} Published Books</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <button onClick={nextSlide} style={styles.navBtn}><FaChevronRight /></button>
//             </div>
//         </section>
//     );
// }
// export default Bazam_Featured_Author;
// const styles = {
//     section: { padding: "60px 0", textAlign: "center", background: "#f8f9fa" },
//     heading: { fontSize: "2.3em", color: "#3455a8", fontWeight: "700", marginBottom: "10px" },
//     text: { color: "#666", marginBottom: "40px" },
//     sliderContainer: { display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" },
//     sliderWrapper: { overflow: "hidden", flex: 1, maxWidth: "1100px" },
//     track: { display: "flex", transition: "transform 0.6s ease-in-out" },
//     card: { background: "#fff", margin: "0 10px", borderRadius: "10px", padding: "20px", textAlign: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease", },
//     img: { width: 100, height: 100, borderRadius: "50%", objectFit: "cover", marginBottom: 10 },
//     name: { fontSize: "1.1em", fontWeight: "600", margin: "10px 0 5px" },
//     books: { color: "#777", fontSize: "0.9em" },
//     navBtn: {
//         background: "#3455a8", color: "#fff", border: "none", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
//     },
// };






import React from "react";

const Bazam_Featured_Author = () => {
    const authors = [
        { id: 1, name: "Molana Zameer", para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 2, name: "Molana Faizan", para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 3, name: "Molana Ahmed", para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 4, name: "Molana Rizwan", para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 5, name: "Molana Imran", para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 6, name: "Molana Tariq", para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
        { id: 7, name: "Molana Asad", para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/shape?updatedAt=1759911993271" },
    ];

    return (
        <section className="featurd">
            <div className="container-fluid">
                <img src="https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/bismilallah?updatedAt=1759920794467" className="img-fluid" />
                <h1> Refresh Your Faith and Find Guidance with Molana Zameer!</h1>
                <p>Welcome! This is your central hub for all the latest religious programs, conferences, speeches, and lectures by Molana Zameer.  Our mission is to promote Islamic teachings according to the needs of the modern age, following the Sunnah and the path of our righteous predecessors. Molana Zameer's passionate and well-reasoned discourse will quench your spiritual thirst and inspire you to be a better Muslim. Stay connected to get all the updates on his upcoming conferences and important announcements!</p>
                <div className="author-slider">
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
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
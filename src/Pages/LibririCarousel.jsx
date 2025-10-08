import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const LibririCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Desktop me 5 products
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024, // Tablet / small laptop
                settings: {
                    slidesToShow: 3, // 3 products
                },
            },
            {
                breakpoint: 600, // Mobile
                settings: {
                    slidesToShow: 2, // 2 products
                },
            },
            {
                breakpoint: 480, // Extra small mobile
                settings: {
                    slidesToShow: 1, // 1 product
                },
            },
        ],
    };
    return (
        <div className="LibririCarousel" style={{ margin: "30px" }}>
            <Slider {...settings}>
                <div><img src="https://ik.imagekit.io/hmdcfponi/Libriri/11?updatedAt=1759570101538" alt="Product 1" style={{ width: "100%", borderRadius: "10px", }} /><h4>Ahsaan o Emaan</h4></div>
                <div><img src="https://ik.imagekit.io/hmdcfponi/Libriri/11?updatedAt=1759570101538" alt="Product 2" style={{ width: "100%", borderRadius: "10px", }} /><h4>Aurat Aur Islam</h4></div>
                <div><img src="https://ik.imagekit.io/hmdcfponi/Libriri/11?updatedAt=1759570101538" alt="Product 3" style={{ width: "100%", borderRadius: "10px", }} /><h4>Ali Waris al-Anbiya</h4></div>
                <div><img src="https://ik.imagekit.io/hmdcfponi/Libriri/11?updatedAt=1759570101538" alt="Product 4" style={{ width: "100%", borderRadius: "10px", }} /><h4>Ali Waseela e Najat</h4></div>
                <div><img src="https://ik.imagekit.io/hmdcfponi/Libriri/11?updatedAt=1759570101538" alt="Product 5" style={{ width: "100%", borderRadius: "10px", }} /><h4>Anees-e-Khitabat</h4></div>
                <div><img src="https://ik.imagekit.io/hmdcfponi/Libriri/11?updatedAt=1759570101538" alt="Product 6" style={{ width: "100%", borderRadius: "10px", }} /><h4>Azadari Baqa-e-Islam</h4></div>
                <div><img src="https://ik.imagekit.io/hmdcfponi/Libriri/11?updatedAt=1759570101538" alt="Product 6" style={{ width: "100%", borderRadius: "10px", }} /><h4>Shahzada Ali Asghar</h4></div>
                <div><img src="https://ik.imagekit.io/hmdcfponi/Libriri/11?updatedAt=1759570101538" alt="Product 6" style={{ width: "100%", borderRadius: "10px", }} /><h4>Azmat-e-Hazrat Zainab</h4></div>
            </Slider>
        </div>
    );
};
export default LibririCarousel;
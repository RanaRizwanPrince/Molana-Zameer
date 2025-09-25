import React from 'react'

const HeadSlider = () => {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://ik.imagekit.io/hmdcfponi/Website%20Banners/1?updatedAt=1758346203697" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://ik.imagekit.io/hmdcfponi/Website%20Banners/2?updatedAt=1758346204037" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://ik.imagekit.io/hmdcfponi/Website%20Banners/3?updatedAt=1758346203932" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://ik.imagekit.io/hmdcfponi/Website%20Banners/4?updatedAt=1758346203583" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://ik.imagekit.io/hmdcfponi/Website%20Banners/5?updatedAt=1758346203995" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default HeadSlider

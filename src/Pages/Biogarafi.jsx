import React, { useEffect } from 'react'

const Biogarafi = () => {
    useEffect(() => {
        document.title = 'Biography | Molana Zameer – The Life and Journey of an Islamic Scholar';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Read the inspiring biography of Molana Zameer, a devoted Islamic scholar whose life reflects faith, wisdom, and dedication to spreading the message of Islam."
            );
        }
    }, []);
    return (
        <>
            <img src="https://ik.imagekit.io/hmdcfponi/soon?updatedAt=1759922255533" className="w-100 img-fluid" />
        </>
    )
}

export default Biogarafi

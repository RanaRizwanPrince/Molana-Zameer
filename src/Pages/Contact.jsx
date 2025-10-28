import React, { useEffect } from 'react'

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact | Molana Zameer – Get in Touch for Guidance and Inquiries';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Reach out to Molana Zameer for religious guidance, event details, or any inquiries. We are here to connect, assist, and spread the message of Islam."
            );
        }
    }, []);
    return (
        <div>
            <img src="https://ik.imagekit.io/hmdcfponi/soon?updatedAt=1759922255533" className="w-100 img-fluid" />
            <section className="Contact1 text-center">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium nostrum iure consectetur dolor tempore?</p>
            </section>
        </div>
    )
}

export default Contact

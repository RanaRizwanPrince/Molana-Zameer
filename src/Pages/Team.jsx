import React, { useEffect } from 'react'

const Team = () => {
    useEffect(() => {
        document.title = 'Team | Molana Zameer – Dedicated Members Behind Our Mission of Faith';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Meet the dedicated team working with Molana Zameer to spread Islamic knowledge, unity, and peace through education and community service."
            );
        }
    }, []);
    return (
        <>
            <img src="https://ik.imagekit.io/hmdcfponi/soon?updatedAt=1759922255533" className="w-100 img-fluid" />
            <section className="Team1 text-center">
                <h1>Team</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium nostrum iure consectetur dolor tempore?</p>
            </section>
        </>
    )
}

export default Team

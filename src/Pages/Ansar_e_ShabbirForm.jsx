import React, { useEffect } from 'react'
const Ansar_e_ShabbirForm = () => {
    useEffect(() => {
        document.title = 'Ansar Shabbir | Molana Zameer – A Dedicated Voice for Islamic Knowledge';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Discover Ansar Shabbir’s contributions under the guidance of Molana Zameer, promoting Islamic education, unity, and the message of peace through knowledge and service."
            );
        }
    }, []);
    return (
        <>
            <section className="asform1">
                <div className="container-fluid">
                    <div className="box" data-aos="fade-up">
                        <h1>This Place Belongs to Ansar Shabbir's farm.</h1>
                        <p>Dedicated to carrying forward Allama Shabbir Ahmed Usmani’s vision, Ansar-e-Shabbir stands for faith, unity, and knowledge — guiding the nation toward moral and spiritual strength.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Ansar_e_ShabbirForm
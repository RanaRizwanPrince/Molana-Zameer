import React, { useEffect } from 'react'
const Maulana_Shabbir_Ahmed_Usmani = () => {
    useEffect(() => {
        document.title = 'Maulana Shabbir Ahmed Usmani | An Esteemed Islamic Scholar and Spiritual Guide';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Learn about Maulana Shabbir Ahmed Usmani, a respected Islamic scholar devoted to spreading knowledge, unity, and the message of Islam through wisdom and compassion."
            );
        }
    }, []);
    return (
        <>
            <section className="MSAU1">
                <div className="container-fluid">
                    <img src="https://ik.imagekit.io/hmdcfponi/Shabbir%20Ahmed/logo?updatedAt=1761638929723" className="img-fluid" />
                    <h1>Maulana Shabbir Ahmed Usmani A Spiritual Leader, Scholar, and Preacher of Islam</h1>
                    <p>Maulana Shabbir Ahmed Usmani is a renowned Islamic scholar and spiritual guide who has dedicated his life to spreading the teachings of Islam and promoting moral awareness among people. His sermons are known for their depth in Quranic knowledge, simplicity of expression, and heartfelt examples that inspire listeners. This page is devoted to sharing his biography, notable speeches, writings, and educational work so that future generations can benefit from his spiritual and scholarly legacy.</p>
                </div>
            </section>
            <section className="MSAU2">
                <div className="container-fluid">
                    <div className="content">
                        <h1>Allama Shabbir Ahmed Usmani is a symbol of a movement.</h1>
                        <p>One of the bright and faith-inspiring chapters in the history of the subcontinent is one that was written through a combination of knowledge, action, and religious zeal.</p>
                        <p>This chapter is attributed to Allama Shabbir Ahmad Usmani (may Allah have mercy on him). He was not just a scholar, but a movement. A movement that awakened the Ummah with the light of the Quran, the power of knowledge, and the warmth of faith. This man of faith, who opened his eyes in an academic environment in 1887, received the light of knowledge from the teachers of Darul Uloom Deoband, which later became a beacon of light on the horizon of the subcontinent.</p>
                        <p>The title of Sheikh-ul-Islam was bestowed upon him by a great scholar and commentator like Allama Anwar Shah Kashmiri in view of his academic services. After teaching at Darul Uloom Deoband, he founded the Madrasa Taalim-ul-Islam in Jalalpur. He was a member of the Majlis-e-Shura of Darul Uloom Deoband. In 1916, he taught at Jamia Islamia Dabhel. In 1928, he separated from Darul Uloom Islamia Dabhel and was appointed as the Sadr-ul-Mudraseen at Jamia Ashrafia Jalandhar. From there, his academic, intellectual and religious services entered a new era. He played a prominent role in creating religious awareness and political consciousness among the Muslims of the subcontinent. He raised his voice against British colonialism from the platform of Jamiat Ulema-e-Hind and actively participated in the freedom movement. In 1945, he founded Jamiat Ulema-e-Islam so that the struggle for the establishment of a separate homeland for the Muslims of the subcontinent could be organized. His role in the Pakistan Movement is a shining chapter in history. Allama Shabbir Ahmed Usmani not only supported the demand of Muslims for a separate homeland on the basis of the two-nation theory but also proved it in the light of the Quran and Sunnah. On the occasion of the establishment of Pakistan on August 14, 1947, he led a prayer at the capital ceremony in Karachi and thus earned the honor of being the first religious scholar to pray for the establishment of the Kingdom of God. After the establishment of Pakistan, he made great efforts for the implementation of the Islamic constitution. He died in Karachi on December 13, 1949. His burial took place in the premises of Faisal Mosque in Islamabad.</p>
                        <p>May the message of the Quran be spread, may Pakistan become an Islamic system!</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Maulana_Shabbir_Ahmed_Usmani
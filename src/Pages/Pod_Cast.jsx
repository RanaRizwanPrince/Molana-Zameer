import React, { useEffect } from 'react'

const Pod_Cast = () => {
    useEffect(() => {
        document.title = 'Podcast | Molana Zameer – Listen to Inspiring Islamic Talks & Discussions';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Tune in to Molana Zameer’s podcasts featuring insightful Islamic talks, spiritual discussions, and lessons that enlighten hearts and minds."
            );
        }
    }, []);
    return (
        <>
            <img src="https://ik.imagekit.io/hmdcfponi/soon?updatedAt=1759922255533" className="w-100" />
        </>
    )
}

export default Pod_Cast
import React, { useEffect } from 'react'

const Ansar_Shabbir = () => {
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
        <img src="https://ik.imagekit.io/hmdcfponi/soon?updatedAt=1759922255533" className="w-100" />
    )
}

export default Ansar_Shabbir

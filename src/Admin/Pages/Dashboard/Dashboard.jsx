import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
const Dashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard | Molana Zameer – Islamic Education & Digital Management';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Manage and explore Molana Zameer’s Islamic content dashboard under the guidance of Molana Zameer. A central platform for organizing educational resources, updates, and digital outreach promoting authentic Islamic knowledge, unity, and peace."
            );
        }
    }, []);
    return (
        <>
            <Navbar />
            <section className="main-content">
                <Outlet /><br /><br />
                <img src="https://t3.ftcdn.net/jpg/05/23/04/00/360_F_523040057_JYMTxoQGquklUthNLLjspI7ldR1hrFlH.jpg" className="w-100" srcset="" />
            </section>
        </>
    )
}
export default Dashboard
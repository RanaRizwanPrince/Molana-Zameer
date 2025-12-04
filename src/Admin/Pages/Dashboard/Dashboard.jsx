import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
const Dashboard = () => {
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
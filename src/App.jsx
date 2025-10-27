import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import 'animate.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Libriri from "./Pages/Libriri";
import Biogarafi from "./Pages/Biogarafi";
import Bazam_Zameer from "./Pages/Bazam_Zameer";
import Pod_Cast from "./Pages/Pod_Cast";
import Team from "./Pages/Team";
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import MousEffact from './Components/MousEffact';
import NotFound from "./Pages/NotFound";
import TopToBottom from './Components/TopToBottom';
import Preloader from './Components/Preloader';
import PopupAlert from "./Components/Popupalert";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Pages/Contact";
import Regestration from "./Pages/Regestration";
import Ansar_Shabbir from "./Pages/Ansar_Shabbir";
import Maulana_Zameer_Ahmed_Qureshi from "./Pages/Maulana_Zameer_Ahmed_Qureshi";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      once: false, // true = animation once, false = repeat on scroll
    });
  }, []);
  return (
    <>
      <PopupAlert />
      <Preloader />
      <Navbar />
      <MousEffact />
      <ScrollToTop />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Libriri' element={<Libriri />} />
        <Route path='/Bazam_Zameer' element={<Bazam_Zameer />} />
        <Route path='/Biogarafi' element={<Biogarafi />} />
        <Route path='/Pod_Cast' element={<Pod_Cast />} />
        <Route path='/Team' element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Regestration" element={<Regestration />} />
        <Route path="/Ansar_Shabbir" element={<Ansar_Shabbir />} />
        <Route path="/Maulana_Zameer_Ahmed_Qureshi" element={<Maulana_Zameer_Ahmed_Qureshi />} />
      </Routes>
      <TopToBottom />
      <Footer />
    </>
  )
}
export default App
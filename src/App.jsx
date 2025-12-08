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
import Conferences from "./Pages/Conferences";
import Ansar_Shabbir from "./Pages/Ansar_Shabbir";
import Maulana_Zameer_Ahmed_Qureshi from "./Pages/Maulana_Zameer_Ahmed_Qureshi";
import Maulana_Shabbir_Ahmed_Usmani from "./Pages/Maulana_Shabbir_Ahmed_Usmani";
import Allama_Muhammad_Yousuf_Banuri from "./Pages/Allama_Muhammad_Yousuf_Banuri";
import PakistanDetails from "./Pages/PakistanDetails";
import Most_Popular_EpisodesAPI from "./Utils/Most_Popular_EpisodesAPI";
import Login from "./Admin/Pages/Login/Login"
// Dashboard Link imports
import Dashboard from "./Admin/Pages/Dashboard/Dashboard";
import AddProduct from "./Admin/Pages/Products/AddProduct";
import EditProduct from "./Admin/Pages/Products/EditProduct";
import ProductList from "./Admin/Pages/Products/ProductList";
// Dashboard Link imports
function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      once: false, // true = animation once, false = repeat on scroll
    });
  }, []);
  const Layout = ({ children }) => (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
  return (
    <>
      <PopupAlert />
      <Preloader />
      {/* <Navbar /> */}
      <MousEffact />
      <ScrollToTop />
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route index path='/' element={<Layout><Home /></Layout>} />
        <Route exact path='/About' element={<Layout><About /></Layout>} />
        <Route path='*' element={<Layout><NotFound /></Layout>} />
        <Route path='/Libriri' element={<Layout><Libriri /></Layout>} />
        <Route path='/Bazam_Zameer' element={<Layout><Bazam_Zameer /></Layout>} />
        <Route path='/Biogarafi' element={<Layout><Biogarafi /></Layout>} />
        <Route path='/Pod_Cast' element={<Layout><Pod_Cast /></Layout>} />
        <Route path='/Team' element={<Layout><Team /></Layout>} />
        <Route path="/Contact" element={<Layout><Contact /></Layout>} />
        <Route path="/Regestration" element={<Layout><Regestration /></Layout>} />
        <Route path="/Conferences" element={<Layout><Conferences /></Layout>} />
        <Route path="/Ansar_Shabbir" element={<Layout><Ansar_Shabbir /></Layout>} />
        <Route path="/Maulana_Zameer_Ahmed_Qureshi" element={<Layout><Maulana_Zameer_Ahmed_Qureshi /></Layout>} />
        <Route path="/Maulana_Shabbir_Ahmed_Usmani" element={<Layout><Maulana_Shabbir_Ahmed_Usmani /></Layout>} />
        <Route path="/Allama_Muhammad_Yousuf_Banuri" element={<Layout><Allama_Muhammad_Yousuf_Banuri /></Layout>} />
        <Route path="/PakistanDetails" element={<Layout><PakistanDetails /></Layout>} />
        {/* All API's  */}
        <Route path="/Most_Popular_EpisodesAPI" element={<Most_Popular_EpisodesAPI />} />
        {/* Dashboard Routes */}
        <Route path="Dashboard" element={<Dashboard />}>
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="EditProduct" element={<EditProduct />} />
          <Route path="ProductList" element={<ProductList />} />
          {/* <Route path="MainHome" element={<MainHome />} /> */}
        </Route>
      </Routes>
      <TopToBottom />
      {/* <Footer /> */}
    </>
  )
}
export default App
import './App.css';
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
import Conatct from "./Pages/Conatct";
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import MousEffact from './Components/MousEffact';
import NotFound from "./Pages/NotFound";
import TopToBottom from './Components/TopToBottom';
import Preloader from './Components/Preloader';
function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <MousEffact />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Libriri' element={<Libriri />} />
        <Route path='/Bazam_Zameer' element={<Bazam_Zameer />} />
        <Route path='/Biogarafi' element={<Biogarafi />} />
        <Route path='/Pod_Cast' element={<Pod_Cast />} />
        <Route path='/Conatct' element={<Conatct />} />
        <Route path='/Team' element={<Team />} />
      </Routes>
      <TopToBottom />
      <Footer />
    </>
  )
}
export default App
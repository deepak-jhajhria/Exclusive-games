import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Index from "./pages/Index"
import ScrollToTop from "./components/ScrollToTop"
import Hogar from "./pages/Hogar"
import Mision from "./pages/Mision"
import Traga from "./pages/Traga"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import Preloder from "./components/Prelodar"
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      setScreenLoading(false);
      document.body.classList.remove("overflow-hidden")
    }, 3500);
  }, []);
  return (
    <>
      {screenLoading ? (<Preloder />) : (<div className="bg-[#00141B]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hogar" element={<Hogar />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/traga" element={<Traga />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>)}
    </>
  )
}

export default App

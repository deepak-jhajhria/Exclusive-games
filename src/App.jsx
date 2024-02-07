import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Index from "./pages/Index"
import ScrollToTop from "./components/ScrollToTop"
import Hogar from "./pages/Hogar"
import Mision from "./pages/Mision"
import Traga from "./pages/Traga"
import Footer from "./components/Footer"
import { useEffect } from "react"
import Preloder from "./components/Prelodar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import useNetwork from "./components/useNetwork"
import usePreloader from "./components/usePreloader"
import { Alert } from "@mui/material"
function App() {
  useEffect(() => { AOS.init({ once: true, }); }, [])
  const networkState = useNetwork();
  const isLoading = usePreloader();
  return (
    <>
      {!networkState.online && <Alert className="fixed bottom-0 z-[100]" severity="error">you lost your internet connection</Alert>}
      {!networkState.online || <Alert className="fixed bottom-0 z-[100]" severity="success">connected success internet</Alert>}
      {isLoading ? (<Preloder />) : (<div className="bg-[#00141B]">
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

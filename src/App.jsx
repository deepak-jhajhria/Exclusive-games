import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Index from "./pages/Index"
import ScrollToTop from "./components/ScrollToTop"
import Hogar from "./pages/Hogar"
import Mision from "./pages/Mision"
import Traga from "./pages/Traga"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-[#00141B]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hogar" element={<Hogar />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/traga" element={<Traga />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

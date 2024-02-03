import { Link } from "react-router-dom"
import CommonBtn from "./CommonBtn"
import { BtnSvg, Logo } from "./Icons"
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from "react"

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  if (isOpen) {
    document.body.classList.add("overflow-hidden")
  }
  else {
    document.body.classList.remove("overflow-hidden")
  }
  window.onscroll = function () { scrollFunction(); progressBarScroll(); };
  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("scroll").classList.remove("hidden")
      document.getElementById("navbar").classList.remove("lg:py-5")
      document.getElementById("nav").classList.add("!bg-[#1A282E]")
      document.getElementById("nav").classList.remove("backdrop:blur-xl")
      document.getElementById("navbar").classList.add("py-4")
      document.getElementById("nav").classList.add("fixed")
      document.getElementById("nav").classList.add("-translate-x-1/2")

    } else {
      document.getElementById("scroll").classList.add("hidden")
      document.getElementById("nav").classList.remove("-translate-x-1/2")
      document.getElementById("nav").classList.remove("fixed")
      document.getElementById("navbar").classList.remove("py-5")
      document.getElementById("nav").classList.remove("!bg-[#1A282E]")
      document.getElementById("navbar").classList.add("lg:py-5")
      document.getElementById("nav").classList.add("backdrop:blur-xl")
      document.getElementById("navbar").classList.add("py-4")
    }
  }
  return (
    <nav id="nav" className="backdrop:blur-xl bg-[rgba(255,255,255,0.10)] w-full z-40 top-0 left-1/2">
      <div id="navbar" className="container flex items-center justify-between py-5 max-w-[1140px] relative z-40">
        <Link to={"/"}><span><Logo /></span></Link>
        <ul className={`${isOpen ? "right-0" : "-right-full"} flex items-center lg:-ml-12 gap-7 mobileview`}>
          <li><Link onClick={() => setOpen(false)} to={"/hogar"} className="text-base font-medium leading-6 text-white duration-300 font-Inter opacity-80 hover:opacity-100">Hogar</Link></li>
          <li><Link onClick={() => setOpen(false)} to={"/mision"} className="text-base font-medium leading-6 text-white duration-300 font-Inter opacity-80 hover:opacity-100">Misión</Link></li>
          <li><Link onClick={() => setOpen(false)} to={"/traga"} className="text-base font-medium leading-6 text-white duration-300 font-Inter opacity-80 hover:opacity-100">Tragamonedas</Link></li>
          <li><Link onClick={() => setOpen(false)} to={"/hogar"} className="text-base font-medium leading-6 text-white duration-300 font-Inter opacity-80 hover:opacity-100">Por qué elegirnos</Link></li>
          <li><Link onClick={() => setOpen(false)} to={"/hogar"} className="text-base font-medium leading-6 text-white duration-300 font-Inter opacity-80 hover:opacity-100">Ofertas</Link></li>
          <li className="relative sm:hidden"><CommonBtn text="Acceso" />
            <span className="absolute -left-1 -bottom-1"><BtnSvg /></span>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <div className="relative hidden sm:block"><CommonBtn text="Acceso" />
            <span className="absolute -left-1 -bottom-1"><BtnSvg /></span>
          </div>
          <div className='relative z-50 -mr-2 lg:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} size={35} rounded distance="md" direction='right' duration={0.5} color='#FFF' />
          </div>
        </div>
      </div>
      {isOpen && (
        <div onClick={() => setOpen(false)} className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-30'>
        </div>
      )}
      <div id='scroll' class="fixed top-[77px] md:top-[82px] w-full z-10 hidden">
        <div class="h-[6px]  sm:h-2 w-full">
          <div class=" bg-gradient-to-r from-[#74EE8B] to-[#5CD4CF] rounded-r-full h-[5px] sm:h-[7px] w-0" id="progressBar"></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

import { useLocation } from "react-router-dom";
import CommonBtn from "./CommonBtn"
import { BtnSvg2 } from "./Icons"

const Header = () => {
    const location = useLocation();
    return (
        <div className={`w-full  sm:min-h-[550px] md:min-h-[700px] lg:min-h-[810px] bg-no-repeat bg-cover bg-center -translate-y-[90px] flex justify-center items-center ${location.pathname === "/" && "bg-[url(./assets/images/Herosectionbg.webp)]"} ${location.pathname === "/hogar" && "bg-[url(./assets/images/Herosectionbg2.webp)]"} ${location.pathname === "/mision" && "bg-[url(./assets/images/Herosectionbg3.webp)]"} ${location.pathname === "/traga" && "bg-[url(./assets/images/Herosectionbg4.webp)]"}`}>
            <div className="container max-w-[727px] flex flex-col mt-28 xs:mt-24 md:mt-0">
                <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="400" className="font-normal text-white sm:mt-0 mt-12 font-Anton text-[42px] sm:text-[50px] md:text-[60px] lg:text-[72px] leading-normal lg:leading-[86px] text-center max-w-[505px] mx-auto">Exclusive Games. Pasión por ganar</h1>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" className="px-3 mt-2 text-base font-medium leading-6 text-center text-white sm:mt-3 md:mt-4 font-Inter opacity-80">En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" className="relative mx-auto mt-5 mb-10 sm:mt-7 md:mt-10 sm:mb-0"><CommonBtn cstm="bg-gradient-to-br to-[#51C8EF] from-[#7AF57A] !border-[0px] !text-black" text="Empezar" />
                    <span className="absolute -left-1 -bottom-1"><BtnSvg2 /></span>
                </div>
            </div>
        </div>
    )
}

export default Header

import { Link } from "react-router-dom"
import { Ellipse, FacebookIcon, InstaIcon, Logo, MailIcon, TelIcon, TwitterIcon } from "./Icons"

const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-black  mt-10 sm:mt-16 md:mt-24 lg:mt-[150px]">
            <div className="container max-w-[1140px] pt-10 sm:pt-12 md:pt-16 mb-8 relative z-30">
                <div className="grid justify-between w-full grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-9">
                    <div className="flex flex-col col-span-1 mb-5 mr-2 xs:col-span-2 md:col-span-3 md:mb-7 xl:mb-0">
                        <span><Logo /></span>
                        <p className="mt-3 text-sm sm:text-base font-medium leading-6 text-white font-Inter opacity-80 max-w-[369px]">En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                        <div className="flex items-center gap-3 mt-3 md:mt-6">
                            <a target="_blank" href="http://instagram.com"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A2C2C]"><InstaIcon /></span></a>
                            <a target="_blank" href="http://instagram.com"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A2C2C]"><FacebookIcon /></span></a>
                            <a target="_blank" href="http://instagram.com"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A2C2C]"><TwitterIcon /></span></a>
                        </div>
                    </div>
                    <ul className="flex flex-col col-span-1 gap-2 mt-5 sm:gap-3 xs:mt-3 xl:ml-10 xl:col-span-2">
                        <li className="pb-1 text-sm font-bold text-white sm:pb-2 sm:text-base font-Inter">Menú principal</li>
                        <li><Link to={"/hogar"} className="text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter">Hogar</Link></li>
                        <li><Link to={"/hogar"} className="text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter">Misión</Link></li>
                        <li><Link to={"/hogar"} className="text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter">Tragamonedas</Link></li>
                        <li><Link to={"/hogar"} className="text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter">Por qué elegirnos</Link></li>
                        <li><Link to={"/hogar"} className="text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter">Ofertas</Link></li>
                    </ul>
                    <ul className="flex flex-col col-span-1 gap-2 mt-5 sm:gap-3 xs:mt-3 xl:col-span-2">
                        <li className="pb-1 text-sm font-bold text-white sm:pb-2 sm:text-base font-Inter">Atención al cliente</li>
                        <li><Link to={"/hogar"} className="text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter">¿Necesitas ayuda?</Link></li>
                        <li><Link to={"/hogar"} className="text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter">política de privacidad</Link></li>
                        <li><Link to={"/hogar"} className="text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter">Términos de servicios</Link></li>
                    </ul>
                    <ul className="flex flex-col col-span-1 gap-2 mt-5 sm:gap-3 md:mt-3 xl:col-span-2">
                        <li className="pb-1 text-sm font-bold text-white sm:pb-2 sm:text-base font-Inter">Menú principal</li>
                        <li><a href="mailto:juegosexclusivos@gmail.com" className="flex items-center gap-2 text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter"><span><MailIcon /></span>juegosexclusivos@gmail.com</a></li>
                        <li><a href="tel:+(101)342-7873" className="flex items-center gap-2 text-sm font-medium text-white sm:leading-6 sm:text-base opacity-80 font-Inter"><span><TelIcon /></span>(101)342-7873</a></li>
                    </ul>
                </div>
            </div>
            <p className="py-3 text-base font-medium leading-6 text-center text-white border-t border-white opacity-50 sm:py-5 font-Inter border-opacity-30">© Juegos exclusivos - Todos los derechos reservados {(new Date().getFullYear())}</p>
            <Ellipse cstm="-bottom-[50%] -left-[22%]" />
            <Ellipse cstm="bottom-[15%] -right-[1%] !max-w-[180px] !min-h-[180px] !opacity-90" />
        </footer>
    )
}

export default Footer

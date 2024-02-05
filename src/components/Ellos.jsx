import CommonBtn from "./CommonBtn"
import { BtnSvg, Ellipse } from "./Icons"
import img1 from '../assets/images/Black1.webp'
import img2 from '../assets/images/Black2.webp'
import img3 from '../assets/images/Black3.webp'
const Ellos = () => {
    const slotsDataSecond = [
        { id: 1, img: img1, title: "Inteligencia", },
        { id: 2, img: img2, title: "Proactividad", },
        { id: 3, img: img3, title: "Innovación", },
    ]
    return (
        <div className="relative overflow-x-clip">
            <div className="container max-w-[1140px] mt-10 sm:mt-16 md:mt-24 lg:mt-[150px]">
                <div className="flex flex-col">
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton md:leading-[57px] text-white text-center'>Ellos eligieron apostar con nosotros</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-12 lg:mt-[60px] relative gap-6">
                        {
                            slotsDataSecond.map((listing, index) => (
                                <div key={index} className={`relative flex flex-col items-center w-full duration-300 group ${listing.id === 3 ? "md:col-span-1 sm:col-span-2" : ""}`}>
                                    <img className={`w-full rounded-lg ${listing.id === 3 ? "md:w-full sm:w-1/2" : ""}`} src={listing.img} alt={listing.title} />
                                    <div className="absolute flex items-center justify-center w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                        <div className="relative"><CommonBtn text="Rcasinovip" />
                                            <span className="absolute -left-1 -bottom-1"><BtnSvg /></span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p className="mt-5 sm:mt-7 md:mt-[38px] text-sm sm:text-base font-medium leading-6 text-center text-white  font-Inter opacity-80 max-w-[883px] mx-auto flex flex-col items-center">Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego. <span>Ahora, la próxima apuesta está en tus manos.</span> <span>Elige ganar. Elige exclusive game.</span></p>
                </div>
            </div>
            <Ellipse cstm="-right-[30%] -top-[44%]" />
        </div>
    )
}

export default Ellos

import jackpotimg from '../assets/images/jackpot.webp';
import { BtnSvg, CheckIcon, Ellipse } from './Icons';
import img1 from '../assets/images/jackpo2.webp'
import img2 from '../assets/images/jackpo3.webp'
import img3 from '../assets/images/jackpo4.webp'
import img4 from '../assets/images/jackpotPosition1.png'
import img5 from '../assets/images/jackpotPosition2.png'
import CommonBtn from './CommonBtn';
const Jackpot = () => {
    const slotsDataSecond = [
        { id: 1, img: img1, title: "Inteligencia", },
        { id: 2, img: img2, title: "Proactividad", },
        { id: 3, img: img3, title: "Innovación", },
    ]
    return (
        <div className='bg-[url(./assets/images/sec4bg.webp)] bg-cover w-full bg-center bg-no-repeat relative'>
            <div className="container max-w-[1140px] -mt-[330px] xs:-mt-[300px] sm:-mt-28 md:-mt-20 xl:mt-[110px]">
                <div className="grid items-center grid-cols-1 gap-5 xl:gap-7 xl:grid-cols-2">
                    <div className='order-2 xl:order-1'><img className='w-full sm:px-5 xl:px-0' src={jackpotimg} alt="jackpot" /></div>
                    <div className='flex flex-col order-1 xl:order-2 xl:ml-3'>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton md:leading-[57px] text-white'>Potenciando sus elecciones</h2>
                        <p className='mt-3 text-sm font-medium leading-6 text-white sm:text-base sm:mt-4 opacity-80 font-Inter'>Con Exclusive Game lo mejor está de tu lado.</p>
                        <p className='flex items-center gap-2 mt-3 text-sm font-medium text-white sm:mt-6 sm:text-base font-Inter opacity-80'><span><CheckIcon /></span>Tecnología HTML5</p>
                        <p className='flex items-center gap-2 mt-2 text-sm font-medium text-white sm:mt-3 sm:text-base font-Inter opacity-80'><span><CheckIcon /></span>Versión PC y móvil</p>
                        <p className='flex items-center gap-2 mt-2 text-sm font-medium text-white sm:mt-3 sm:text-base font-Inter opacity-80'><span><CheckIcon /></span>Control de RTP (controlás qué porcentaje pagar)</p>
                        <p className='flex items-center gap-2 sm:mt-3 mt-2 sm:text-base font-medium text-white font-Inter opacity-80 text-sm xl:max-w-[412px]'><span><CheckIcon /></span>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                        <p className='flex items-center gap-2 mt-2 text-sm font-medium text-white sm:mt-3 sm:text-base font-Inter opacity-80'><span><CheckIcon /></span>Aplicación para android y windows de regalo.</p>
                        <p className='flex items-center gap-2 mt-2 text-sm font-medium text-white sm:mt-6 sm:text-base font-Inter opacity-80'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                    </div>
                </div>
                <div className='w-full border border-white rounded-2xl mt-10 sm:mt-16 md:mt-24 lg:mt-[150px] relative z-20 overflow-hidden'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton md:leading-[57.6px] text-white text-center py-16 px-5 sm:px-0 xs:py-20 md:py-[96px] max-w-[520px] mx-auto'>lanza tu propia plataforma en sólo 2 semanas</h2>
                    <img className='absolute top-0 left-0 opacity-40 -z-10' src={img4} alt="images" />
                    <img className='absolute bottom-0 right-0 opacity-90 -z-10' src={img5} alt="images" />
                </div>
                <div className=" flex flex-col md:pb-12 lg:pb-20 xl:pb-[100px] mt-10 sm:mt-16 md:mt-24 lg:mt-[150px]">
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton leading-[57px] text-white text-center'>Juegos en vivo</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-12 lg:mt-[60px] relative gap-6">
                        {
                            slotsDataSecond.map((listing, index) => (
                                <div key={index} className={`relative flex flex-col items-center w-full duration-300 group ${listing.id === 3 ? "sm:col-span-2 md:col-span-1" : ""}`}>
                                    <img className={`w-full rounded-lg ${listing.id === 3 ? "sm:w-1/2 md:w-full" : ""}`} src={listing.img} alt={listing.title} />
                                    <div className="absolute flex items-center justify-center w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                        <div className="relative"><CommonBtn text="Reproducir ahora" />
                                            <span className="absolute -left-1 -bottom-1"><BtnSvg /></span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Ellipse cstm="-top-[29%] left-0 !w-[15%]" />
            <Ellipse cstm="-bottom-[10%] right-0 !w-[10%]" />
        </div>
    )
}

export default Jackpot

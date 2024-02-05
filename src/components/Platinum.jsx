import CommonBtn from "./CommonBtn"
import { BtnSvg, CheckIcon, Ellipse } from "./Icons"
import img from '../assets/images/seven2.webp'
const Platinum = () => {
    return (
        <div className="w-full mt-6 sm:mt-10 md:mt-12 lg:mt-[64px] bg-gradient-to-r from-[#062023] to-[#052025] rounded-2xl border-[0.5px] border-white border-opacity-50 relative">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-10 py-8 sm:py-12 md:py-16 lg:py-[78px] px-5 sm:px-16 md:px-[50px]">
                <div className='flex flex-col justify-center order-2 lg:pr-10 max-lg:items-center lg:order-1'>
                    <h2 className='md:text-[32px] text-[26px] sm:text-3xl font-normal font-Anton md:leading-[57px] text-white'>Platinum</h2>
                    <p className='flex items-center gap-2 mt-2 text-sm font-medium text-white sm:mt-4 max-lg:text-center sm:text-base font-Inter opacity-80'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl mt-3 sm:mt-6 md:mt-8 font-normal font-Anton md:leading-[57px] text-white'>Consultar precio</h2>
                    <p className='flex items-center gap-2 mt-4 text-sm font-medium text-white sm:text-base font-Inter opacity-80'><span><CheckIcon /></span>Personalizable </p>
                    <div className="relative mt-5 sm:mt-8 md:mt-10"><CommonBtn text="Comprar ahora" />
                        <span className="absolute -left-1 -bottom-1"><BtnSvg /></span>
                    </div>
                </div>
                <div className="flex order-1 lg:order-2 max-lg:justify-center"><img src={img} alt="jackpot" /></div>
            </div>
            <Ellipse cstm="!max-w-[162px] !min-h-[162px] !blur-[65px] right-[7%] top-[13%]" />
        </div>
    )
}

export default Platinum

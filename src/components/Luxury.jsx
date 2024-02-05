import CommonBtn from './CommonBtn';
import { BtnSvg2, CheckIcon } from './Icons';
import imgbg from '../assets/images/Luxurysecbg.webp'
import Hukum from '../assets/images/LuxuryA.webp'
import imgA from '../assets/images/LuxuryAPan.webp'
import Ludo from '../assets/images/Luxuryludo.webp'
import Crm from '../assets/images/Luxurycrm.webp'
const Luxury = () => {
    return (
        <div className='relative '>
            <div className="w-full mt-6 sm:mt-10 md:mt-12 lg:mt-[64px] bg-gradient-to-r from-[#062023] to-[#052025] rounded-2xl border-[0.5px] border-white border-opacity-50">
                <div className="max-w-[419px] mx-auto gap-6 lg:gap-10 pt-10 md:pt-[46px] pb-8 relative z-30">
                    <div className='flex flex-col items-center px-5 sm:px-0'>
                        <h2 className='md:text-[32px] text-[26px] sm:text-3xl font-normal font-Anton md:leading-[57px] text-white'>Luxury</h2>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton lg:leading-[57px] text-white mt-4 sm:mt-5 lg:mt-8'>$9000</h2>
                        <div className='flex flex-col max-w-[419px] gap-3 mt-3 sm:mt-4'>
                            <p className='flex gap-2 text-sm font-medium text-center text-white sm:text-base font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] justify-center'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</span></p>
                            <p className='flex gap-2 text-sm font-medium text-center text-white sm:text-base font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] justify-center'>Control de RTP (controlás qué porcentaje pagar)</span></p>
                            <p className='flex gap-2 text-sm font-medium text-center text-white sm:text-base font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] justify-center'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</span></p>
                            <p className='flex gap-2 text-sm font-medium text-center text-white sm:text-base font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] justify-center'>Aplicación para Android y Windows de regalo.</span></p>
                            <p className='flex gap-2 text-sm font-medium text-center text-white sm:text-base font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] justify-center'>Tiempo de creación 2 a 3 semanas</span></p>
                        </div>
                        <div className="relative mt-5 sm:mt-8 md:mt-9"><CommonBtn cstm="bg-gradient-to-br to-[#51C8EF] from-[#7AF57A] !border-[0px] !text-black" text="Comprar ahora" />
                            <span className="absolute -left-1 -bottom-1"><BtnSvg2 /></span>
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute top-0 left-0 w-full h-full' src={imgbg} alt="bg" />
            <img className='absolute bottom-[10%] left-[6%] max-w-[80px] lg:max-w-[120px] max-sm:hidden' src={Hukum} alt="bg" />
            <img className='absolute right-[6%] top-[10%] max-sm:hidden max-w-[100px] lg:max-w-[140px]' src={imgA} alt="bg" />
            <img className='absolute bottom-[15%] right-[7%] max-sm:hidden max-w-[46px] lg:max-w-[66px]' src={Ludo} alt="bg" />
            <img className='absolute top-[12%] left-[10%] max-sm:hidden max-w-[46px] lg:max-w-[78px]' src={Crm} alt="bg" />
        </div>
    )
}

export default Luxury

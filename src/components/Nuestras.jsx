import jackpotimg from '../assets/images/circlegame.webp';
import CommonBtn from './CommonBtn';
import { BtnSvg, CheckIcon } from './Icons';

const Nuestras = () => {
    return (
        <div className="w-full mt-6 sm:mt-12 md:mt-16 lg:mt-[90px] bg-gradient-to-r from-[#062023] to-[#052025] rounded-2xl border-[0.5px] border-white border-opacity-50">
            <div className="grid items-center grid-cols-1 xl:grid-cols-2 xl:gap-10 pt-8 sm:pt-10 md:pt-[57px] pb-8">
                <div className='flex justify-center'><img src={jackpotimg} alt="jackpot" /></div>
                <div className='flex flex-col items-center justify-center px-5 xl:pr-10 xl:items-start xl:justify-start xl:px-0'>
                    <h2 className='md:text-[32px] text-[26px] sm:text-3xl font-normal font-Anton md:leading-[57px] text-white max-xl:text-center'>Silver</h2>
                    <p className='flex items-center gap-2 mt-4 text-base font-medium text-white font-Inter opacity-80 max-xl:text-center'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton md:leading-[57px] text-white mt-4 md:mt-6 lg:mt-8 max-xl:text-center'>$5000</h2>
                    <div className='flex flex-col max-w-[419px] gap-3 mt-4'>
                        <p className='flex gap-2 text-sm font-medium text-white sm:text-base max-xl:text-center font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] max-xl:justify-center'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</span></p>
                        <p className='flex gap-2 text-sm font-medium text-white sm:text-base max-xl:text-center font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] max-xl:justify-center'>Control de RTP (controlás qué porcentaje pagar)</span></p>
                        <p className='flex gap-2 text-sm font-medium text-white sm:text-base max-xl:text-center font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] max-xl:justify-center'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</span></p>
                        <p className='flex gap-2 text-sm font-medium text-white sm:text-base max-xl:text-center font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] max-xl:justify-center'>Aplicación para Android y Windows de regalo.</span></p>
                        <p className='flex gap-2 text-sm font-medium text-white sm:text-base max-xl:text-center font-Inter opacity-80'><span><CheckIcon /></span><span className='flex w-[95%] max-xl:justify-center'>Tiempo de creación 2 a 3 semanas</span></p>
                    </div>
                    <div className="relative mt-5 sm:mt-8 md:mt-10"><CommonBtn text="Comprar ahora" />
                        <span className="absolute -left-1 -bottom-1"><BtnSvg /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nuestras

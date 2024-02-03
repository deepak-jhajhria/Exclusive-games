import img from '../assets/images/casino.webp'
import CommonBtn from './CommonBtn'
import { BtnSvg2 } from './Icons'

const Casino = () => {
    return (
        <div className='bg-no-repeat bg-[url(./assets/images/sec5bg.png)] bg-cover bg-center py-32 sm:py-40 md:py-44 lg:py-[220px]'>
            <div className="container max-w-[1140px] pb-5">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 xl:gap-[56px] lg:py-10 xl:py-20">
                    <div className='flex flex-col'>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton leading-[57px] text-[#00141B]'>Por qué elegirnos</h2>
                        <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-[#00141B] sm:mt-3 md:mt-4 font-Inter opacity-80">En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                        <div className="relative mt-5 sm:mt-7 md:mt-10"><CommonBtn cstm="bg-gradient-to-br to-[#51C8EF] from-[#7AF57A] border-[0px] !text-black" text="Aprende más" />
                            <span className="absolute -left-1 -bottom-1"><BtnSvg2 /></span>
                        </div>
                    </div>
                    <div>
                        <img className='w-full rounded-2xl' src={img} alt="image casino" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Casino

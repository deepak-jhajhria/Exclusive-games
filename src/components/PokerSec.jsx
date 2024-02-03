import img1 from '../assets/images/sec2img1.webp'
import img2 from '../assets/images/sec2img2.webp'

const PokerSec = () => {
    return (
        <div className="container -mt-4 max-w-[1140px] pb-8 sm:pb-12 md:pb-20 lg:pb-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-[64px] w-full">
                <div className="flex flex-col">
                    <img className='w-[90%] mx-auto md:w-full order-2 md:order-1' src={img1} alt="poker with friends" />
                    <div className='flex flex-col max-sm:mb-7 max-md:mb-10 md:mt-[60px] max-w-[444px] order-0 md:order-2'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-Anton lg:leading-[57px] text-white'>Nuestra Visión</h2>
                        <p className='mt-2 text-sm font-medium text-white sm:mt-3 md:mt-4 sm:text-base font-Inter opacity-80'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                        <p className='text-[#7AF57A] text-base font-Inter font-bold mt-4 sm:mt-5 md:mt-6'>Aprende más {'-->'} </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className='flex flex-col mb-7 sm:mb-10 md:mb-[60px] max-w-[444px]'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-Anton lg:leading-[57px] text-white'>Nuestra Misión</h2>
                        <p className='mt-2 text-sm font-medium text-white sm:mt-3 md:mt-4 sm:text-base font-Inter opacity-80'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                        <p className='text-[#7AF57A] text-base font-Inter font-bold mt-4 sm:mt-5 md:mt-6'>Aprende más {'-->'} </p>
                    </div>
                    <img className='w-[90%] mx-auto md:w-full' src={img2} alt="poker with friends" />
                </div>
            </div>
        </div>
    )
}

export default PokerSec

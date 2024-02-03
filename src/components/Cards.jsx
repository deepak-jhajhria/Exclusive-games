import Luxury from "./Luxury"
import Nuestras from "./Nuestras"
import Platinum from "./Platinum"

const Cards = () => {
    return (
        <div className="container max-w-[1140px] mt-10 sm:mt-16 md:mt-24 lg:mt-[150px]">
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton lg:leading-[57px] text-white text-center'>Nuestras ofertas</h2>
            <p className="flex flex-col items-center mt-2 text-sm font-medium leading-6 text-center text-white sm:mt-4 sm:text-base font-Inter opacity-80">Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
            <Nuestras />
            <Luxury />
            <Platinum />
        </div>
    )
}

export default Cards

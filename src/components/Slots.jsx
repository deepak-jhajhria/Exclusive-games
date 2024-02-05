import { BtnSvg, BtnSvg2, SlotArrow1, SlotArrow2, SlotIcon1, SlotIcon2, SlotIcon3 } from "./Icons"
import img1 from '../assets/images/slot1img.webp'
import img2 from '../assets/images/slot2img.webp'
import img3 from '../assets/images/slot3img.webp'
import img4 from '../assets/images/slot4img.webp'
import img5 from '../assets/images/slot5img.webp'
import img6 from '../assets/images/slot6img.webp'
import CommonBtn from "./CommonBtn"
import { useEffect, useState } from "react"
const Slots = () => {
    const slotsDataSecond = [
        { id: 1, img: img1, title: "Inteligencia", },
        { id: 2, img: img2, title: "Proactividad", },
        { id: 3, img: img3, title: "Innovación", },
        { id: 4, img: img4, title: "Innovación", },
        { id: 5, img: img5, title: "Innovación", },
        { id: 6, img: img6, title: "Innovación", },
    ]
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');

        }
    }, [isOpen]);

    const addToCart = (el) => {
        let AddItems = true
        if (AddItems) {
            setCart([...cart, el]);
            setIsOpen(true);
        }
        else {
        }
    };
    const removeToCart = (el) => {
        setIsOpen(false);
        let items = [...cart]
        items = items.filter(cartItem => cartItem.id !== el.id)
        setCart(items)
    };
    return (
        <div className="bg-no-repeat bg-[url(./assets/images/sec3bg.webp)] w-full bg-cover pt-16 xs:pt-28 sm:pt-36 md:pt-48 lg:pt-[243px] overflow-hidden relative z-30">
            <div className="container flex flex-col max-w-[1140px]">
                <h2 data-aos="fade-up" data-aos-duration="500" className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton leading-[57px] text-[#00141B] text-center'>Nuestros Atributos de Marca</h2>
                <div className="grid justify-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5 sm:mt-10 lg:mt-[60px] relative gap-6 sm:gap-8 xl:gap-0">
                    <div className="flex justify-center xl:justify-start">
                        <div className="flex flex-col items-center w-full max-w-[245px]">
                            <span data-aos="fade-up" data-aos-duration="500"><SlotIcon1 /></span>
                            <h2 data-aos="fade-up" data-aos-duration="500" className="text-[#00141B] font-Anton font-normal text-lg sm:text-xl leading-[26px] text-center mt-4">Inteligencia</h2>
                            <p data-aos="fade-up" data-aos-duration="500" className="text-[#00141B] font-Inter font-medium text-sm sm:text-base opacity-80 md:leading-[26px] text-center mt-2 xs:mt-3 sm:mt-4">Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>
                    </div>
                    <div className="flex justify-center xl:justify-center">
                        <div className="flex flex-col items-center w-full max-w-[245px]">
                            <span data-aos="fade-up" data-aos-duration="500"><SlotIcon2 /></span>
                            <h2 data-aos="fade-up" data-aos-duration="500" className="text-[#00141B] font-Anton font-normal text-lg sm:text-xl leading-[26px] text-center mt-4">Proactividad</h2>
                            <p data-aos="fade-up" data-aos-duration="500" className="text-[#00141B] font-Inter font-medium text-sm sm:text-base opacity-80 md:leading-[26px] text-center mt-2 xs:mt-3 sm:mt-4">Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                        </div>
                    </div>
                    <div className="flex justify-center sm:col-span-2 xl:col-span-1 xl:justify-end">
                        <div className="flex flex-col items-center w-full max-w-[245px] justify-center">
                            <span data-aos="fade-up" data-aos-duration="500"><SlotIcon3 /></span>
                            <h2 data-aos="fade-up" data-aos-duration="500" className="text-[#00141B] font-Anton font-normal text-lg sm:text-xl leading-[26px] text-center mt-4">Innovación</h2>
                            <p data-aos="fade-up" data-aos-duration="500" className="text-[#00141B] font-Inter font-medium text-sm sm:text-base opacity-80 md:leading-[26px] text-center mt-2 xs:mt-3 sm:mt-4">Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                        </div>
                    </div>
                    <span className="absolute top-0 left-[19%] hidden xl:block"><SlotArrow1 /></span>
                    <span className="absolute top-[50px] right-[19%] hidden xl:block"><SlotArrow2 /></span>
                </div>
            </div>
            <div className="container flex flex-col max-w-[1140px] mt-10 sm:mt-16 md:mt-24 lg:mt-[160px] pb-[430px] sm:pb-72 md:pb-[243px]">
                <h2 data-aos="fade-up" data-aos-duration="500" className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton lg:leading-[57px] text-[#00141B] text-center'>Slots </h2>
                <p data-aos="fade-up" data-aos-duration="500" className="text-[#00141B] font-Inter font-medium text-sm sm:text-base opacity-80 leading-[26px] text-center mt-3 md:mt-5 max-w-[904px] mx-auto">En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 md:mt-12 lg:mt-[60px] relative gap-5 lg:gap-6">
                    {
                        slotsDataSecond.map((el, index) => (
                            <div key={index} className="relative flex flex-col items-center w-full duration-300 group">
                                <div data-aos="fade-up" data-aos-duration="500"><img className="rounded-lg w-full xs:w-[70%] sm:w-full" src={el.img} alt={el.title} /></div>
                                <div className="absolute flex items-center justify-center w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                    <div data-aos="fade-up" data-aos-duration="500" onClick={() => addToCart(el)} className="relative"><CommonBtn text="Jugar" />
                                        <span className="absolute -left-1 -bottom-1"><BtnSvg /></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className="relative mx-auto mt-5 sm:mt-7 md:mt-10"><CommonBtn cstm="bg-gradient-to-br to-[#51C8EF] from-[#7AF57A] !border-[0px] !text-black" text="Mostrar más" />
                    <span className="absolute -left-1 -bottom-1"><BtnSvg2 /></span>
                </div>
            </div>
            {isOpen && (<div className="fixed z-50 -translate-x-1/2 w-full -translate-y-1/2 bg-white shadow-2xl lg:max-w-[400px] top-1/2 left-1/2 sm:max-w-[350px] max-w-[300px] rounded-lg min-h-[300px] sm:min-h-[400px]">{
                cart.map((el) => (
                    <div key={el.id} className='flex flex-col justify-between w-full h-full px-3 py-4'>
                        <div className="flex justify-center"><img className=' rounded-2xl' src={el.img} alt="cart-items" /></div>
                        <div className='flex items-center justify-between'>
                            <div onClick={() => removeToCart(el)} className="relative mx-auto mt-5 mb-5 sm:mt-7 md:mt-10 sm:mb-0"><CommonBtn cstm="bg-gradient-to-br to-[#51C8EF] from-[#7AF57A] !border-[0px] !text-black" text="Close" />
                                <span className="absolute -left-1 -bottom-1"><BtnSvg2 /></span>
                            </div>
                        </div>
                    </div>
                ))
            }</div>)}
            {isOpen && (
                <div className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-[30]'>
                </div>
            )}
        </div>
    )
}

export default Slots

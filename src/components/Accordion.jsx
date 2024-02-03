import { useState } from "react"
import { AddIcon, MinusIcon } from "./Icons";
const Accordion = () => {
    const [open, setOpen] = useState(0);
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    const accordionData = [
        { id: 1, title: "¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?", content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
        { id: 2, title: "¿Cómo garantizan la seguridad de las operaciones en sus juegos?", content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
        { id: 3, title: " ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?", content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
        { id: 4, title: "¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?", content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
        { id: 5, title: "¿Qué métodos de pago aceptan?", content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
        { id: 6, title: "¿Puedo probar sus juegos antes de comprometerme?", content: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
    ];
    return (
        <div className="container max-w-[970px] mt-10 sm:mt-16 md:mt-24 lg:mt-[150px]">
            <h2 className='text-white font-Anton font-normal text-center leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl uppercase'>Preguntas más frecuentes</h2>
            <div className="my-6 sm:my-10 lg:my-[60px]">
                {accordionData.map((item, index) => (
                    <div className={`border border-[#7E8D8F] mb-4 sm:mb-6 md:mb-8 rounded-md`} key={item.title}>
                        <div onClick={() => toggleAccordion(index)} className={` ${open === index ? "" : "pb-3 sm:pb-4"} cursor-pointer flex items-start pt-3 sm:pt-4 px-3 xs:px-4 md:px-5 justify-between`}>
                            <h2 className="w-[90%] text-white font-Anton font-normal text-sm xs:text-base sm:text-lg md:text-xl leading-6">{item.title}</h2>
                            <span className="flex items-center justify-center mt-1">{open === index ? (<MinusIcon />) : (<AddIcon />)}</span>
                        </div>
                        <p className={`duration-300 px-3 xs:px-4 md:px-5 font-Inter font-medium text-xs xs:text-sm sm:text-base text-white opacity-80 leading-6 overflow-hidden max-w-[880px]  ${open === index ? "max-h-28 sm:max-h-24 pt-1 xs:pt-2 sm:pt-3 pb-4" : "max-h-0"}`}>{item.content}</p>
                    </div>))
                }
            </div>
        </div>
    )
}

export default Accordion

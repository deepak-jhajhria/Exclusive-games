import img from '../assets/images/sevensec.webp'
import { Ellipse, SevenSecIcon1, SevenSecIcon2, SevenSecIcon3 } from './Icons'

const Seven = () => {
    const data = [
        { id: 1, svg: (<SevenSecIcon1 />), number: "200", para: "Páginas creadas" },
        { id: 2, svg: (<SevenSecIcon2 />), number: "98%", para: "Clientes Satisfechas" },
        { id: 3, svg: (<SevenSecIcon3 />), number: "200", para: "Divisas Disponibles" }
    ]
    return (
        <div className='relative'>
            <div className="container max-w-[1140px] pb-5 relative z-30">
                <div className="grid items-center xl:pt-20 xl:grid-cols-2 gap-9">
                    <div className='order-2 xl:order-1'>
                        <img className='w-full rounded-2xl' src={img} alt="image casino" />
                    </div>
                    <div className='flex flex-col order-1 ml-2 -mt-10 xl:order-2 sm:mt-0'>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl font-normal font-Anton lg:leading-[57px] text-white pb-8'>Más  razones para elegirnos</h2>
                        <div className='flex flex-col gap-6 lg:flex-row xl:flex-col'>
                            {data.map((items, index) => (
                                <div key={index} className=' bg-gradient-to-br from-[#51C8EF] to-[#7AF57A] max-w-[374px] rounded-2xl'>
                                    <div className='flex items-center py-6 px-5 xs:px-8 lg:px-14 bg-gradient-to-r from-[#051C20] to-[#051C22] m-[0.7px] rounded-2xl'>
                                        <span>{items.svg}</span>
                                        <div className='flex flex-col ml-9'>
                                            <p className='font-normal font-Anton text-2xl sm:text-[32px] leading-10 text-white'>{items.number}</p>
                                            <p className='text-sm font-medium leading-6 text-white sm:text-base font-Inter'>{items.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Ellipse cstm="-top-[49%] left-0 !w-[15%]" />
            <Ellipse cstm="top-[9%] right-0 !w-[15%]" />
        </div>
    )
}

export default Seven

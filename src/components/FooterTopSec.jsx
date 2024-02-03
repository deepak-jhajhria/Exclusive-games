import CommonBtn from "./CommonBtn"
import { BtnSvg2 } from "./Icons"

const FooterTopSec = () => {
    return (
        <div className="container max-w-[1140px] bg-[url(./assets/images/footertopsecbg.webp)] bg-cover bg-center bg-no-repeat">
            <div className='w-full border border-white rounded-2xl mt-10 sm:mt-16 md:mt-24 lg:mt-[150px] flex flex-col items-center py-12 sm:py-16 md:py-24 lg:py-[104px]'>
                <h2 className='text-[26px] sm:text-3xl md:text-[32px] font-normal font-Anton leading-[41.6px] text-white text-center max-w-[593px] mx-auto px-3 sm:px-0'>Lanza tu propia plataforma en sólo 2 semanas</h2>
                <div className="relative mt-5 sm:mt-7 md:mt-10"><CommonBtn cstm="bg-gradient-to-br to-[#51C8EF] from-[#7AF57A] !border-[0px] !text-black" text="Aprende más" />
                    <span className="absolute -left-1 -bottom-1"><BtnSvg2 /></span>
                </div>
            </div>
        </div>
    )
}

export default FooterTopSec

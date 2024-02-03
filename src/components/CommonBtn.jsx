import '../App.css'
const CommonBtn = (props) => {
  return (
    <button className={`py-[11px] hover:border-transparent Btn px-[38px] md:py-[13px] md:px-[46px] bg-transparent relative z-10 text-white font-Inter font-bold text-base leading-6 rounded-full duration-300 border-[1.5px] hover:text-white group ${props.cstm}`}>{props.text}</button>
  )
}

export default CommonBtn

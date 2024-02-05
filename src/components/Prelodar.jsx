const Preloder = () => {
    return (
        <div className="bg-[#00141B]">
            <div className='flex items-center justify-center w-full min-h-screen bg-[url(./assets/images/Herosectionbg4.webp)] bg-cover bg-center bg-no-repeat'>
                <div className="loader w-12 h-12 relative -translate-x-6 after:absolute after:w-full after:h-full after:rounded-full after:mix-blend-multiply after:bg-[#73ED8D] before:absolute before:w-full before:h-full before:rounded-full before:mix-blend-multiply before:bg-[#5AD2D5]"></div>
            </div>
        </div>
    )
}
export default Preloder

const Banner = () => {
  return (
    <div className='w-full h-[1000px] bg-banner bg-center bg-no-repeat bg-cover relative'>
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40'>
        </div>
        <div className='w-full h-full flex items-center justify-center space-x-[50px] p-12 relative z-20'>
            {/* div text */}
            <div className='flex flex-col space-y-5 items-baseline w-[50%]'>
                <p className='text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-3 text-md'>TV Show</p>
                <div className='flex flex-col space-y-4'>
                    <h2 className='text-white text-3xl font-bold'>Nghe noi em thich toi</h2>
                    <div className='flex items-center space-x-3'>
                    <img src="src/assets/rating.png" alt="rating" className="w-8 h-8"/>
                    <img src="src/assets/rating.png" alt="rating" className="w-8 h-8"/>
                    <img src="src/assets/rating.png" alt="rating" className="w-8 h-8"/>
                    <img src="src/assets/rating.png" alt="rating" className="w-8 h-8"/>
                    <img src="src/assets/rating-half.png" alt="rating-haft" className="w-8 h-8"/>
                </div>
                <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur non dolore animi obcaecati, voluptatibus commodi repellat at dicta. Animi eius repellat molestias quam, alias reiciendis modi aspernatur? Culpa, nobis illo!</p>
                <div className="flex items-center space-x-4">
                    <button className="p-3 text-white bg-black font-bold text-sm">
                        Chi Tiet
                    </button>
                    <button className="p-3 text-white bg-red-600 font-bold text-sm">
                        Xem Phim
                    </button>
                </div>
                </div>
            </div>
            {/* div image */}
            <div className="w-[50%] flex items-center">
                <div className="w-[300px] h-[400px] relative group cursor-pointer">
                    <img src="src/assets/temp-1.jpeg" alt="" className="w-full h-full object-cover"/>
                    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"> 
                        <img src="src/assets/play-button.png" alt="play" className="w-16 h-16 relative z-20" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
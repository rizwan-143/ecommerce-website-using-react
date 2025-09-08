import { useEffect, useState } from "react"
import { heroImg } from "../../../public/pictures"


function Hero(){
    const [currentImgPage , setCurrentImgPage] = useState(1)
    const imgPerPage  = 1
    const totalPages = Math.ceil(heroImg.length / imgPerPage)
    const indexOfLast = currentImgPage * imgPerPage
    const indexOfStart = indexOfLast - imgPerPage
    const currentImg = heroImg.slice(indexOfStart , indexOfLast)

    useEffect(() => {
       const intervals = setInterval(() => {
           setCurrentImgPage((prev) => (prev < totalPages ? prev + 1 : 1) )

        }, 5000);
        return () => clearInterval(intervals)
    } , [totalPages])
    return (
        <>
        <div className="relative">
            <button className={`absolute bg-white text-black p-2 top-1/2 left-2
                              hover:bg-gray-400 transition-all duration-300 ${currentImgPage === 1 ? "hidden" : ""} `}
                     onClick={() => setCurrentImgPage(prev => prev > 1 ? prev - 1 : prev)}><i className="fa-solid fa-angle-left"></i></button>
            {
            currentImg?.map((img , index) => {
              return  <img src={img.img} alt="" key={index} className={`w-full  h-[50vh] sm:h-[60vh] lg:h-[70vh]
                 transition-all duration-500 rounded-lg
                  `} />
            })
        }

                    <button className={`absolute  bg-white text-black p-2 top-1/2 right-2
                                        hover:bg-gray-400 transition-all duration-300 ${currentImgPage === totalPages ? "hidden" : ""}`}
                            onClick={() => setCurrentImgPage(prev => prev < totalPages ? prev + 1 : prev)} ><i className="fa-solid fa-angle-right"></i></button>

        </div>
        </>
    )
}

export default Hero
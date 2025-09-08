function Footer(){
    return (
        <>
        <div className="p-5 flex flex-col lg:flex-row bg-gray-300 justify-between mt-5 gap-4">
            <div className="flex flex-col gap-5 w-full lg:w-1/2">
                <h2 className="font-bold uppercase">ecommerce website</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio cum veritatis, reiciendis culpa officia. Nisi ad eos iusto! Inventore!</p>
            </div>

            <div className="">
                <h2>quick links</h2>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>products</li>
                    <li>contact</li>
                    <li>services</li>
                </ul>
            </div>


              <div className="socials flex flex-col gap-6">
                <h1 className="text-3xl text-white font-bold">lets talk</h1>
                    <ul className="flex gap-2 text-white [&>*]:flex
                     [&>*]:bg-gray-400 [&>*]:rounded-full [&>*]:cursor-pointer [&>*]:justify-center [&>*]:items-center [&>*]:w-7 [&>*]:h-7">
                        <li className="p-1 rounded-full  w-7 h-7"><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-x-twitter"></i></li>
                        <li><i class="fa-brands fa-square-instagram"></i></li>
                    </ul>
                </div>
        </div>
        </>
    )
}

export default Footer;
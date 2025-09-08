import { useNavigate } from "react-router-dom";
function NotFound(){


    const navigate = useNavigate()
    function handlePage(){
        navigate('/')
    }

    return (
        <>
        <div className="flex flex-col justify-center items-center gap-4 h-screen">
            <h1 className="text-3xl lg:text-8xl text-red-700 font-bold">opps!</h1>
            <p className="uppercase font-bold">404 - page not found</p>
            <p className="text-center">the page you are looking for have been removed had its name changed or is temporarily unavailable</p>
            <button className="bg-red-400 px-3 py-1 capitalize text-white font-bold 
                                 hover:bg-red-600 transition-all duration-300 "
                                 onClick={handlePage}>go to home</button>
        </div>
        </>
    )
}

export default NotFound;
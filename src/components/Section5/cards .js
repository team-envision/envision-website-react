export default function card({image,heading,description}){

    const img = require('../../assets/images/whatwedo/'+image);
    console.log(img)

    return(
        <div className="w-[200px] h-[30vh] bg-white hover:cursor-pointer hover:scale-105 hover:shadow-lg transition flex flex-col justify-center rounded-xl group">
        <div className="w-[70px] h-[70px] flex justify-center bg-[#EF6522] mx-auto rounded-full">
            <img src={img} className="rounded-full w-[40px] mx-auto"/>
        </div>
        <p className="text-center font-black text-xl mt-2 text-[#EF6522]">
            {heading}
        </p>
        <p className="text-center mx-[10px]">
            {description}
        </p>
        </div>
    )
}
export default function card({image,number,title}){

    const img = require('../../assets/images/inbrief/'+image);
    console.log(img)

    return(
        <div className="w-[200px] h-[35vh] bg-white hover:cursor-pointer hover:scale-105 hover:shadow-lg transition flex flex-col rounded-xl group justify-center gap-y-3">
            <img src={img} className=" w-[70px] mx-auto "/>
        <div className="w-[50px] h-[50px] flex flex-col text-2xl justify-center bg-[#EF6522] mx-auto rounded-full text-white align-middle font-bold text-center">
            {number}
        </div>
        {/* <p className="text-center font-black text-xl mt-2 text-[#EF6522]">
        </p> */}
        <p className="text-center mx-[10px]">
            {title}
        </p>
        </div>
    )
}
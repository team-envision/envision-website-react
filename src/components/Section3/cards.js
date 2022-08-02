import Tilt from "react-vanilla-tilt";
import styles from "./cards.module.css";
export default function card({image,heading,description}){

    const img = require('../../assets/images/whatwedo/'+image);
    console.log(img)
    
    return(
        <Tilt className={styles.box}>
        <div className="bg-[#ffffff10] w-[200px] h-[35vh] hover:cursor-pointer hover:scale-[1.02] hover:shadow-lg transition flex flex-col justify-center rounded-3xl group hover:bg-[#EF652230] ">
            
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
        </Tilt>
    )
}
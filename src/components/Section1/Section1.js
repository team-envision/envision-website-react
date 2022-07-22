import bgtext from "../../assets/images/envisiontext.svg"
import envisionname from "../../assets/images/envisionname.svg"
import logo from "../../assets/images/envisionmain.svg"
import abstract from "../../assets/images/abstract1.svg"
import arrow from "../../assets/images/arrow.svg"

function slide(){
    let height = window.screen.height;
    window.scrollBy(0, height);
}

export default function Section1(){
    return(<div>
        <div className="absolute w-[98vw] mx-2 top-[37vh] -z-50">
        <img src={bgtext} className="w-[94vw] opacity-[0.5] top-[37vh] mx-auto"></img>
        </div>
        <div className="flex flex-row justify-between z-20">

        <img src={envisionname} className="w-[55vw]"></img>
        <div className="bg-no-repeat" style={{backgroundImage:`url(${abstract})`, backgroundPosition:"30% 30%"}}>
        <img src={logo} className="w-[33vw]"></img>

        </div>
        </div>
        <div onClick={slide}>
            <img src={arrow} className="absolute bottom-[5vh] left-[5vh] animate-bounce cursor-pointer"></img>
        </div>
    </div>)
}
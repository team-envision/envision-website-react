

const img = require('../../assets/images/inbrief/'+image);


export default function ProjectCards({image}){
    return(
        <div className="w-[70px] h-[70px] flex justify-center  mx-auto rounded-full">
            <img src={img} className="rounded-full w-[40px] mx-auto"/>
        </div>
    )
}
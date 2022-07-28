import Heading from "../heading";
import Card from "./cards";
import data from "../../data/whatwedo.json";

export default function Section3() {
    
    // console.log(data[1].heading);

    
    return(
        <div>
        <Heading
          title="What do we do?"
          background="What do we do?"
          description="“Divison of Team Envison”"
          mt="0"
        />
        <div className="flex flex-row justify-between">
            <div className="md:basis-1/2 md:flex hidden"></div>
        <div className=" flex flex-wrap justify-around align-right px-7 py-5 gap-x-2">
        {Object.keys(data).map((card)=>{
            // console.log(data[card].heading);
            return(
                <div className="pt-6 rounded-xl overflow-visible">
                    <Card heading={data[card].heading} description={data[card].description} image={data[card].image} />
                </div>
            )
        })}

        </div>


        </div>
        
        </div>
    )
}
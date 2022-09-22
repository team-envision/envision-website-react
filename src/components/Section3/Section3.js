import Heading from "../heading";
import Card from "./cards";
import data from "../../data/whatwedo.json";
import macbook from "../../assets/images/whatwedo/macbook.png";
import iphone from "../../assets/images/whatwedo/iphone.png";
import Tilt from "react-vanilla-tilt";

export default function Section3() {
    
    // console.log(data[1].heading);

    
    return(
        <div id="divisions">
        <Heading
          title="What do we do?"
          background="What do we do?"
          description="“Divison of Team Envison”"
          mt="0"
        />
        <div className="flex flex-row justify-between">
            <div className="md:basis-1/2 flex-col justify-start md:flex hidden">
                <img className="w-[30vw]" src={macbook}></img>
                <div className=" flex flex-row shadow-0 justify-start -ml-[10vh] -mt-5">
                    <img src={iphone}></img>
                    <img className="-ml-[20vh] " src={iphone}></img>

                </div>
            </div>
        <div className=" flex flex-wrap justify-around align-right px-7 md:basis-1/2 basis-full py-5 gap-x-2">
        {Object.keys(data).map((card)=>{
            // console.log(data[card].heading);
            return(
                    // <Tilt className="pt-6 rounded-xl overflow-visible">
                <div className="pt-6 rounded-xl overflow-visible">
                    <Card heading={data[card].heading} description={data[card].description} image={data[card].image} />
                </div> 
                    // </Tilt>
            )
        })}

        </div>


        </div>
        
        </div>
    )
}
import Heading from "../heading";
import Card from "./cards";
import data from "../../data/envisioninbrief.json";

export default function Section4(){
    
    console.log(data)

    return(
        <div>
        <Heading
          title="Envision in Brief"
          background="Envision in Brief"
          description=""
          mt="0"
        />

        <div className=" flex flex-wrap justify-around align-right px-7 py-5 gap-x-2">
        {Object.keys(data).map((card)=>{
            // console.log(data[card].heading);
            return(
                <div className="pt-6 rounded-xl overflow-visible">
                    <Card number={data[card].number} title={data[card].title} image={data[card].image} />
                </div>
            )
        })}

        </div>


        <Heading
          title="Featured Projects"
          background="Featured Projects"
          description="Our team have worked hard and spent sleepless nights to come up with innovative projects that we believe can help the society by making even a small difference."
          mt="0"
        />




        <div>

        </div>
        </div>




    )
}
import Heading from "../heading";
import Card from "./cards";
import data from "../../data/envisioninbrief.json";
import project1 from '../../assets/images/Section4/project1.svg';
import project2 from '../../assets/images/Section4/project2.svg';
import project3 from '../../assets/images/Section4/project3.svg';
import project4 from '../../assets/images/Section4/project4.svg';
import project5 from '../../assets/images/Section4/project5.svg';
import project6 from '../../assets/images/Section4/project6.svg';

export default function Section4() {
  console.log(data);

  return (
    <div>
      <Heading
        title="Envision in Brief"
        background="Envision in Brief"
        description=""
        mt="0"
      />

      <div className=" flex flex-wrap justify-around align-right px-7 py-5 gap-x-2">
        {Object.keys(data).map((card) => {
          // console.log(data[card].heading);
          return (
            <div className="pt-6 rounded-xl overflow-visible">
              <Card
                number={data[card].number}
                title={data[card].title}
                image={data[card].image}
              />
            </div>
          );
        })}
      </div>

      <Heading
        title="Featured Projects"
        background="Featured Projects"
        description="Our team have worked hard and spent sleepless nights to come up with innovative projects that we believe can help the society by making even a small difference."
        mt="0"
      />

      <div className="px-2 py-2 mx-auto lg:pt-5 lg:px-20">
        <div class="flex flex-wrap -m-1 ">
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2 m-4">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src={project1}
              ></img>
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2 m-4">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src={project2}
              ></img>
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2 m-4">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src={project3}
              ></img>
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2 m-4">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src={project4}
              ></img>
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2 m-4">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src={project5}
              ></img>
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2 m-4">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src={project6}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
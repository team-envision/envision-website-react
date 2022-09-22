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
    <div id="featured">
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

      <div className="px-2 py-2 mx-auto lg:pt-5 lg:px-20 hidden lg:block md:block">
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

      <div
        id="featured"
        className="carousel slide carousel-fade relative px-2 py-2 mx-auto lg:pt-5 lg:px-20 lg:hidden md:hidden"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-72 mx-auto">
          <div class="carousel-item active float-left w-full">
            <img src={project1} class="block w-full" alt="project 1" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={project2} class="block w-full" alt="project 2" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={project3} class="block w-full" alt="project 3" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={project4} class="block w-full" alt="project 4" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={project5} class="block w-full" alt="project 5" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={project6} class="block w-full" alt="project 6" />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-4"
          type="button"
          data-bs-target="#featuredProjectsFade"
          data-bs-slide="prev"
        >
          <span class="inline-block bg-no-repeat" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke="#F36C25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-4"
          type="button"
          data-bs-target="#featuredProjectsFade"
          data-bs-slide="next"
        >
          <span class="inline-block bg-no-repeat" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke="#F36C25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </span>

          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
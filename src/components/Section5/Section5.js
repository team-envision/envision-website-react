import Heading from "../heading";
import data from "../../data/projects.json";
import collaboration1 from '../../assets/images/Section5/collaboration1.svg';
import collaboration2 from '../../assets/images/Section5/collaboration2.svg';

export default function Section5() {
  console.log(data);
  return (
    <div className="mt-10">
      <Heading
        title="Work Collaborations"
        background="Work Collaborations"
      ></Heading>

      <div className="px-2 py-2 mx-auto lg:pt-5 lg:px-20 hidden lg:block md:block">
        <div class="flex flex-wrap -m-1  justify-around">
          <div class="flex">
            <div class="w-full p-1 md:p-2 m-4">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src={collaboration1}
              ></img>
            </div>
          </div>
          <div class="flex ">
            <div class="w-full p-1 md:p-2 m-4">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full"
                src={collaboration2}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div
        id="workCollaborationFade"
        className="carousel slide carousel-fade relative px-2 py-2 mx-auto lg:pt-5 lg:px-20 lg:hidden md:hidden"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-72 mx-auto">
          <div class="carousel-item active float-left w-full">
            <img src={collaboration1} class="block w-full" alt="project 1" />
          </div>
          <div class="carousel-item float-left w-full">
            <img src={collaboration2} class="block w-full" alt="project 2" />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute -left-1 top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-4"
          type="button"
          data-bs-target="#workCollaborationFade"
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
          class="carousel-control-next absolute -right-1  top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-4"
          type="button"
          data-bs-target="#workCollaborationFade"
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

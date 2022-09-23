import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsMailbox,
  BsGlobe,
} from "react-icons/bs";

import CountUp from "react-countup";
export default function Card({ user }) {
  return (
    // <div className="relative w-[500px] h-[250px]">
    // <div>
    <div className=" w-[300px] md:w-[350px] h-[180px] rounded-3xl p-5 py-7 font-[roboto]  bg-white flex flex-row relative overflow-visible group transition duration-300 hover:shadow-xl lg:hover:scale-[1.02] my-3 overflow-x-hidden overflow-y-visible">
      <div className="flex flex-col max-w-[220px] align-middle my-auto">
        <p className=" text-[1rem] md:text-[1.3rem] group-hover:text-[#EF6522] transition max-w-[170px] md:max-w-[180px]">
          {user.name}
        </p>
        <p className=" text-[0.95rem] md:text-[1.05rem] text-[#bbb]">
          {user.domain}
        </p>
        <div className="flex flex-row mt-5 text-xl md:gap-x-4 gap-x-2">
          {user.email ? (
            <a
              className="hover:cursor-pointer hover:text-[#EF6522]"
              target={"_blank"}
              href={`mailto:${user.email}`}
            >
              <BsMailbox />
            </a>
          ) : null}
          {user.linkedin ? (
            <a
              target={"_blank"}
              className="hover:cursor-pointer hover:text-[#EF6522]"
              href={user.linkedin}
            >
              <BsLinkedin />
            </a>
          ) : null}
          {user.github ? (
            <a
              className="hover:cursor-pointer hover:text-[#EF6522]"
              target={"_blank"}
              href={user.github}
            >
              <BsGithub />
            </a>
          ) : null}
          {user.instagram ? (
            <a
              className="hover:cursor-pointer hover:text-[#EF6522]"
              href={user.instagram}
              target={"_blank"}
            >
              <BsInstagram />
            </a>
          ) : null}

          {user.others ? (
            <a
              className="hover:cursor-pointer hover:text-[#EF6522]"
              target={"_blank"}
              href={user.others}
            >
              <BsGlobe />
            </a>
          ) : null}
        </div>
      </div>
      {/* <div className="basis-1/2">
        </div> */}
      <img
        src={user.image}
        className="w-[145px] md:w-[170px] absolute right-0 bottom-[1px] translate-x-3 duration-300 saturate-0 group-hover:saturate-100 transition hover:cursor-pointer group-hover:scale-[1.1] group-hover:translate-y-[-0.9vh]"
      ></img>
    </div>
    // </div>
  );
}

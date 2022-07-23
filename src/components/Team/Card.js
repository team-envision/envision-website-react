import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
export default function Card({ user }) {
  return (
    // <div className="relative w-[500px] h-[250px]">
    // <div>
    <div className=" w-[300px] md:w-[350px] h-[150px] rounded-3xl p-5 py-7 font-[roboto]  bg-white flex flex-row relative overflow-visible group transition duration-300 hover:shadow-xl lg:hover:scale-[1.02] my-3">
      <div className="flex flex-col max-w-[220px] align-middle my-auto">
        <p className=" text-[1.2rem] md:text-[1.5rem] group-hover:text-[#EF6522] transition">
          {user.name}
        </p>
        <p className=" text-[1rem] md:text-[1.2rem] text-[#bbb]">
          {user.domain}
        </p>
        <div className="flex flex-row mt-5 text-2xl gap-x-5">
          {user.linkedin ? (
            <a
              className="hover:cursor-pointer hover:text-[#EF6522]"
              href={user.linkedin}
            >
              <BsLinkedin />
            </a>
          ) : null}
          {user.github ? (
            <a
              className="hover:cursor-pointer hover:text-[#EF6522]"
              href={user.github}
            >
              <BsGithub />
            </a>
          ) : null}
          {user.instagram ? (
            <a
              className="hover:cursor-pointer hover:text-[#EF6522]"
              href={user.instagram}
            >
              <BsInstagram />
            </a>
          ) : null}
        </div>
      </div>
      {/* <div className="basis-1/2">
        </div> */}
      <img
        src={user.image}
        className="w-[150px] md:w-[170px] absolute right-0 bottom-[1px] translate-x-3 duration-300 saturate-0 group-hover:saturate-100 transition hover:cursor-pointer group-hover:scale-[1.1] group-hover:translate-y-[-0.9vh]"
      ></img>
    </div>
    // </div>
  );
}

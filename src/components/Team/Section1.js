import logo from "../../assets/images/Team/envision.svg";
import Fade from "react-reveal/Fade";
import bgtext from "../../assets/images/Team/bgtext.svg";
import envisionname from "../../assets/images/Team/team.svg";
import abstract from "../../assets/images/Team/abstract1.svg";
import abstract2 from "../../assets/images/Team/abstract2.svg";

export default function Section1() {
  return (
    <div className="px-10 font-[roboto]">
      <Fade top cascade>
        <div className="absolute w-[35vw] mx-2 top-[33vh] left-[5vw] -z-50 px-5">
          <img
            src={bgtext}
            className="w-[84vw] opacity-[0.3] md:top-[30vh] mx-auto md:block hidden"
          ></img>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between z-20 pt-9">
          <img
            src={bgtext}
            className="w-[64vw] opacity-[1] align-center mx-auto md:hidden mt-[5vh] block absolute ml-[6vw] -z-50"
          ></img>
          <img
            src={envisionname}
            className="w-[75vw] lg:w-[35vw] lg:ml-[4vh] md:mx-0 mx-auto md:-mt-[15vh] -z-10"
          ></img>
          <div className="">
            <img
              src={logo}
              className="w-[65vw] md:w-[40vw] lg:w-[43vw] md:mt-0  mx-auto"
            ></img>
          </div>
          {/* <div className="bg-no-repeat md:hidden block">
            <img src={logo} className="w-[65vw]  mx-auto"></img>
          </div> */}
        </div>
        {/* <div onClick={slide}>
          <img
            src={arrow}
            className="absolute md:top-[75vh] md:left-[5vh] sm:scale-100 scale-50 top-[30vh] left-[85vw] hover:animate-bounce cursor-pointer"
          ></img>
        </div> */}
      </Fade>
      <Fade>
        <div className="flex flex-row flex-wrap min-h-[20vw] mt-24 md:mt-0">
          <img src={abstract} className="absolute left-0 w-[12vw] -mt-[5vw]" />
          <img src={abstract2} className="absolute right-0 w-[12vw] mt-[5vw]" />
          <div className="text-center w-[100vw] text-4xl gap-y-2 leading-7">
            <p className="text-[#EF6522] text-lg md:text-2xl lg:text-4xl">
              "All computers wait at the same speed."
            </p>

            <p className="mt-4">-unknown</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

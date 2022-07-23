import bgtext from "../../assets/images/envisiontext.svg";
import envisionname from "../../assets/images/envisionname.svg";
import logo from "../../assets/images/envisionmain.svg";
import abstract from "../../assets/images/abstract1.svg";
import arrow from "../../assets/images/arrow.svg";
import Fade from "react-reveal/Fade";

function slide() {
  let height = window.screen.height;
  window.scrollBy(0, height);
}

export default function Section1() {
  return (
    <div>
      <Fade top cascade>
        <div className="absolute w-[98vw] mx-2 top-[37vh] -z-50">
          <img
            src={bgtext}
            className="w-[94vw] opacity-[0.3] md:top-[37vh] mx-auto md:block hidden"
          ></img>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between z-20 pt-6">
          <img
            src={bgtext}
            className="w-[94vw] opacity-[1] align-center mx-auto md:hidden -mt-[8vh] block absolute ml-[3vw] -z-50"
          ></img>
          <img
            src={envisionname}
            className="w-[75vw] lg:w-[55vw] md:mx-0 mx-auto -mt-[5vh] -z-10"
          ></img>
          <div
            className="bg-no-repeat md:block hidden"
            style={{
              backgroundImage: `url(${abstract})`,
              backgroundPosition: "30% 30%",
            }}
          >
            <img src={logo} className="w-[65vw] md:w-[33vw] mx-auto"></img>
          </div>
          <div
            className="bg-no-repeat md:hidden block"
            style={{
              backgroundImage: `url(${abstract})`,
              backgroundPosition: "50% 50%",
              backgroundSize: "50% 50%",
            }}
          >
            <img src={logo} className="w-[65vw] lg:w-[33vw] mx-auto"></img>
          </div>
        </div>
        <div onClick={slide}>
          <img
            src={arrow}
            className="absolute md:top-[75vh] md:left-[5vh] sm:scale-100 scale-50 top-[30vh] left-[85vw] hover:animate-bounce cursor-pointer"
          ></img>
        </div>
      </Fade>
    </div>
  );
}

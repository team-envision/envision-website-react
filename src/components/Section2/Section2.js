import styles from "./Section2.module.css";
import brain from "../../assets/images/brain.svg";
import Heading from "../heading";
import Cards from "./circlecard";
import research from "../../assets/images/Section2/research.svg";
import society from "../../assets/images/Section2/society.svg";
import project from "../../assets/images/Section2/project.svg";
import campus from "../../assets/images/Section2/campus.svg";
import desg from "../../assets/images/Section2/abstract-desg.svg";
import ellipse from "../../assets/images/Section2/ellipse.svg";
export default function Section2() {
  return (
    <div>
      <img src={desg} className="max-w-[80vw] mt-10"></img>
      <img src={ellipse} className="absolute right-0 -z-10 max-w-[30vw]"></img>
      <section>
        {/* <div className="w-[100vw] outline text-[4vw] select-none">About us</div> */}
        <Heading
          title="About us"
          background="About us"
          description="“It is a team where we convert your vision into reality.”"
          mt="0"
        />
        <div className="flex flex-col md:flex-row px-5">
          <div>
            <img src={brain}></img>
          </div>
          <div className="basis-4/6 p-5 font-[roboto] text-xl text-justify md:mt-0 -mt-12 ">
            Team Envision is a Multidisciplinary technical team of Aaruush that
            aims to provide solutions to most campus and societal issues and
            problems. Team Envision participated in various hackathons like the
            Rajasthan Hackathon,Mozofest Hackathon, Accenture Blockchain etc and
            won under various categories. Team Envision is a consortium of AI,
            IoT, Blockchain, Web designers etc who work closely to ideate,
            design, fabricate and develop products to tackle campus and
            community issues and problems.
          </div>
        </div>
      </section>
      <section>
        <Heading
          title="Why Choose Us?"
          background="Why Choose Us?"
          description="Being such a multidisciplinary organisation working on various
          projects all day and year long till delivering products on time, 
          well you got no reason to not to."
          mt="10"
        />
        <div className="flex flex-row flex-wrap mt-24 px-4">
          <div className="md:basis-1/2 basis-full">
            <Cards
              icon={research}
              title="Research Oriented Projects"
              description="Our goal is to investigate various issues
concerning the environment and lifestyle
and research into it."
            />
          </div>
          <div className="md:basis-1/2 basis-full">
            <Cards
              icon={society}
              title="Society Issues"
              description="A social issue is a problem that influences
a large number of individuals. We aim to
give a solution to these problems for everyone."
            />
          </div>
          <div className="md:basis-1/2 basis-full">
            <Cards
              icon={project}
              title="Projects and Development"
              description="We as team envision work all around the
clock 24*7 and 365 days a year to build
various projects to client's staisfaction."
            />
          </div>
          <div className="md:basis-1/2 basis-full">
            <Cards
              icon={campus}
              title="Campus Issues"
              description="We as Team Envision work on various issues
              aimed towards improving campus life of all
              college students."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

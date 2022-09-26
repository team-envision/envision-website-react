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
    <div id="about">
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
            Team Envision, the multidisciplinary technical team of Aaruush, was
            formed with the goal of finding solutions to the majority of
            societal and campus-related problems. It is a consortium of AI-ML,
            Cyber Security, Blockchain, Editorial, Game Developers, Web
            Developers, App Developers and Designers who work closely to ideate,
            fabricate and develop products that tackle the above-mentioned
            problems. Team Envision promotes learning and growth through
            effective solutions. Our team is composed of diligent and meticulous
            members, who through their skills have won various accolades for our
            institution. As a team, we have participated in various hackathons,
            namely the Smart India Hackathon, Rajasthan Hackathon, Mozofest
            Hackathon, Accenture Blockchain Hackathon etc. and have come out
            victorious. In Smart India Hackathon 2022, our team has successfully
            emerged as the winner. <br />
            <br />
            Bring us your ideas, we will{" "}
            <span className="font-bold">ENVISION</span> them together.
          </div>
        </div>
      </section>
      <section>
        <Heading
          title="What We Do?"
          background="What We Do?"
          description="Being a multidisciplinary organization, we work on various projects all around the clock till we deliver products on time
          "
          mt="10"
        />
        <div className="flex flex-row flex-wrap mt-24 px-4">
          <div className="md:basis-1/2 basis-full">
            <Cards
              icon={research}
              title="Research Oriented Projects"
              description="Our mission is to examine and research a variety of environmental and lifestyle issues concerning our campus or society and come up with the most sustainable solutions.
              "
            />
          </div>
          <div className="md:basis-1/2 basis-full">
            <Cards
              icon={society}
              title="Hackathons"
              description="We take part in a variety of hackathons across the globe that address real-world problems. We attempt to incorporate effective ideas that not only win us accolades, but also provide simple, creative and long-term solutions."
            />
          </div>
          <div className="md:basis-1/2 basis-full">
            <Cards
              icon={project}
              title="Projects and Development"
              description="Team Envision works around the clock, 24 hours a day, 7 days a week and 365 days a year, to complete diverse tasks to the satisfaction of our clients.
              "
            />
          </div>
          <div className="md:basis-1/2 basis-full">
            <Cards
              icon={campus}
              title="Technical Team of Aaruush"
              description="Team Envision represents Aaruush in all technical aspects, including the development of their official website and application, the management of various portals, and the maintenance of their social media presence."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

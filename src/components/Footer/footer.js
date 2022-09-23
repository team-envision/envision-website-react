import envision from "../../assets/images/Footer/envision.svg";
import heart from "../../assets/images/Footer/heart.svg";
import envisionlogo from "../../assets/images/envision.svg";
import {
  BsLinkedin,
  BsInstagram,
  BsTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsWordpress,
  BsYoutube,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiMail } from "react-icons/hi";
import aaruush from "../../assets/images/Footer/A22.png";
export default function Footer() {
  return (
    <footer
      className="w-[100vw] bg-white flex flex-col md:flex-row px-4 py-8 font-[roboto] mt-16 bottom-0 "
      id="footer"
    >
      <div className="flex flex-col md:basis-[25%] p-4 justify-around">
        <div>
          <img
            src={envisionlogo}
            alt="envision"
            className="w-[30vw] md:mx-0 mx-auto md:w-[15vw]"
          />
          <div className="flex flex-row ml-2 text-2xl gap-x-4 mt-3 justify-center md:justify-start">
            <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
              <BsLinkedin />
            </a>
            <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
              <BsInstagram />
            </a>
          </div>
        </div>
        <div>
          <img
            src={aaruush}
            alt="aaruush"
            className="w-[35vw] md:mx-0 mx-auto md:w-[18vw] mt-6"
          />
          <div className="flex flex-row ml-2 text-2xl gap-x-4 mt-3 justify-center md:justify-start">
            <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
              <BsLinkedin />
            </a>
            <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
              <BsInstagram />
            </a>
            <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
              <BsFacebook />
            </a>
            <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
              <BsTwitter />
            </a>
            <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
              <BsYoutube />
            </a>
            <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
              <BsWordpress />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:basis-[12.5%] text-center md:text-left py-6 gap-y-4">
        <p className="font-bold text-lg">Quick Links</p>
        <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
          Home
        </a>
        <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
          About
        </a>
        <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
          Division
        </a>
        <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
          Projects
        </a>
        <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
          Contact Us
        </a>
        <a className="hover:text-[#EF6522] hover:cursor-pointer transition">
          Join Us
        </a>
      </div>
      <div className="flex flex-col md:basis-[37.5%] py-6 px-8 gap-y-6 md:gap-y-2 basis-full md:text-left text-center">
        <p className="font-bold text-lg text-center">Office</p>
        <div className="flex  flex-col md:flex-row gap-x-2 mt-4 group gap-y-6">
          <span className="text-2xl basis-[10%] mx-auto my-auto group-hover:text-[#EF6522] transition">
            <GoLocation />
          </span>
          <span className=" basis-[90%]">
            Team Envision Room, PG 303, Main Campus, SRM IST, Kattankulathur,
            Tamil Nadu 603203
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-x-2 mt-4 group gap-y-6">
          <span className="text-2xl basis-[10%] mx-auto my-auto group-hover:text-[#EF6522] transition">
            <BsTelephoneFill />
          </span>
          <span className=" basis-[90%]">
            Sahaj Ghatiya - (
            <a
              href="tel:+918939398592"
              className="hover:text-[#EF6522] transition"
            >
              +91-8939398502
            </a>
            )
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-x-2 mt-4 group gap-y-6">
          <span className="text-2xl basis-[10%] mx-auto my-auto group-hover:text-[#EF6522] transition">
            <HiMail />
          </span>
          <span className=" basis-[90%]">
            <a href="mailto:envision@aaruush.org">envision@aaruush.org</a>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:basis-[25%] justify-center align-middle p-3 gap-y-2">
        <img src={envision} className="w-[40vw] md:w-[20vw] mx-auto"></img>
        <p className="text-center">With</p>
        <img src={heart} className="w-[5vw] md:w-[3vw] mx-auto"></img>
      </div>
    </footer>
  );
}

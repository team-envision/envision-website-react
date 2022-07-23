import Heading from "../heading";
import data from "../../data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function Section5() {
  console.log(data);
  return (
    <div className="mt-10">
      <Heading
        title="Work Collaborations"
        background="Work Collaborations"
      ></Heading>
      <div className="">
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src="https://picsum.photos/500/500"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/500/900"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/500/500"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/500/500"></img>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
}

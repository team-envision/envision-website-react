import React from "react";
// import extractColors from 'extract-colors'
// import Image from "next/image";
// import { usePalette } from "react-palette";

const Patronage = ({ logo }) => {
  //   const propimg = require("../Assets/Images/about/" + props.logo.image);
  const patron = logo.image;
  // console.log(propimg);
  // const { data} = usePalette(propimg);
  // if (!data){}
  const data = {
    darkVibrant: "#ef655530",
    lightVibrant: "#ef652250",
    vibrant: "#ef652270",
  };
  // console.log(data, loading, error);
  // // console.log(data.darkVibrant, data.lightVibrant)

  return (
    <div className="bg-[#ef652280] rounded-xl md:rounded-3xl m-5 md:m-10">
      <div
        className="rounded-xl md:rounded-3xl border-2 border-solid border-[#dfa387] "
        style={{
          backgroundImage: `radial-gradient(#ffffff70 50%, #EF652280)`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="m-auto p-1.5 md:p-3.5 rounded-lg md:rounded-2xl  w-20 md:w-52">
          <img className="" src={patron} alt="patron" />
        </div>
      </div>
    </div>
  );
};

export default Patronage;

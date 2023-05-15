import data from "../../data/previousorganizers.json";
import Card from "./Card";
import Heading from "../heading";
import { useState, useEffect } from "react";
export default function Organizers() {
  const [orgData, setOrgData] = useState([]);
  useEffect(() => {
    // sort data according to name alphabetically
    var d = data.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    // var d = data.sort((a, b) => a.name - b.name);
    setOrgData(d);
  }, []);

  return (
    <div className="p-5 mx-auto">
      <Heading
        title={"Ex Organizers"}
        background={"Ex Organizers"}
        hide={true}
      ></Heading>
      <div className="flex flex-row justify-center gap-x-3 flex-wrap mx-auto pt-5 lg:gap-x-8 lg:px-9 transition">
        {orgData?.map((user, idx) => {
          return user.image ? <Card user={user} key={idx}></Card> : null;
        })}
      </div>
    </div>
  );
}

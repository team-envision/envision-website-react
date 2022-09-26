import data from "../../data/organizers.json";
import Card from "./Card";
import Heading from "../heading";
export default function Organizers() {
  return (
    <div className="p-5 mx-auto">
      <Heading
        title={"Organizers"}
        background={"Organizers"}
        hide={true}
      ></Heading>
      <div className="flex flex-row justify-center gap-x-3 flex-wrap mx-auto pt-5 lg:gap-x-8 lg:px-9 transition">
        {data?.map((user, idx) => {
          return user.image ? <Card user={user} key={idx}></Card> : null;
        })}
      </div>
    </div>
  );
}

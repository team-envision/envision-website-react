import data from "../../data/teamdata.json";
import Card from "./Card";
import React from "react";
import Heading from "../heading";
function groupBy(arr, property) {
  return arr.reduce(function (memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});
}

export default function Section2() {
  const grouped = groupBy(data, "domain");
  const [current, setCurrent] = React.useState("Web Development");
  function handle(e) {
    setCurrent(e.target.innerText);
    console.log(grouped[e.target.innerHTML]);
  }
  function check(domain) {
    if (domain === current) {
      return true;
    }
  }
  console.log(Object.keys(grouped));
  return (
    <div className="p-5 mx-auto ">
      <Heading title={"Team Heads"} background={"Team Heads"}></Heading>
      <div className=" justify-right gap-x-4 flex flex-row overflow-scroll ">
        {Object.keys(grouped)?.map((key, idx) => {
          return (
            <button
              className={`px-2 py-1 md:px-10 md:py-2 transition text-white rounded-2xl min-w-[9rem] text-center flex justify-center place-items-center align-middle ${
                check(key) ? "bg-orange-500" : "bg-orange-300"
              }`}
              onClick={handle}
              key={idx}
            >
              {key}
            </button>
          );
        })}
      </div>
      <div className="flex flex-row justify-center gap-x-3 flex-wrap mx-auto pt-5 lg:gap-x-8 lg:px-9 transition">
        {grouped[current]?.map((user, idx) => {
          return user.image ? <Card user={user} key={idx}></Card> : null;
        })}
      </div>
    </div>
  );
}

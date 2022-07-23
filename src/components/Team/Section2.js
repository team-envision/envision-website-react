import data from "../../data/try.json";
import Card from "./Card";
import React from "react";
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
  const [current, setCurrent] = React.useState("Web-dev");
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
      <div className=" justify-center gap-x-4 flex flex-row overflow-scroll overflow-visible ">
        {Object.keys(grouped).map((key) => {
          return (
            <button
              className={`px-2 py-1 md:px-10 md:py-2 transition text-white rounded min-w-[9rem] ${
                check(key) ? "bg-orange-500" : "bg-orange-300"
              }`}
              onClick={handle}
            >
              {key}
            </button>
          );
        })}
      </div>
      <div className="flex flex-row justify-center gap-x-3 flex-wrap mx-auto pt-5 lg:gap-x-8 lg:px-9 transition">
        {grouped[current].map((user) => {
          return <Card user={user}></Card>;
        })}
      </div>
    </div>
  );
}

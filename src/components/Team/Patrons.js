import data from "../../data/patrons.json";
import Card from "./PatronCard";
import Heading from "../heading";
export default function Patrons() {
  console.log(data);
  return (
    <>
      <Heading title={"Patrons"} background={"Patrons"} hide={true}></Heading>
      <div
        className={`row-start-1 row-end-1 col-start-1 col-end-1 md:mt-20 mt-20 mx-auto flex flex-row flex-wrap justify-center z-[1] pb-20 `}
      >
        {data?.map((img, idx) => {
          return <Card key={idx} logo={img} />;
        })}
      </div>
    </>
  );
}

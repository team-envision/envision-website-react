import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Section1 from "./Section1";
import Card from "./Card";
import Section2 from "./Section2";
import Organizers from "./Organizers";
import ExOrganizers from "./Previous";

export default function Team() {
  return (
    <div className="min-h-[100vh] overflow-hidden">
      <Navbar />
      <div className="pt-8 md:pt-16 pb-5 overflow-hidden">
        <Section1 />
      </div>
      <Organizers></Organizers>
      <Section2></Section2>
      <ExOrganizers></ExOrganizers>

      <Footer />
    </div>
  );
}

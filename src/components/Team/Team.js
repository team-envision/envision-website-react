import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Section1 from "./Section1";
import Card from "./Card";
import Section2 from "./Section2";
export default function Team() {
  return (
    <div className="min-h-[100vh] overflow-hidden">
      <Navbar />
      <div className="pt-8 md:pt-16 pb-5 overflow-hidden">
        <Section1 />
      </div>
      <Section2></Section2>
      <Footer />
    </div>
  );
}

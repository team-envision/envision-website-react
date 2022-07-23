import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Section1 from "./Section1";
export default function Team() {
  return (
    <div className="min-h-[100vh] ">
      <Navbar />
      <div className="pt-8 md:pt-16 pb-5">
        <Section1 />
      </div>
      <Footer />
    </div>
  );
}

import Navbar from "./components/Navbar/navbar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden max-w-[100vw] relative">
      {/* <div className="max-w-[100vw] max-h-[100vh] overflow-hidden z-[10000]"> */}

      <Navbar />
      {/* </div> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;

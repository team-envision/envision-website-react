import Navbar from "./components/Navbar/navbar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section5 from "./components/Section5/Section5";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;

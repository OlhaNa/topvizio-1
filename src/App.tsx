import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Services from "./components/Services";
import FreeConsultation from "./components/FreeConsultation";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Clients from "./components/Clients";



function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      <Header />
      <Hero />
      <Values />
      <Services />
      <FreeConsultation />
      <Products />
      <Projects />
      <Clients />
    </div>
  );
}

export default App;
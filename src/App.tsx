import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      <Header />
      <Hero />
      <Values />
    </div>
  );
}

export default App;
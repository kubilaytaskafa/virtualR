import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default App;

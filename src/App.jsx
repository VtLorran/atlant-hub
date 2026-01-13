import Header from "./components/Header";
import Nav from "./components//Nav";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Nav />
      <Hero />
      <Catalog/>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;

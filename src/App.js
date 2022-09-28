import "./App.css";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;

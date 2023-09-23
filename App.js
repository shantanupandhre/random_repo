import './App.css';
import Navbar from './components/Navbar';
import "./Home.css";
import BigDiv from './components/bigDiv';
import Features from "./components/features.js";

function App() {
  return (
    <div>
      <Navbar />
      <BigDiv />
      <hr />
      <Features />
    </div>
);
}

export default App;

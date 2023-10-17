import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Music from "./components/Music";
import Recent from "./components/Recent";
import NowPlaying from "./components/NowPlaying";

function App() {
  return (
    <div className="bg-white flex ">
      <BrowserRouter>
          <Sidebar />
        <Routes>
          <Route path="/" element={<Music />}/>
          <Route path="recently/played" element={<Recent />}/>
          <Route path="playing" element={<NowPlaying />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

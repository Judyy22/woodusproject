import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import About from "./page/woodus/About";
import History from "./page/woodus/History";
import Repair from "./page/repair/Repair";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/woodus" element={<About />} />
            <Route path="/woodus/history" element={<History />} />
            <Route path="/repair" element={<Repair />} />
        </Routes>
    );
}

export default App;

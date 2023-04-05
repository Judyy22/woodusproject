import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import About from "./page/woodus/About";
import History from "./page/woodus/History";
import Repair from "./page/repair/Repair";
import Facilities from "./page/woodus/Facilities";
import Location from "./page/woodus/Location";
import Feedback from "./page/repair/Feedback";
import Hiringprogram from "./page/program/Hiringprogram";
import Contrib from "./page/contribution/Contrib";
import ProgramDetail from "./page/program/ProgramDetail";
import Enroll from "./page/program/Enroll";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/woodus" element={<About />} />
            <Route path="/woodus/history" element={<History />} />
            <Route path="/woodus/facilities" element={<Facilities />} />
            <Route path="/woodus/location" element={<Location />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/repair/feedback" element={<Feedback />} />
            <Route path="/class" element={<Hiringprogram />} />
            <Route path="/class/:id" element={<ProgramDetail />} />
            <Route path="/class/enroll" element={<Enroll />} />
            <Route path="/contribution" element={<Contrib />} />
        </Routes>
    );
}

export default App;

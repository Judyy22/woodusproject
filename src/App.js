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
import AdminLog from "./page/admin/AdminLog";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
import CheckEnrollDocument from "./page/program/CheckEnrollDocument";
import Activity from "./page/community/Activity";
import Notice from "./page/community/Notice";
import Qna from "./page/community/Qna";
import Ask from "./page/community/Ask";

function App() {
    const [authenticate, setAuthenticate] = useState(false); //true면 로그인 됨
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
            <Route path="/class/enroll/:id" element={<CheckEnrollDocument />} />
            <Route path="/contribution" element={<Contrib />} />
            <Route path="/community" element={<Activity />} />
            <Route path="/community/notice" element={<Notice />} />
            <Route path="/community/qna" element={<Qna />} />
            <Route path="/community/ask" element={<Ask />} />
            <Route
                path="/adminLog"
                element={<AdminLog setAuthenticate={setAuthenticate} />}
            />
            <Route
                path="/admin"
                element={<PrivateRoute authenticate={authenticate} />}
            />
            <Route
                path="/admin/:id"
                element={<PrivateRoute authenticate={authenticate} />}
            />
        </Routes>
    );
}

export default App;

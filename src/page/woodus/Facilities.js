import React from "react";
import { useLocation } from "react-router-dom";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer"
import Secondmenu from "../../components/Secondmenu";
import Facility from "../../components/woodus/Facility";

const Facilities = () => {
    const location = useLocation();
    const List = location.state.data;
    const now = location.state.select;
    return (
        <div>
            <Menubar />
            <Secondmenu list={List} now={now} />
            <Facility />
            <Footer />
        </div>
    );
};

export default Facilities;

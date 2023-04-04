import React from "react";
import { useLocation } from "react-router-dom";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import RepairMain from "../../components/repair/RepairMain";
import Footer from "../../components/Footer";

const Repair = () => {
    const location = useLocation();
    const List = location.state.data;
    const now = location.state.select;

    return (
        <div>
            <Menubar />
            <Secondmenu list={List} now={now} />
            <RepairMain />
            <Footer />
        </div>
    );
};

export default Repair;

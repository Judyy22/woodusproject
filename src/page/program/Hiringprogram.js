import React from "react";
import Menubar from "../../components/Menubar";
import { useLocation } from "react-router-dom";
import Secondmenu from "../../components/Secondmenu";
import Class from "../../components/class/Class";
import Footer from "../../components/Footer";

const Hiringprogram = () => {
    const location = useLocation();
    const List = location.state.data;
    const now = location.state.select;

    return (
        <div>
            <Menubar />
            <Secondmenu list={List} now={now} />
            <Class />
            <Footer />
        </div>
    );
};

export default Hiringprogram;
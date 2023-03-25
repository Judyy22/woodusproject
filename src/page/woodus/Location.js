import React from "react";
import { useLocation } from "react-router-dom";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import Map from "../../components/woodus/Map";

const Location = () => {
    const location = useLocation();
    const List = location.state.data;
    const now = location.state.select;
    return (
        <div>
            <Menubar />
            <Secondmenu list={List} now={now} />
            <Map />
        </div>
    );
};

export default Location;

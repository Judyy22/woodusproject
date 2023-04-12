import React from "react";
import Menubar from "../../components/Menubar";
import { useLocation } from "react-router-dom";
import Secondmenu from "../../components/Secondmenu";

const Activity = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
        </div>
    );
};

export default Activity;

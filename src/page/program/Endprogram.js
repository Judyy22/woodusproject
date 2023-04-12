import React from "react";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import { useLocation } from "react-router-dom";
import EndClass from "../../components/class/EndClass";

const Endprogram = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <EndClass />
        </div>
    );
};

export default Endprogram;

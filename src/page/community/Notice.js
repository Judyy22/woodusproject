import React from "react";
import Menubar from "../../components/Menubar";
import { useLocation } from "react-router-dom";
import Secondmenu from "../../components/Secondmenu";
import NoticePage from "../../components/community/NoticePage";

const Notice = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <NoticePage />
        </div>
    );
};

export default Notice;

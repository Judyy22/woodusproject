import React from "react";
import Menubar from "../../components/Menubar";
import { useLocation } from "react-router-dom";
import Secondmenu from "../../components/Secondmenu";
import NoticePage from "../../components/community/NoticePage"

const Notice = () => {
    const location = useLocation();
    const List = location.state.data;
    const now = location.state.select;
    return (
        <div>
            <Menubar />
            <Secondmenu list={List} now={now} />
            <NoticePage />
        </div>
    );
};

export default Notice;

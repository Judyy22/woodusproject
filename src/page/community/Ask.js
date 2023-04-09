import React from "react";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import { useLocation } from "react-router-dom";
import AskInfo from "../../components/community/AskInfo";

const Ask = () => {
    const location = useLocation();
    const List = location.state.data;
    const now = location.state.select;
    return (
        <div>
            <Menubar />
            <Secondmenu list={List} now={now} />
            <AskInfo />
        </div>
    );
};

export default Ask;

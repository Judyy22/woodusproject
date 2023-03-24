import React from "react";
import Menubar from "../../components/Menubar";
import Secondmenu from "../../components/Secondmenu";
import Introduction from "../../components/woodus/Introduction";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();
    const List = location.state.data;
    const now = location.state.select;
    return (
        <div>
            <Menubar />
            <Secondmenu list={List} now={now} />
            <Introduction />
            <Footer />
        </div>
    );
};

export default About;

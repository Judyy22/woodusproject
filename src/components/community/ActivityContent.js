import React from "react";
import Menubar from "../Menubar";
import Secondmenu from "../Secondmenu";
import BoardView from "../board/BoardView";
import { Container } from "react-bootstrap";
import Footer from "../Footer";

const ActivityContent = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <div className="ViewPosition">
                <BoardView />
            </div>
            <Footer />
        </div>
    );
};

export default ActivityContent;

import React from "react";
import Menubar from "../Menubar";
import Secondmenu from "../Secondmenu";
import Footer from "../Footer";
import BoardView from "../board/BoardView";

const NoticeContent = () => {
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

export default NoticeContent;

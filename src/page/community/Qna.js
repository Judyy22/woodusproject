import React from "react";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import Secondmenu from "../../components/Secondmenu";
import QnaDetail from "../../components/community/QnaDetail";

const Qna = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <QnaDetail />
            <Footer />
        </div>
    );
};

export default Qna;

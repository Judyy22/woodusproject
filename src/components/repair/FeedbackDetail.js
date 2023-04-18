import React from "react";
import Menubar from "../Menubar";
import Secondmenu from "../Secondmenu";
import FeedbackCard from "./FeedbackCard";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

const FeedbackDetail = () => {
    return (
        <div>
            <Menubar />
            <Secondmenu />
            <div className="RepairMainBox">
                <Container>
                    <FeedbackCard />
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default FeedbackDetail;

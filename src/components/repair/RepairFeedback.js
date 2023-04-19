import React from "react";
import { Container } from "react-bootstrap";
import BoardList from "../../components/board/BoardList";
import Footer from "../Footer";

const RepairFeedback = () => {
    return (
        <div className="FeedbackBox">
            <Container>
                <div className="FeedbackTitle">가구수리소 이용후기</div>
            </Container>
            <BoardList />
            <Footer />
        </div>
    );
};

export default RepairFeedback;

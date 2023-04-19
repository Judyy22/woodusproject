import React from "react";
import BoardList from "../board/BoardList";
import { Container } from "react-bootstrap";

const ActivityDetail = () => {
    return (
        <div className="ActivityBox">
            <Container>
                <div className="ActivityTitle">우리의 활동</div>
            </Container>
            <BoardList />
        </div>
    );
};

export default ActivityDetail;

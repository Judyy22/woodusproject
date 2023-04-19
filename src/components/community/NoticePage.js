import React from "react";
import { Container } from "react-bootstrap";
import "./community.css";
import BoardList from "../board/BoardList";

const NoticePage = () => {
    return (
        <div className="noticeBox">
            <Container>
                <div className="noticeTitle">공지사항</div>
            </Container>
            <BoardList />
        </div>
    );
};

export default NoticePage;

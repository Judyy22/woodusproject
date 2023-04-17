import React from "react";
import { Container } from "react-bootstrap";
import BoardWrite from "../board/BoardWrite";

const QnaWritebox = () => {
    return (
        <div>
            <Container>
                <div>QnA 글쓰기</div>
                <div>
                    <div>작성자</div>
                    <input type="text" />
                </div>
                <BoardWrite />
            </Container>
        </div>
    );
};

export default QnaWritebox;

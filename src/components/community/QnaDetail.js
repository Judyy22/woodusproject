import React from "react";
import BoardList from "../board/BoardList";
import { Link } from "react-router-dom";
import Secondmenu from "../Secondmenu";

const QnaDetail = () => {
    return (
        <div className="QnaBox">
            <div>QnA</div>
            <Link to="/community/qnawrite">글쓰기</Link>
            <BoardList />
        </div>
    );
};

export default QnaDetail;

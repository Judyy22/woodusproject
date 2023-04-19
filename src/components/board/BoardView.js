import React from "react";

const BoardView = () => {
    return (
        <div className="BoardViewBox">
            <div className="BoardViewInfo">
                <div className="BoardViewWriter">
                    <span>작성자 : </span>
                    <span>이승희</span>
                </div>
                <div className="BoardViewDate">
                    <span>작성일 : </span>
                    <span>2023-04-18</span>
                </div>
            </div>
            <div className="BoardViewTitle">
                <div>제목</div>
            </div>
            <div className="BoardViewContent">
                <div>contents</div>
            </div>
            <button className="clientsubmitButton">목록으로</button>
        </div>
    );
};

export default BoardView;

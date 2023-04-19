import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { boardAction } from "../../redux/Actions/boardAction";

const BoardView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const boardDetail = useSelector((state) => state.board.noticeDetail);
    const getBoardDetail = async () => {
        dispatch(boardAction.getBoardDetail(id));
    };
    useEffect(() => {
        getBoardDetail();
    }, []);

    const item = boardDetail?.[0];
    console.log("boardDetail", item);

    return (
        <div className="BoardViewBox">
            <div className="BoardViewInfo">
                <div className="BoardViewWriter">
                    <span>작성자 : </span>
                    <span>{item?.writer}</span>
                </div>
                <div className="BoardViewDate">
                    <span>작성일 : </span>
                    <span>{item?.regdate}</span>
                </div>
            </div>
            <div className="BoardViewTitle">
                <h3>{item?.title}</h3>
            </div>
            <div className="BoardViewContent">
                <div>{item?.content}</div>
            </div>
            <button className="clientsubmitButton">목록으로</button>
        </div>
    );
};

export default BoardView;

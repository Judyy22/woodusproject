import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import "./Board.css";
import Pagination from "./Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const BoardList = () => {
    const [boardList, setBoardList] = useState([
        {
            id: 1,
            title: "첫 번째 게시글",
            content: "첫 번째 게시글 내용입니다.",
            created_at: "2022-01-01",
            visitors: 10,
        },
        {
            id: 2,
            title: "두 번째 게시글",
            content: "두 번째 게시글 내용입니다.",
            created_at: "2022-01-02",
            visitors: 20,
        },
        {
            id: 3,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
        {
            id: 4,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
        {
            id: 5,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
        {
            id: 6,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
        {
            id: 7,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
        {
            id: 8,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
        {
            id: 9,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
        {
            id: 10,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
        {
            id: 11,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
        {
            id: 12,
            title: "세 번째 게시글",
            content: "세 번째 게시글 내용입니다.",
            created_at: "2022-01-03",
            visitors: 30,
        },
    ]);
    const location = useLocation();
    const navigate = useNavigate();
    const [movePage, setMovePage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        const nowPath = location.pathname;
        const slicePath = nowPath.split("/").filter(Boolean);
        console.log(slicePath);
        if (slicePath[0] == "repair") {
            console.log("repair");
            setMovePage("/repair/feedback/");
        } else if (slicePath[0] == "community") {
            if (slicePath[1] == "notice") {
                console.log("notice");
                setMovePage("/community/notice/");
            } else if (slicePath[1] == "qna") {
                console.log("qna");
                setMovePage("/community/qna/");
            } else {
                console.log("activity");
                setMovePage("/community/");
            }
        }
    }, []);
    console.log("movePage", movePage);
    const goDetail = (id) => {
        if (movePage) {
            return `${movePage}${id}`;
        } else {
            return `${movePage}`; // Replace with your actual detail page URL path
        }
    };
    return (
        <div className="boardListBox">
            <Container className="boardListTableBox">
                <Table className="boardListTable">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((board, index) => (
                            <tr
                                key={board.id}
                                onClick={() => navigate(goDetail(board.id))}
                            >
                                <th scope="row">{index + 1}</th>
                                <td>{board.title}</td>
                                <td>{board.created_at}</td>
                                <td>{board.visitors}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={boardList.length}
                    paginate={paginate}
                />
            </Container>
        </div>
    );
};

export default BoardList;

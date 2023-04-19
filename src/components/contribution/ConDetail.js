import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ConDetail = () => {
    const navigate = useNavigate();
    const goList = () => {
        navigate("/contribution");
    };
    return (
        <div className="contributionBox">
            <Container>
                <div className="conDetailBox">
                    <div className="conDetailTitle">
                        <div>사진제목</div>
                        <div>CJ 사회공헌팀 트레이 만들기</div>
                    </div>
                    <div className="conDetailDate">
                        <span>작성일</span>
                        <span>2023-04-18</span>
                    </div>
                    <div className="conDetailImage">
                        <img src="/pictures/facilities1.jpg" />
                        {/* <img src="/pictures/facilities1.jpg" />
                        <img src="/pictures/facilities1.jpg" />
                        <img src="/pictures/facilities1.jpg" />
                        <img src="/pictures/facilities1.jpg" /> */}
                    </div>
                    <button
                        className="concardbutton conDetailButton"
                        onClick={goList}
                    >
                        목록으로
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default ConDetail;

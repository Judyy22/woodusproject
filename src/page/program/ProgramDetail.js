import React from "react";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProgramDetail.css";

const ProgramDetail = (props) => {
    const id = props.id;
    const navigate = useNavigate();
    const showClassList = () => {
        navigate("/class");
    };
    const enrollClass = () => {
        navigate(`/class/enroll`);
    };

    return (
        <div>
            <Menubar />
            <div className="ProgramDetailBox">
                <Container>
                    <div className="ProgramDetail">
                        <div className="DetailLeft">
                            <img src="/pictures/ClassImage.jpg" width="100%" />
                        </div>
                        <div>
                            <div className="ProgramDetailTitle">
                                가구제작기능사 자격증반
                            </div>
                            <div className="ProgramDetailInfoBox">
                                <div className="ProgramDetailInfo">
                                    <div>교육 기간</div>
                                    <div>2023년 03월 ~ 2023년 05월</div>
                                </div>
                                <div className="ProgramDetailInfo">
                                    <div>교육 요일</div>
                                    <div>수 금</div>
                                </div>
                                <div className="ProgramDetailInfo">
                                    <div>교육 시간</div>
                                    <div>09:00 ~ 12:00</div>
                                </div>
                                <div className="ProgramDetailInfo">
                                    <div>교육 장소</div>
                                    <div>우드어스 공방</div>
                                </div>
                                <div className="ProgramDetailInfo">
                                    <div>수강료 (재료비 포함)</div>
                                    <div>200,000 원</div>
                                </div>
                                <div className="ProgramDetailInfo">
                                    <div>교육 내용</div>
                                    <div>
                                        가구제작기능사 실기 및 공구 사용법
                                    </div>
                                </div>
                                <div className="ProgramDetailInfo">
                                    <div>신청 기간</div>
                                    <div>~ 2023년 03월 02일</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ProgramDetailSummary">
                        전동공구 및 공동사용 물품은 공방에서 제공, 개인 구매
                        물품 (톱, 끌, 대패 등)
                    </div>
                    <div className="ProgramDetailButton">
                        <button onClick={() => showClassList()}>
                            목록으로
                        </button>
                        <button onClick={() => enrollClass()}>신청하기</button>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default ProgramDetail;

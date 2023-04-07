import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminMenu = ({ onClick }) => {
    const navigate = useNavigate();
    const [button, setButton] = useState();
    const goHome = (e) => {
        navigate("/");
    };
    const handleButtonClick = (event) => {
        const buttonId = event.target.id;
        setButton(buttonId);
        onClick(buttonId);
    };
    return (
        <div>
            <Container className="AdminMenuBox">
                <div className="programMenu">
                    <div id="1000" onClick={goHome}>
                        홈페이지
                    </div>
                    <div>
                        <div id="1001" onClick={handleButtonClick}>
                            프로그램 등록
                        </div>
                        <div id="1002" onClick={handleButtonClick}>
                            프로그램 신청자 목록
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AdminMenu;

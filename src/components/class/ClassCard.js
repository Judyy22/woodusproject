import React, { useState } from "react";
import "./Class.css";
import { useNavigate } from "react-router-dom";

const ClassCard = (props) => {
    const navigate = useNavigate();
    const showClass = (id) => {
        navigate(`/class/${id}`);
    };
    const type = props.Click;
    if (type === "Edu") {
    } else if (type === "Exp") {
    } else
        return (
            <div className="ClassCardBox" onClick={() => showClass("id")}>
                <div className="CardImageBack">
                    <img src="/pictures/classEx.png" />
                </div>
                <div className="ClassType">교육</div>
                <div className="ClassName">가구제작기능사</div>
                <div className="ClassDetail">
                    <div>교육기간</div>
                    <div>2023.03 ~ 2023.05</div>
                </div>
                <div className="ClassDetail">
                    <div>교육시간</div>
                    <div>09:00 ~ 11:00</div>
                </div>
                <div className="ClassDetail">
                    <div>모집정원</div>
                    <div>20</div>
                </div>
            </div>
        );
};

export default ClassCard;

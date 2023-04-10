import React, { useState } from "react";
import "./Class.css";
import { useNavigate } from "react-router-dom";

const ClassCard = (props) => {
    const navigate = useNavigate();
    const showClass = (id) => {
        navigate(`/class/${id}`);
    };
    const detailInfo = props.listDetail;
    const category = props.click;

    if (
        category === "All" ||
        (category === "Edu" && detailInfo.type === "edu") ||
        (category === "Exp" && detailInfo.type === "exp")
    ) {
        return (
            <div
                className="ClassCardBox"
                onClick={() => showClass(detailInfo.id)}
            >
                <div className="CardImageBack">
                    <img src="/pictures/classEx.png" />
                </div>

                {detailInfo.type == "edu" ? (
                    <div>
                        <div className="ClassTypeEdu">교육</div>
                    </div>
                ) : (
                    <div>
                        <div className="ClassTypeExp">체험</div>
                    </div>
                )}

                <div className="ClassName">{detailInfo.name}</div>
                <div className="ClassDetail">
                    <div>교육기간</div>
                    <div>
                        {detailInfo.startDate} ~ {detailInfo.endDate}
                    </div>
                </div>
                <div className="ClassDetail">
                    <div>교육시간</div>
                    <div>
                        {detailInfo.startTime} ~ {detailInfo.endTime}
                    </div>
                </div>
                <div className="ClassDetail">
                    <div>모집정원</div>
                    <div>{detailInfo.num_people}</div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default ClassCard;

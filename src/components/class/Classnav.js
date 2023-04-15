import React, { useState } from "react";
import ClassCard from "./ClassCard";
import "./Class.css";

const Classnav = (props) => {
    const courses = props.props;
    const classOpening = props.class;
    const [selectedTab, setSelectedTab] = useState("All");
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    const isEmpty = !courses || courses.length === 0;
    return (
        <div>
            <div className="ClassNavBox">
                <div id="All" onClick={() => handleTabClick("All")}>
                    모든 프로그램
                </div>
                <div id="Edu" onClick={() => handleTabClick("Edu")}>
                    교육 프로그램
                </div>
                <div id="Exp" onClick={() => handleTabClick("Exp")}>
                    체험 프로그램
                </div>
            </div>
            <div
                className="ClassCardLine"
                style={{ height: isEmpty ? "35vh" : "auto" }}
            >
                {Array.isArray(courses)
                    ? courses.map((cardItem) => (
                          <ClassCard
                              key={cardItem.id}
                              className="ClassCardBox"
                              click={selectedTab}
                              listDetail={cardItem}
                              recruiting={classOpening}
                          />
                      ))
                    : []}
            </div>
        </div>
    );
};

export default Classnav;

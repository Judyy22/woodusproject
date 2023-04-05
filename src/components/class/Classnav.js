import React, { useState } from "react";
import ClassCard from "./ClassCard";
import "./Class.css";

const Classnav = () => {
    const card = [1, 2, 3, 4];
    const [selectedTab, setSelectedTab] = useState("All");
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

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
            <div className="ClassCardLine">
                {card.map((cardItem) => (
                    <ClassCard
                        key={cardItem}
                        lassName="ClassCardBox"
                        Click={selectedTab}
                    />
                ))}
            </div>
        </div>
    );
};

export default Classnav;

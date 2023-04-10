import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import "./Class.css";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";

const Classnav = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.course);
    const [selectedTab, setSelectedTab] = useState("All");
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        dispatch(courseAction.getCourses());
    }, []);
    const courseList = courses.presentCourses;

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
                {Array.isArray(courseList)
                    ? courseList.map((cardItem) => (
                          <ClassCard
                              key={cardItem.id}
                              className="ClassCardBox"
                              click={selectedTab}
                              listDetail={cardItem}
                          />
                      ))
                    : []}
            </div>
        </div>
    );
};

export default Classnav;

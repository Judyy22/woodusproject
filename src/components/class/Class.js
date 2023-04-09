import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Classnav from "./Classnav";
import "./Class.css";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";

const Class = () => {
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.course);

    useEffect(() => {
        dispatch(courseAction.getCourses);
    });
    return (
        <div className="ClassBox">
            <Container className="ClassContainer">
                <div className="HiringProgram">모집중 프로그램</div>
                <Classnav />
            </Container>
        </div>
    );
};

export default Class;

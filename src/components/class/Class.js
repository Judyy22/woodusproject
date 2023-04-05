import React from "react";
import { Container } from "react-bootstrap";

import Classnav from "./Classnav";
import "./Class.css";

const Class = () => {
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

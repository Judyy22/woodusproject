import React from "react";
import { Container } from "react-bootstrap";
import "./RepairMain.css";

const RepairMain = () => {
    return (
        <div className="RepairMainBox">
            <Container>
                <div>
                    <img src="/pictures/repairtitle.png" width="100%"></img>
                    <div> 버리지말고 고쳐서 사용해요</div>
                </div>
            </Container>
        </div>
    );
};

export default RepairMain;

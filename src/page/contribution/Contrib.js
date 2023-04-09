import React from "react";
import Menubar from "../../components/Menubar";
import { Container } from "react-bootstrap";
import Contribution from "../../components/contribution/Contribution";

const Contrib = () => {
    return (
        <div>
            <Menubar />
            <Contribution />
        </div>
    );
};

export default Contrib;

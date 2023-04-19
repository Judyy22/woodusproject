import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ConCard from "./ConCard";
import "./Contribution.css";

const Contribution = () => {
    return (
        <div className="contributionBox">
            <Container>
                <div className="contributionTitle">기업사회공헌</div>
                <Row xs={1} sm={2} md={3}>
                    <Col>
                        <ConCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contribution;

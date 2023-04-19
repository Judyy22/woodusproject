import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ConCard from "./ConCard";
import "./Contribution.css";
import { useDispatch, useSelector } from "react-redux";
import { contributionAction } from "../../redux/Actions/contributionAction";

const Contribution = () => {
    const dispatch = useDispatch();
    const conList = useSelector((state) => state.con.contribution);

    console.log("con", conList);

    useEffect(() => {
        dispatch(contributionAction.getContribution());
    }, []);
    return (
        <div className="contributionBox">
            <Container>
                <div className="contributionTitle">기업사회공헌</div>
                <Row xs={1} sm={2} lg={3}>
                    {Array.isArray(conList)
                        ? conList.map((cardItem) => (
                              <Col key={cardItem.id}>
                                  <ConCard data={cardItem} />
                              </Col>
                          ))
                        : []}
                </Row>
            </Container>
        </div>
    );
};

export default Contribution;

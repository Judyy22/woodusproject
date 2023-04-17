import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConCard = () => {
    return (
        <div>
            <Card className="concardbox">
                <Card.Img variant="top" src="/pictures/contest.png" />
                <Card.Body>
                    <Card.Title>사진 제목</Card.Title>
                    <Card.Text className="cardSummary">
                        CJ 사회공헌팀 트레이 만들기
                    </Card.Text>
                    <Card.Text className="cardDate">2023-04-17</Card.Text>
                    <Link to="/contribution/1">
                        <Button variant="light" className="concardbutton">
                            더보기
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ConCard;

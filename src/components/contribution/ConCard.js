import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConCard = (data) => {
    const item = data.data;
    console.log("data", item);
    return (
        <div>
            <Card className="concardbox">
                <Card.Img
                    variant="top"
                    src={`http://woodus.net/images/${item.thumbnail_id}`}
                    className="cardThumbnail"
                />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="cardSummary">
                        {item.subtitle}
                    </Card.Text>
                    <Card.Text className="cardDate">{item.regdate}</Card.Text>
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

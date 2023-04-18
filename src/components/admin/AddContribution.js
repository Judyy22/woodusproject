import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import axios from "axios";

const AddContribution = () => {
    const [imageFile_thumbnail, setImageFile_thumbnail] = useState(null);
    const [imageFile_contents1, setImageFile_contents1] = useState(null);
    const [imageFile_contents2, setImageFile_contents2] = useState(null);
    const [imageFile_contents3, setImageFile_contents3] = useState(null);
    const [imageFile_contents4, setImageFile_contents4] = useState(null);
    const [imageFile_contents5, setImageFile_contents5] = useState(null);

    const handleThumbnailChange = (event) => {
        setImageFile_thumbnail(event.target.files[0]);
    };

    const handleImageChange1 = (event) => {
        setImageFile_contents1(event.target.files[0]);
    };
    const handleImageChange2 = (event) => {
        setImageFile_contents2(event.target.files[0]);
    };
    const handleImageChange3 = (event) => {
        setImageFile_contents3(event.target.files[0]);
    };
    const handleImageChange4 = (event) => {
        setImageFile_contents4(event.target.files[0]);
    };
    const handleImageChange5 = (event) => {
        setImageFile_contents5(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const subtitle = document.getElementById("subtitle").value;
        const url = "http://woodus.net/api/contribution";
        const data = {
            title: title,
            subtitle: subtitle,
            imageFile_thumbnail: imageFile_thumbnail,
            imageFile_contents1: imageFile_contents1,
            imageFile_contents2: imageFile_contents2,
            imageFile_contents3: imageFile_contents3,
            imageFile_contents4: imageFile_contents4,
            imageFile_contents5: imageFile_contents5,
        };
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        axios
            .post(url, data, config)
            .then((response) => {
                console.log(response);
                alert("저장되었습니다.");
            })
            .catch((err) => {
                console.log(err.response.data.message); // --> 서버단 에러메세지 출력~;
            });
        console.log("data", data);
    };
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <div>
                    <div>제목</div>
                    <input type="text" id="title" />
                </div>
                <div>
                    <div>부제목 및 간단요약</div>
                    <input
                        type="text"
                        id="subtitle"
                        placeholder="30자 이내로 작성해주세요"
                    />
                </div>
                <div className="posteraddImage">
                    <div>메인 사진</div>
                    <input
                        type="file"
                        onChange={handleThumbnailChange}
                        id="imageFile_Thumbnail"
                    />
                </div>
                <div className="posteraddImage">
                    <div>나머지사인</div>
                    <input
                        type="file"
                        onChange={handleImageChange1}
                        id="imageFile_contents1"
                    />
                    <input
                        type="file"
                        onChange={handleImageChange2}
                        id="imageFile_contents2"
                    />
                    <input
                        type="file"
                        onChange={handleImageChange3}
                        id="imageFile_contents3"
                    />
                    <input
                        type="file"
                        onChange={handleImageChange4}
                        id="imageFile_contents4"
                    />
                    <input
                        type="file"
                        onChange={handleImageChange5}
                        id="imageFile_contents5"
                    />
                </div>
                <button type="submit" className="postersubmit">
                    저장
                </button>
            </Form>
        </Container>
    );
};

export default AddContribution;

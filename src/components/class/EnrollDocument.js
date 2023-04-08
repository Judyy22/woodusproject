import React, { useState, useEffect, useRef } from "react";
import "./Enroll.css";
import { Container, Form } from "react-bootstrap";
import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router-dom";

const EnrollDocument = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState({
        postalCode: "",
        address: "",
        extraAddress: "",
    });
    const [showPostcode, setShowPostcode] = useState(false);

    const handleAddress = (data) => {
        setAddress({
            postalCode: data.zonecode,
            address: data.address,
            extraAddress: data.jibunAddress,
        });
        setShowPostcode(false); //주소 선택후 가리기
    };

    const handleButtonClick = (event) => {
        event.preventDefault(); //submit 안됨
        setShowPostcode(true); // DaumPostcode 보이기
    };

    const handleCloseButton = (event) => {
        event.preventDefault();
        setShowPostcode(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const courseName = document.querySelector(
            'select[name="courseName"] option:checked'
        ).value;
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const submitAddress = address.address;
        const remainAddress = document.getElementById("remainAddress").value;
        const agree = document.getElementById("agree").checked;

        if (!name) {
            alert("이름을 입력해주세요!");
            return;
        } else if (!phone) {
            alert("핸드폰 번호를 입력해주세요!");
            return;
        } else if (!submitAddress) {
            alert("주소를 입력해주세요!");
            return;
        } else if (!agree) {
            alert("개인정보제공동의를 해주세요!");
            return;
        }

        console.log(
            "hi",
            courseName,
            name,
            phone,
            submitAddress,
            remainAddress,
            agree
        );

        // 작성후 여기로 이동
        // navigate(`/class/enroll/${id}`);
    };

    return (
        <div className="EnrollBox">
            <Container>
                <Form onSubmit={handleSubmit} className="EnrollPaper">
                    <div>
                        <div>프로그램 이름</div>
                        <select name="courseName">
                            <option value="0">프로그램 선택</option>
                            <option value="1001">가구제작기능사</option>
                        </select>
                    </div>
                    <div>
                        <div>이름</div>
                        <input
                            type="text"
                            placeholder="이름을 작성해 주세요"
                            id="name"
                        />
                    </div>
                    <div>
                        <div>연락처</div>
                        <input
                            type="text"
                            placeholder="010-xxxx-xxxx"
                            id="phone"
                        />
                    </div>
                    <div>
                        <div>주소</div>
                        <div>
                            <input
                                type="text"
                                value={address.postalCode}
                                readOnly
                            />
                            <button onClick={handleButtonClick}>
                                주소 찾기
                            </button>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={address.address}
                                readOnly
                            />
                            <input type="text" id="remainAddress" />
                        </div>
                        {showPostcode && (
                            <div className="AddressSearchBox">
                                <DaumPostcode onComplete={handleAddress} />
                                <div
                                    onClick={handleCloseButton}
                                    className="closeButton"
                                >
                                    닫기
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <input type="checkbox" id="agree" />
                        <label>개인정보 제공에 동의 하십니까?</label>
                    </div>
                    <div className="EnrollSubmit">
                        <button type="submit">신청하기</button>
                        <button onClick={() => window.history.back()}>
                            돌아가기
                        </button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default EnrollDocument;

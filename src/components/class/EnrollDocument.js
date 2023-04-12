import React, { useState, useEffect, useRef } from "react";
import "./Enroll.css";
import { Container, Form } from "react-bootstrap";
import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";

const EnrollDocument = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.course.presentCourses);
    const [address, setAddress] = useState({
        postalCode: "",
        address: "",
        extraAddress: "",
    });
    console.log(courses);
    const [showPostcode, setShowPostcode] = useState(false);

    useEffect(() => {
        dispatch(courseAction.getCourses());
    }, []);

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

        const course_id = document.querySelector(
            'select[name="course_id"] option:checked'
        ).value;
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const submitAddress = address.address;
        const remainAddress = document.getElementById("remainAddress").value;
        const stu_address = submitAddress + remainAddress;
        const agree = document.getElementById("agree").checked;

        const submitServer = () => {
            const url = "http://woodus.net/api/student";
            const data = {
                name: name,
                course_id: course_id,
                phone: phone,
                stu_address: stu_address,
            };
            const config = { "Content-Type": "application/json" };
            axios
                .post(url, data, config)
                .then((res) => {
                    // 성공 처리
                    console.log("잘 보내짐");
                })
                .catch((err) => {
                    // 에러 처리
                    console.log(err.response.data.message); // --> 서버단 에러메세지 출력~
                });
        };
        if (!name) {
            alert("이름을 입력해주세요!");
            return;
        } else if (!phone) {
            alert("핸드폰 번호를 입력해주세요!");
            return;
        } else if (!stu_address) {
            alert("주소를 입력해주세요!");
            return;
        } else if (!agree) {
            alert("개인정보제공동의를 해주세요!");
            return;
        } else {
            if (window.confirm(`신청하는 프로그램이 맞습니까?`) == true) {
                submitServer();
            }
            return;
        }
    };

    return (
        <div className="EnrollBox">
            <Container>
                <Form onSubmit={handleSubmit} className="EnrollPaper">
                    <div>
                        <div>프로그램 이름</div>
                        <select name="course_id">
                            {Array.isArray(courses)
                                ? courses.map((course) => (
                                      <option key={course.id} value={course.id}>
                                          {course.name}
                                      </option>
                                  ))
                                : []}
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

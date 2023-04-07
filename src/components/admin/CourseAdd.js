import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Admin.css";

const CourseAdd = () => {
    const preventKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const week = [
            Number(event.target.elements.week[0].checked),
            Number(event.target.elements.week[1].checked),
            Number(event.target.elements.week[2].checked),
            Number(event.target.elements.week[3].checked),
            Number(event.target.elements.week[4].checked),
            Number(event.target.elements.week[5].checked),
            Number(event.target.elements.week[6].checked),
        ];
        const weekBinary = week.join("");
        console.log("week", weekBinary);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            onKeyPress={preventKey}
            className="CourseAddForm"
        >
            <div>
                <div>프로그램명</div>
                <input type="text" id="name" placeholder="프로그램 이름" />
            </div>
            <div>
                <div>프로그램 종류</div>
                <div className="checkBoxType">
                    <input type="checkbox" name="type" value="edu" />
                    <label>교육</label>
                    <input type="checkbox" name="type" value="exp" />
                    <label>체험</label>
                </div>
            </div>
            <div>
                <div>수강료</div>
                <input type="number" id="fee" placeholder="수강료" />
            </div>
            <div>
                <div>수강인원</div>
                <input type="number" id="limit" placeholder="수강 인원" />
            </div>
            <div className="startTime">
                <div>프로그램 시작일</div>
                <input type="date" id="startdate" />
            </div>
            <div className="endTime">
                <div>프로그램 종료일</div>
                <input type="date" id="enddate" />
            </div>
            <div className="startTime">
                <div>프로그램 시작시간</div>
                <input type="time" id="starttime" />
            </div>
            <div className="endTime">
                <div>프로그램 종료시간</div>
                <input type="time" id="endtime" />
            </div>
            <div>
                <div>프로그램 요일</div>
                <div className="checkBoxDay">
                    <input type="checkbox" id="week" value="mon" />
                    <label>월</label>
                    <input type="checkbox" id="week" value="tue" />
                    <label>화</label>
                    <input type="checkbox" id="week" value="wed" />
                    <label>수</label>
                    <input type="checkbox" id="week" value="thu" />
                    <label>목</label>
                    <input type="checkbox" id="week" value="fri" />
                    <label>금</label>
                    <input type="checkbox" id="week" value="sat" />
                    <label>토</label>
                    <input type="checkbox" id="week" value="sun" />
                    <label>일</label>
                </div>
            </div>
            <div>
                <div>프로그램 장소</div>
                <input type="text" id="place" placeholder="교육 장소" />
            </div>
            <div>
                <div>신청 마감일</div>
                <input type="date" id="deadline" />
            </div>

            <div>
                <div>교육내용</div>
                <input
                    type="text"
                    id="sumary"
                    placeholder="교육내용 한줄요약"
                />
            </div>
            <div>
                <div>전달사항</div>
                <input
                    type="textarea"
                    id="notice"
                    className="CourseAddNotice"
                    placeholder="안내사항"
                />
            </div>
            <button type="submit">저장</button>
        </Form>
    );
};

export default CourseAdd;

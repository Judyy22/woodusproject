import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Admin.css";

const CourseAdd = () => {
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
        <Form onSubmit={handleSubmit} className="CourseAddForm">
            <div>
                <div>프로그램명</div>
                <input type="text" id="name" />
            </div>
            <div>
                <div>수강료</div>
                <input type="number" id="fee" />
            </div>
            <div>
                <div>수강인원</div>
                <input type="number" id="limit" />
            </div>
            <div className="startTime">
                <div>교육 시작일</div>
                <input type="date" id="startdate" />
            </div>
            <div className="endTime">
                <div>교육 종료일</div>
                <input type="date" id="enddate" />
            </div>
            <div className="startTime">
                <div>교육 시작시간</div>
                <input type="time" id="starttime" />
            </div>
            <div className="endTime">
                <div>교육 종료시간</div>
                <input type="time" id="endtime" />
            </div>
            <div>
                <div>교육 요일</div>
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
                <div>교육장소</div>
                <input type="text" id="place" />
            </div>
            <div>
                <div>신청 마감일</div>
                <input type="date" id="deadline" />
            </div>
            <div>
                <div>강의 종류</div>
                <div className="checkBoxType">
                    <input type="checkbox" name="type" value="edu" />
                    <label>교육</label>
                    <input type="checkbox" name="type" value="exp" />
                    <label>체험</label>
                </div>
            </div>
            <div>
                <div>전달사항</div>
                <input
                    type="textarea"
                    id="notice"
                    className="CourseAddNotice"
                />
            </div>
            <button type="submit">저장</button>
        </Form>
    );
};

export default CourseAdd;

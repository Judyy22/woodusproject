import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../redux/Actions/courseAction";
import ListForm from "./ListForm";

const PeopleList = () => {
    const [id, setId] = useState(0);
    const dispatch = useDispatch();
    const coursePresentList = useSelector(
        (state) => state.course.presentCourses
    );
    const courseOverList = useSelector((state) => state.course.overCourses);

    useEffect(() => {
        dispatch(courseAction.getCourses());
    }, []);

    const clickProgram = () => {
        const course_id = document.querySelector(
            'select[name="course_id"] option:checked'
        ).value;
        console.log(course_id);
        setId(course_id);
    };

    return (
        <Container>
            <Form>
                <div>프로그램 이름</div>
                <select name="course_id" onClick={clickProgram}>
                    {Array.isArray(coursePresentList)
                        ? coursePresentList.map((course) => (
                              <option key={course.id} value={course.id}>
                                  {course.name}
                              </option>
                          ))
                        : []}
                    {Array.isArray(courseOverList)
                        ? courseOverList.map((course) => (
                              <option key={course.id} value={course.id}>
                                  {course.name}
                              </option>
                          ))
                        : []}
                </select>
            </Form>
            <ListForm id={id} />
        </Container>
    );
};

export default PeopleList;

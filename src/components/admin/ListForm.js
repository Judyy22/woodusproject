import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { peopleAction } from "../../redux/Actions/peopleAction";

const ListForm = (props) => {
    const dispatch = useDispatch();
    const courseId = props.id;
    const course_name = props.name;
    const peoplelist = useSelector((state) => state.people.peopleList);

    const getPeopleList = async () => {
        dispatch(peopleAction.getPeople(courseId));
    };
    const phoneNum = (number) => {
        const trimmed = number.trim();
        const first = trimmed.slice(0, 3);
        const second = trimmed.slice(3, 7);
        const third = trimmed.slice(7);
        return `${first}-${second}-${third}`;
    };
    useEffect(() => {
        getPeopleList(courseId);
    }, [courseId]);
    console.log(peoplelist);
    return (
        <div>
            <table className="ListForemtable">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>프로그램</th>
                        <th>이름</th>
                        <th>연락처</th>
                        <th>주소</th>
                        <th>신청 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(peoplelist)
                        ? peoplelist.map((person, index) => (
                              <tr key={person.stu_id}>
                                  <td>{index + 1}</td>
                                  {courseId == person.course_id ? (
                                      <td>{course_name}</td>
                                  ) : (
                                      []
                                  )}
                                  <td>{person.stu_name}</td>
                                  <td>{phoneNum(person.stu_phone)}</td>
                                  <td>{person.stu_address}</td>
                                  <td>{person.date}</td>
                              </tr>
                          ))
                        : []}
                </tbody>
            </table>
        </div>
    );
};

export default ListForm;

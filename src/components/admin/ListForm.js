import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { peopleAction } from "../../redux/Actions/peopleAction";

const ListForm = (props) => {
    const dispatch = useDispatch();
    const course_id = props.id;
    const peoplelist = useSelector((state) => state.people.peopleList);
    console.log("props", course_id);

    const getPeopleList = async () => {
        dispatch(peopleAction.getPeople(3));
    };
    useEffect(() => {
        getPeopleList();
    }, []);

    console.log(peoplelist);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>이름</th>
                        <th>연락처</th>
                        <th>주소</th>
                        <th>신청 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>이승희</td>
                        <td>01020614198</td>
                        <td>서울시 성동구 마장로137</td>
                        <td>2023-04-12</td>
                    </tr>
                    <tr>
                        {Array.isArray(peoplelist)
                            ? peoplelist.map((item) => (
                                  <tr key={item.id}>
                                      <td>{item.id}</td>
                                      <td>{item.name}</td>
                                      <td>{item.phone}</td>
                                      <td>{item.address}</td>
                                  </tr>
                              ))
                            : []}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListForm;

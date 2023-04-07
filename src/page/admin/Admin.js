import React, { useState } from "react";
import CourseAdd from "../../components/admin/CourseAdd";
import AdminMenu from "../../components/admin/AdminMenu";
import PeopleList from "../../components/admin/PeopleList";
import { useParams } from "react-router-dom";
import PosterAdd from "../../components/admin/PosterAdd";

const Admin = () => {
    let { id } = useParams();
    console.log("아이디", id);
    if (id === "addcourse") {
        return (
            <div>
                <AdminMenu />
                <CourseAdd />
            </div>
        );
    } else if (id === "addposter") {
        return (
            <div>
                <AdminMenu />
                <PosterAdd />
            </div>
        );
    } else if (id === "peoplelist") {
        return (
            <div>
                <AdminMenu />
                <PeopleList />
            </div>
        );
    }
    return (
        <div>
            <AdminMenu />
            <div>관리자페이지 입니다.</div>
        </div>
    );
};

export default Admin;

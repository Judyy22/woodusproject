import React, { useState } from "react";
import CourseAdd from "../../components/admin/CourseAdd";
import AdminMenu from "../../components/admin/AdminMenu";
import PeopleList from "../../components/admin/PeopleList";
import { useParams } from "react-router-dom";
import PosterAdd from "../../components/admin/PosterAdd";
import { Container } from "react-bootstrap";
import "../../components/admin/Admin.css";

const Admin = () => {
    let { id } = useParams();
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
        <div className="adminMainBox">
            <AdminMenu />
            <Container>
                <div className="adminMainTitle">
                    <div>관리자 페이지 입니다.</div>
                    <div>메뉴를 선택해 주세요.</div>
                </div>
            </Container>
        </div>
    );
};

export default Admin;

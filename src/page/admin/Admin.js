import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CourseAdd from "../../components/admin/CourseAdd";
import AdminMenu from "../../components/admin/AdminMenu";
import "../../components/admin/Admin.css";
import PeopleList from "../../components/admin/PeopleList";

const Admin = () => {
    const [menu, setMenu] = useState(null);
    const ButtonId = (data) => {
        console.log("admin", data);
        setMenu(data);
    };
    return (
        <div className="AdminBack">
            <Container className="AdminMainMenu">
                <div className="AdminMainMenuLeft">
                    <AdminMenu onClick={ButtonId} />
                </div>
                <div className="AdminMainMenuRight">
                    {menu === "1001" ? <CourseAdd /> : null}
                    {menu === "1002" ? <PeopleList /> : null}
                </div>
            </Container>
        </div>
    );
};

export default Admin;

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Secondmenu.css";

const Secondmenu = (props) => {
    const menuTitle = props.list.name;
    const menuList = props.list.dropdown;
    const select = props.now;
    const nowSelect = menuList[select - 1];
    const [newlist, setNewList] = useState(menuList);
    const [openlist, setOpenlist] = useState(false);

    useEffect(() => {
        const filteredArray = menuList.filter((item) => item.id !== select);
        setNewList(filteredArray);
    }, [menuList, select]);

    const clickList = () => {
        setOpenlist(!openlist);
    };

    return (
        <div className="secondMenuBox">
            <Container className="secondMenuInBox">
                <div className="secondMenuTitle">{menuTitle}</div>
                <div className="seconMenuSecondTitle">
                    <div
                        key={nowSelect.id}
                        className="selectName"
                        onClick={clickList}
                    >
                        {nowSelect.name}
                    </div>
                    <ul className={openlist ? "listbox" : "none"}>
                        {newlist.map((item) => (
                            <li key={item.id} className="list">
                                <Link
                                    to={item.link}
                                    key={item.id}
                                    state={{
                                        data: menuList,
                                        select: item.id,
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Secondmenu;

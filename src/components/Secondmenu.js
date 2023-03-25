import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Secondmenu.css";

const Secondmenu = (props) => {
    const menuTitle = props.list.name;
    const menuList = props.list.dropdown;
    const select = props.now;
    const nextList = props.list; //세컨드메뉴바로 이동시 전체 리스트 보내줘야함

    const nowSelect = menuList[select - 1];

    const [newlist, setNewList] = useState(menuList);
    const [openlist, setOpenlist] = useState(false);
    const [listHeight, setListHeight] = useState(0);

    useEffect(() => {
        const filteredArray = menuList.filter((item) => item.id !== select);
        setNewList(filteredArray);
    }, [menuList, select]);

    const clickList = () => {
        setOpenlist(!openlist);
    };

    // 클릭 이벤트가 발생할 때 document에 이벤트를 등록하여 클릭된 요소가 드롭다운 내부 요소가 아닌 경우 드롭다운을 닫습니다.
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openlist && !event.target.closest(".seconMenuSecondTitle")) {
                setOpenlist(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        // 이펙트 함수가 반환하는 함수는 컴포넌트가 언마운트될 때 이벤트 리스너를 삭제합니다.
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [openlist]);

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
                    <ul
                        className={
                            openlist
                                ? "secondMenulistbox open"
                                : "secondMenulistbox"
                        }
                    >
                        {newlist.map((item) => (
                            <li key={item.id} className="secondMenulist">
                                <Link
                                    to={item.link}
                                    key={item.id}
                                    state={{
                                        data: nextList,
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

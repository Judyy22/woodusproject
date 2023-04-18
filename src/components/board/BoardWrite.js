import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Axios from "axios";
import { useLocation } from "react-router-dom";

const BoardWrite = () => {
    const location = useLocation();
    console.log(location.pathname);
    const [boardContent, setBoardContent] = useState({
        title: "",
        content: "",
    });

    const [viewContent, setViewContent] = useState([]);

    useEffect(() => {}, []);

    const submitReview = () => {
        // Axios.post("http://woodus.net/api/notice", {
        //     title: movieContent.title,
        //     contents: movieContent.contents,
        // })
        //     .then((response) => {
        //         console.log(response.data);
        //         alert("등록 완료!");
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        console.log({
            title: boardContent.title,
            content: boardContent.content,
        });
    };

    const getValue = (e) => {
        const { name, value } = e.target;
        setBoardContent({
            ...boardContent,
            [name]: value,
        });
    };

    const goList = () => {};

    return (
        <div className="App">
            <div className="movie-container">
                {viewContent.map((element) => (
                    <div style={{ border: "1px solid #333" }}>
                        <h2>{element.title}</h2>
                    </div>
                ))}
            </div>
            <div className="form-wrapper">
                <input
                    className="title-input"
                    type="text"
                    placeholder="제목"
                    onChange={getValue}
                    name="title"
                />
                <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setBoardContent({
                            ...boardContent,
                            content: data,
                        });
                    }}
                />
            </div>
            <div className="boardwriteButton">
                <button className="submit-button" onClick={submitReview}>
                    입력
                </button>
                <button>뒤로가기</button>
            </div>
        </div>
    );
};

export default BoardWrite;

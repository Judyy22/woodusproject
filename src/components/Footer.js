import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerBox">
            <Container className="footerInBox">
                <div className="footerRightBox">
                    <div className="rightFirst">
                        <div className="linktag">개인정보 처리 방침</div>
                        <Link to="/adminLog" className="linktag">
                            <div>관리자코드</div>
                        </Link>
                    </div>
                    <div className="rightSecond">
                        <div>우드어스 사회적협동조합</div>
                        <div>이사장 : 나유숙</div>
                        <div>
                            사업자 등록번호 : 776-82-00307 (제조업,
                            교육서비스업)
                        </div>
                        <div>
                            주소 : 서울특별시 성동구 용답중앙11길 13 어울림빌딩
                            지하1층
                        </div>
                        <div>Copyright ©WOODUS ALL RIGHTS RESERVED. </div>
                    </div>
                </div>
                <div>
                    <img src="/pictures/woodus-logo.png" width="150px" />
                    <div>
                        <div>밴드</div>
                        <div>카카오</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;

import React, { useEffect } from "react";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import ConDetail from "../../components/contribution/ConDetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { contributionAction } from "../../redux/Actions/contributionAction";

const ContribDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const conDetail = useSelector((state) => state.con.ConDetail);
    const getconDetail = async () => {
        dispatch(contributionAction.getContributionDetail(id));
    };
    useEffect(() => {
        getconDetail();
    }, []);

    console.log("conD", conDetail);
    return (
        <div>
            <Menubar />
            <ConDetail />
            <Footer />
        </div>
    );
};

export default ContribDetail;

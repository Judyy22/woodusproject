import api from "../api";

function getBoardList() {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_BOARD_REQUEST" });
            const getNoticeApi = api.get("/notice/list"); //공지사항 목록 조회
            const getQnaApi = api.get("/qna/list"); //QnA게시판 목록 조회

            let [noticeList, qnaList] = await Promise.all([
                getNoticeApi,
                getQnaApi,
            ]);

            dispatch({
                type: "GET_BOARD_SUCCESS",
                payload: {
                    noticeList: noticeList.data,
                    qnaList: qnaList.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_BOARD_FAILURE" });
        }
    };
}

function getBoardDetail(board_id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_BOARD_DETAIL_REQUEST" });
            const getNoticeDetailApi = api.get(`/notice/${board_id}`); //공지사항 목록 조회
            const getQnaDetailApi = api.get(`/qna/${board_id}`); //QnA게시판 목록 조회

            let [noticeDetail, qnaDetail] = await Promise.all([
                getNoticeDetailApi,
                getQnaDetailApi,
            ]);

            dispatch({
                type: "GET_BOARD_DETAIL_SUCCESS",
                payload: {
                    noticeDetail: noticeDetail.data,
                    qnaDetail: qnaDetail.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_BOARD_DETAIL_FAILURE" });
        }
    };
}

export const boardAction = { getBoardList, getBoardDetail };

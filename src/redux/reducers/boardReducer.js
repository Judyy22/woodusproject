let initialstate = {
    noticeList: {},
    noticeDetail: null,
};

function boardReducer(state = initialstate, action) {
    let { type, payload } = action;
    switch (type) {
        // 모든 게시판 조회
        case "GET_BOARD_REQUEST":
            return [{ ...state }];
        case "GET_BOARD_SUCCESS":
            return {
                ...state,
                noticeList: payload.noticeList,
            };
        case "GET_BOARD_FAILURE":
            return { ...state };

        //모든 게시판 디테일 조회
        case "GET_BOARD_DETAIL_REQUEST":
            return { ...state };
        case "GET_BOARD_DETAIL_SUCCESS":
            return {
                ...state,
                noticeDetail: payload.noticeDetail,
            };
        case "GET_BOARD_DETAIL_FAILURE":
            return { ...state };
        default:
            return { ...state };
    }
}

export default boardReducer;

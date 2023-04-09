import api from "../api";

function getCourses(id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_COURSES_REQUEST" });
            const getPresentCoursesApi = api.get(`/course/present`); //진행중인 코스 조회
            const getOverCoursesApi = api.get(`/course/over`); //모집완료 코스 조회

            let [presentCourses, overCourses] = await Promise.all([
                getPresentCoursesApi,
                getOverCoursesApi,
            ]);

            dispatch({
                type: "GET_COURSES_SUCCESS",
                payload: {
                    presentCourses: presentCourses.data,
                    overCourses: overCourses.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_COURSES_FAILURE" });
        }
    };
}

function postCourse(course_id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "POST_COURSE_REQUEST" });
            const postCourseApi = api.post(`/course`); //프로그램 등록

            let [courseDetail] = await Promise.all([courseDetail]);
            dispatch({
                type: "GET_DETAIL_SUCCESS",
                payload: { courseDetail: courseDetail.data },
            });
        } catch (error) {
            //에러 핸들링
            dispatch("GET_DETAIL_FAILURE");
        }
    };
}

function getCourseDetail(course_id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_DETAIL_REQUEST" });
            const courseDetailApi = api.get(`/course/${course_id}`); //과정 세부내용 조회

            let [courseDetail] = await Promise.all([courseDetail]);
            dispatch({
                type: "GET_DETAIL_SUCCESS",
                payload: { courseDetail: courseDetail.data },
            });
        } catch (error) {
            //에러 핸들링
            dispatch("GET_DETAIL_FAILURE");
        }
    };
}

export const courseAction = { getCourses, getCourseDetail };

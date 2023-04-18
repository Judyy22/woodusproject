import React from "react";

const FeedbackCard = () => {
    return (
        <div className="feedbackcardBox">
            <div className="feedbackdate">
                <div>2023-04-18</div>
            </div>
            <div className="feedbackName">
                <div>제목</div>
            </div>
            <div className="feedbackImageBox">
                <div className="beforeAfterBox">
                    <div className="feedbackBoxTitle">Before</div>
                    <div className="feedbackBoxImage">
                        <img src="/pictures/repairBefore1.png" width="100%" />
                    </div>
                </div>
                <div className="beforeAfterBox">
                    <div className="feedbackBoxTitle">After</div>
                    <div className="feedbackBoxImage">
                        <img src="/pictures/repairAfter1.png" width="100%" />
                    </div>
                </div>
            </div>
            <div className="feedbackcontent">수리내용</div>
        </div>
    );
};

export default FeedbackCard;

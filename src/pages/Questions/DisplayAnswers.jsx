import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import { Link } from "react-router-dom";

const DisplayAnswers = ({ question }) => {
  return (
    <div>
      {question.answer.map((ans) => {
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button>Share</button>
              <button>Delete</button>
            </div>
            <div>
              <p>answer {ans.answeredOn}</p>
              <Link
                to={`/Users/${ans.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avatar
                  backgroundColor="lightgreen"
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default DisplayAnswers;

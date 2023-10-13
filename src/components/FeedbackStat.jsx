import { React, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import propTypes from "prop-types";

const FeedbackStat = () => {
  const { feedback } = useContext(FeedbackContext);
  const averageRating =
    feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>
        average Rating:{" "}
        {isNaN(averageRating)
          ? 0
          : averageRating.toFixed(1).replace(/[.,]0$/, "")}
      </h4>
    </div>
  );
};

export default FeedbackStat;

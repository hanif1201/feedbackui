import React from "react";
import propTypes from "prop-types";

const FeedbackStat = ({ feedback }) => {
  const averageRating =
    feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedback.length;

  averageRating.toFixed(2);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
};

FeedbackStat.propTypes = {
  feedback: propTypes.array.isRequired,
};

export default FeedbackStat;

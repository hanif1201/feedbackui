import React from "react";
import FeedbackItem from "./FeedbackItem";
import propTypes from "prop-types";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div className="Feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

FeedbackItem.propTypes = {
  feedback: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      rating: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;

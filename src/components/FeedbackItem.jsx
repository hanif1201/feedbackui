import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "../shared/Card";
import propTypes from "prop-types";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={(id) => {
          handleDelete(item.id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: propTypes.shape({
    rating: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
  }),
};

export default FeedbackItem;

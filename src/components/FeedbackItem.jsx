import React from "react";
import Card from "../shared/Card";
import propTypes from "prop-types";

function FeedbackItem({ item }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
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

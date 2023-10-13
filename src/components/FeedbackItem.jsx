import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../shared/Card";
import propTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={(id) => {
          deleteFeedback(item.id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" onClick={() => editFeedback(item)} />
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

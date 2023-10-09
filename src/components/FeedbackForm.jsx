import React from "react";
import { useState } from "react";
import Card from "../shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState(" ");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            placeholder="Write a review"
            type="text"
            onChange={handleTextChange}
            value={text}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;

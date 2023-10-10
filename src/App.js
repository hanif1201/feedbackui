import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      const newFeedback = feedback.filter((feedback) => feedback.id !== id);
      setFeedback(newFeedback);
    }
  };

  return (
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStat feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          >
            {" "}
          </Route>

          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

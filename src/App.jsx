import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const savedFeedback = localStorage.getItem("feedback");

function App() {
  const [feedback, setFeedback] = useState(() => {
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good")
      setFeedback({ ...feedback, good: feedback.good + 1 });
    if (feedbackType === "neutral")
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    if (feedbackType === "bad")
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        good="Good"
        neutral="Neutral"
        bad="Bad"
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback options={feedback} />
          <p>Positive: {positiveFeedback}%</p>
        </>
      ) : (
        <Notification text="No feedback yet" />
      )}
    </>
  );
}

export default App;

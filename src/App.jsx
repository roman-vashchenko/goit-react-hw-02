import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good")
      setFeedback({ ...feedback, good: feedback.good + 1 });
    if (feedbackType === "neutral")
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    if (feedbackType === "bad")
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
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
      />
      {totalFeedback > 0 ? (
        <Feedback options={feedback} />
      ) : (
        <Notification text="No feedback yet" />
      )}
    </>
  );
}

export default App;

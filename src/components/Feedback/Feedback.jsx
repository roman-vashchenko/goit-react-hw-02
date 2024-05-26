import css from "../Feedback/Feedback.module.css";
import PositiveFeedback from "../Positive/PositiveFeedback";
import TotalFeedback from "../Total/TotalFeedback";

const Feedback = ({ feedback, positiveFeedback, totalFeedback }) => {
  const options = Object.keys(feedback);

  return (
    <div className={css.listFeedback}>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {option.charAt(0).toUpperCase() + option.slice(1)}:{" "}
            {feedback[option]}
          </li>
        ))}
      </ul>
      <TotalFeedback totalFeedback={totalFeedback} />
      <PositiveFeedback positiveFeedback={positiveFeedback} />
    </div>
  );
};

export default Feedback;

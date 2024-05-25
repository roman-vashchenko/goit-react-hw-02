import css from "../Feedback/Feedback.module.css";
import PositiveFeedback from "../Positive/PositiveFeedback";

const Feedback = ({ feedback, positiveFeedback }) => {
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
      <PositiveFeedback positiveFeedback={positiveFeedback} />
    </div>
  );
};

export default Feedback;

import css from "../Positive/PositiveFeedback.module.css";

const PositiveFeedback = ({ positiveFeedback }) => {
  return (
    <div>
      <p className={css.positiveFeedback}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default PositiveFeedback;

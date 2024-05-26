import css from "../Total/TotalFeedback.module.css";

const TotalFeedback = ({ totalFeedback }) => {
  return (
    <div>
      <p className={css.text}>Total: {totalFeedback}</p>
    </div>
  );
};

export default TotalFeedback;

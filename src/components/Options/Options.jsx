import css from "../Options/Options.module.css";

const Options = ({
  feedback,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  const options = Object.keys(feedback);
  return (
    <div className={css.options}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => updateFeedback(option)}
          type="button"
          className={css.btn}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} type="button" className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

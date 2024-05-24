const Options = ({
  good,
  neutral,
  bad,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")} type="button">
        {good}
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button">
        {neutral}
      </button>
      <button onClick={() => updateFeedback("bad")} type="button">
        {bad}
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

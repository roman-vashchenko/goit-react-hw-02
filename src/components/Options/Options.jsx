const Options = ({ good, neutral, bad, updateFeedback }) => {
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
    </div>
  );
};

export default Options;

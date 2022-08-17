import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + bad + neutral}</p>
      <p>average {(good - bad) / (good + bad + neutral)}</p>
      <p>positive {(good / (good + bad + neutral)) * 100}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button
          handleClick={() => {
            setBad(bad + 1);
          }}
          text="bad"
        />
      </div>
      <div>
        <h2>Statistics</h2>
        {good === 0 && neutral === 0 && bad === 0 ? (
          <p>No feedback given</p>
        ) : (
          <div>
            {/* <Statistics good={good} neutral={neutral} bad={bad} /> */}
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine
              text={"average"}
              value={(good - bad) / (good + bad + neutral)}
            />
            <StatisticLine
              text={"positive"}
              value={(good / (good + bad + neutral)) * 100 + "%"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

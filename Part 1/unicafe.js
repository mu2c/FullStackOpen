import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>;

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0)  {
    return <div>No feedback given</div>;
  }

  const averageGNB = () => (good-bad) / all;

  const positive = () => (good / all) * 100 + "%";
  
  return (
    <table>
      <tbody>
        <Statistic text="good" value ={good} />
        <Statistic text="neutral" value ={neutral} />
        <Statistic text="bad" value ={bad} />
        <Statistic text="all" value ={all} />
        <Statistic text="average" value = {averageGNB()} />
        <Statistic text="positive" value ={positive()} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => setGood(good + 1);
  const onClickNeutral = () => setNeutral(neutral + 1);
  const onClickBad = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback"  />
      <Button onClick={onClickGood} text="good" />
      <Button onClick={onClickNeutral} text="neutral" />
      <Button onClick={onClickBad} text="bad" />
      <Header text="statistics"  />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );

};

ReactDOM.render(<App />, document.getElementById("root"));


import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [points, setPoints] = useState(new Uint16Array(7));
  const [selected, setSelected] = useState(0);

  function mostVoted() {
    let highestVoted = 0;
    for (let i = 0; i < anecdotes.length - 1; i++) {
      if (points[i] > highestVoted) {
        highestVoted = i;
      }
    }

    return highestVoted;
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
      </div>
      <div>
        <button
          onClick={() => {
            let clone = [...points];
            clone[selected] += 1;
            setPoints(clone);
          }}
        >
          Vote
        </button>
        <button
          onClick={() => {
            setSelected(Math.floor(Math.random() * anecdotes.length));
          }}
        >
          Make me laugh!
        </button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVoted()]}</p>
        <p>has {points[mostVoted()]} votes</p>
      </div>
    </div>
  );
};

export default App;

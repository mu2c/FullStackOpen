import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development';

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Anecdote = ({ anecdote }) => <p>{anecdote}</p>;

const ShowVotes = ({votesNum}) =>  <p> has {votesNum} votes </p>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => {
    const randomElement = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(randomElement)
  }

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const max = Math.max(...votes)

  const winningAnecdote = anecdotes[votes.indexOf(max)]

  return (
    <div>
      <Header text= "Anecdote of the day" />
      <Anecdote anecdote= {anecdotes[selected]} />
      <ShowVotes votesNum= {votes[selected]} />
      <div>
      <Button onClick={handleVote} text="vote"/>
      <Button onClick={handleNext} text="next anecdote" />
      </div>
      <Header text= "Anecdote with the most votes"  />
      <Anecdote anecdote= {winningAnecdote} />
      <ShowVotes votesNum= {max}  />
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

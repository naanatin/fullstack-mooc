import React, { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Display = (props) => {
  return (
  <>
  <p>{props.text}</p>
  <p>has {props.points} points.</p>
  </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const min = 0
  const max = anecdotes.length
  const [points] = useState(() => new Array(max).fill(0))
  let [top, setTop] = useState(0)
  console.log(points)
  
  // satunnaislukugeneraattori, joka arpoo satunnaisen kokonaisluvun väliltä min...max-1.
  // Math.random() ei koskaan palauta maksimiarvoa (exclusive), joten maksimin tulee olla
  // yhtä kokonaislukua suurempi kuin todellinen haluttu maksimi, tässä tapauksessa 7 ( = anekdoottitaulukon koko).
  const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max-min) + min)

  const updatePoints = (index) => {
      const copy = [...points]
      copy[index] += 1
      points[index] = copy[index]
      setTop(updateTop())
      console.log(points)
      console.log(top)
  }

  const updateTop = () => {
    // selvitetään äänestyksen yhteydessä korkein pistemäärä, ja tallennetaan sen anekdootin indeksi
    // top-muuttujaan. Oletuksena näkyy ensimmäinen anekdootti.
    for (let i=0; i<7; i++) {
      console.log(i)
      if (points[i] > points[top]) {
        top = i
      }
    }
    return top
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <Button handleClick={() => updatePoints(selected)} text ='Vote' />
      <Button handleClick={() => setSelected(generateRandomNumber(min, max))} text='Next anecdote' />
      <Header text='Anecdote with most votes' />
      <Display text={anecdotes[top]} points={points[top]} />
    </div>
  )
}

export default App
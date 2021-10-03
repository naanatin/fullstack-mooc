import React, { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => <p>{props.name} {props.total}</p>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='Give feedback' />
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <Header text='Statistics' />
      <Display name='Good' total={good} />
      <Display name='Neutral' total={neutral} />
      <Display name='Bad' total={bad} />
    </div>
  )
}


export default App
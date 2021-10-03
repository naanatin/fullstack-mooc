import React, { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = (props) => (
  // tällä voidaan käsitellä kaikkien nappien painallukset
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticsLine = (props) => <p>{props.name} {props.value}</p>

const Statistics = (props) => {
  let average, positive, total = 0
  total = props.good + props.neutral + props.bad

  // jos palautteita ei ole annettu, ei tilastoja näytetä
  if (total === 0) {
      return <p>No feedback given.</p>
  }

  else {
    average = ((props.good*1)+(props.neutral*0)+(props.bad*-1))/total
    positive = props.good / total * 100 + ' %'

    return (
    <div>
      <StatisticsLine name='Good' value={props.good} />
      <StatisticsLine name='Neutral' value={props.neutral} />
      <StatisticsLine name='Bad' value={props.bad} />
      <StatisticsLine name='Total' value={total} />
      <StatisticsLine name='Average' value={average} />
      <StatisticsLine name='Positive' value={positive} />
    </div>
    )
  }

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (    
    <div>      
      <Header text='Give feedback' />
      <Button text='Good' handleClick={() => setGood(good + 1)} />
      <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='Bad' handleClick={() => setBad(bad + 1)} />
      <Header text='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
    
  )
  
}

export default App
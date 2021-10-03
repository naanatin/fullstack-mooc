import React, { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = (props) => (
  // tällä voidaan käsitellä kaikkien nappien painallukset
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => <p>{props.name} {props.total}</p>

const CountTotals = (good, neutral, bad) => {
  const totals = {}

  totals.total = good + neutral + bad
  // jos nappeja ei vielä ole painettu, näytetään keskiarvona ja positiivisina 0,
  // muussa tapauksessa suoritetaan laskenta. tällä estetään tuloksissa näkyvä 'virhe' NaN (not a number).
  if (totals.total !== 0) {
    totals.average = ((good*1)+(neutral*0)+(bad*-1))/totals.total
    totals.positive = good / totals.total * 100 + ' %'
  }
  else {
    totals.average = 0
    totals.positive = 0 + ' %'
  }
  
  return totals
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let totals = CountTotals(good, neutral, bad)

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
      <Display name='Total' total={totals.sum} />
      <Display name='Average' total={totals.average} />
      <Display name='Positive' total={totals.positive} />
    </div>
  )
}

export default App
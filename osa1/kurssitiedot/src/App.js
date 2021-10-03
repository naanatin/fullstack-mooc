import React from 'react'

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (header) => {
  return (
    <div>
      <h1>{header.course.name}</h1>
    </div>
  )
}

const Content = (content) => {

  return (
    <div>
      <p>{content.parts[0].name} {content.parts[0].exercises}</p>
      <p>{content.parts[1].name} {content.parts[1].exercises}</p>
      <p>{content.parts[2].name} {content.parts[2].exercises}</p>
    </div>
  )
}

const Total = (total) => {

  return (
    <div>
      <p>Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises} </p>
    </div>
  )
}


export default App;


const Total = (props) => {
  const exercisess = props.parts.map((part) => part.exercises)
  const total = exercisess.reduce((sum, value) => value + sum, 0)

  return (
    <div id="total">
      <h4>total of {total} exercises</h4>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <div id="content">
      {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Header = (props) => {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

const Course = (props) => {
  return (
    <div id="course">
      <Header name={props.course.name}/>
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div id="courses">
      {courses.map((e) => <Course key={e.id} course={e} />)}
    </div>
  )
  
}

export default App
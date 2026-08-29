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
            <Header name={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

export default Course;
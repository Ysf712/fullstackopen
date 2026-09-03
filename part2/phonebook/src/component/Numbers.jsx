const Numbers = (props) => {
    return (
        <div id='Numbers'>
            <ol>
                {props.persons.map((p) => <li key={p.name}>{p.name} {p.number}</li>)}
            </ol>
        </div>
    )
}

export default Numbers;
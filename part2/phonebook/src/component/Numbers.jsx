const Numbers = (props) => {
    const deletePersone = (person) => {
        return () => {
            if (window.confirm(`delete ${person.name} ?`)){
                props.personsService.remove(person.id)
                props.setPersons(props.persons.filter((p) => p.id !== person.id))
            }
        }
    }

    return (
        <div id='Numbers'>
            <ol>
                {
                    props
                        .persons
                        .map((p) => 
                            <li key={p.id}>{p.name} {p.number} {""}
                            <button onClick={deletePersone(p)}>Delete</button>
                            </li>
                    )
                }
            </ol>
        </div>
    )
}

export default Numbers;
const AddPhonebook = (props) => {

    const addPerson = (event) => {
        event.preventDefault()
        let isIncluded = props.persons.some((p) => p.name == props.newName)        
        if (isIncluded === true)
        {
            alert(`${props.newName} is already added to AddPhonebook`)
            return;
        }
        props.setPersons(props.persons.concat({ name: props.newName , number: props.newNumber}))
    }

    return (
        <div id='add--new-phonebook'>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={(e) => props.setNewName(e.target.value)} />
                </div>
                <div>
                    number: <input onChange={(e) => props.setNewNumber(e.target.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPhonebook;
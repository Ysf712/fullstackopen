const AddPhonebook = (props) => {
    const addPerson = (event) => {
        event.preventDefault()
        let isIncluded = props.persons.find((p) => p.name == props.newName)
        const update_message = `${props.newName} is already added to AddPhonebook, replace the old number with a new one?`
        if (isIncluded && window.confirm(update_message)) {
            const updatedPerson = {
                name: props.newName,
                number: props.newNumber,
                id: isIncluded['id']
            }
            props.personsService.update(updatedPerson)
                .then((r) =>
                    props.setPersons(props.persons.filter((p) => p.id !== isIncluded['id']).concat(r))
            )
            return;
        }
        props.personsService
            .create({
                name: props.newName,
                number: props.newNumber
            })
            .then((r) => {
                props.setPersons(props.persons.concat(r))
            })


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
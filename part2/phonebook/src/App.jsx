import { useState } from 'react'
import AddPhonebook from './component/AddPhonebook'
import Numbers from './component/Numbers'

const Filter = (props) => {
  return (
    <div id='filter'>
      filte shown with <input onChange={(e) => props.setNameFilted(e.target.value)}></input>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilted, setNameFilted] = useState('')

  let personsToShow = persons.filter((p) => 
    p.name.toLowerCase().includes(nameFilted.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        persons={persons}
        nameFilted={nameFilted}
        setNameFilted={setNameFilted}
      />
      <h2>Add a new</h2>
      <AddPhonebook
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Numbers persons={personsToShow} />
    </div>
  )
}

export default App
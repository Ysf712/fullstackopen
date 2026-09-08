import { useState, useEffect } from 'react'
import axios from 'axios'
import AddPhonebook from './component/AddPhonebook'
import Numbers from './component/Numbers'
import Filter from './component/Filter'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilted, setNameFilted] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((r) => setPersons(r.data))
  }, [])


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
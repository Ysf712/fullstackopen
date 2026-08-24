import { useState } from 'react'
import './App.css'

function Hello(){
  return (
    <>
    <p>HELLO WOLD</p>
    </>
  )
}

function App(){
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <>
    <h1>HELLO YSSFF</h1>
    <Hello />
    <Hello />
    </>
  )
}

export default App

//props: passing data to components

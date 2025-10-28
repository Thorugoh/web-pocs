import { useState } from 'react'
import './App.css'
import { ChangeName } from './ChangeNameOptimistic'
import { UpdateName } from './UpdateName'

function App() {
  const [name, setName] = useState("Victor")

  return (
    <>
      <UpdateName />
      <ChangeName currentName={name} onUpdateName={setName} />
    </>
  )
}

export default App

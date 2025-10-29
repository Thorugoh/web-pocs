import { useState } from 'react'
import './App.css'
import { ChangeName } from './ChangeNameOptimistic'
import { UpdateName } from './UpdateName'
import { CommentsPage } from './UseComponent'
import { TabsDemo } from './Tabs'

function App() {
  const [name, setName] = useState("Victor")

  return (
    <>
      <TabsDemo />
      <UpdateName />
      <ChangeName currentName={name} onUpdateName={setName} />
      <CommentsPage /> 
    </>
  )
}

export default App

import './App.css'
import { ChangeName } from './ChangeNameOptimistic'
import { UpdateName } from './UpdateName'

function App() {
  return (
    <>
      <UpdateName />
      <ChangeName currentName={"Victor"} onUpdateName={(name) => console.log(name)} />
    </>
  )
}

export default App

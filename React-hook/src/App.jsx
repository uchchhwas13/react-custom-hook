import './App.css'
import StatusBar from './StatusBar.jsx'
import SaveButton  from './SaveButton.jsx'
import UseMemoHookUsage from './UseMemoHookUsage.jsx'
import CreateContextExample from './context-hook/CreateContextExample.jsx'
import UseReducerExample from './use-reducer-hook/UseReducerExample.jsx'

function App() {
  

  return (
    <>
      <UseReducerExample />
      <CreateContextExample />
      //CustomHook
      <StatusBar />
      <SaveButton />
      //UseMemoHook
      <UseMemoHookUsage />
    </>
  )
}

export default App

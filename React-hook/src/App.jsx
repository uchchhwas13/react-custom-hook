import './App.css'
import StatusBar from './StatusBar.jsx'
import SaveButton  from './SaveButton.jsx'
import UseMemoHookUsage from './UseMemoHookUsage.jsx'
import ThemeUsage from './context-hook/ThemeUsage.jsx'

function App() {
  

  return (
    <>
      <ThemeUsage />
      <StatusBar />
      <SaveButton />
      <UseMemoHookUsage />
    </>
  )
}

export default App

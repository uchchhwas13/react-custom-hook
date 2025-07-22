import './App.css';
import StatusBar from './StatusBar.jsx';
import SaveButton from './SaveButton.jsx';
import UseMemoHookUsage from './UseMemoHookUsage.jsx';
import CreateContextExample from './context-hook/CreateContextExample.jsx';
import UseReducerExample from './use-reducer-hook/UseReducerExample.jsx';
import UseCallbackExample from './use-callback-hook/UseCallbackExample.jsx';

function App() {
  return (
    <>
      <UseCallbackExample />
       {/* 
      <UseReducerExample />
      <CreateContextExample />
        
      //CustomHook
      <StatusBar />
      <SaveButton />
      //UseMemoHook
      <UseMemoHookUsage />
      */}
    </>
  );
}

export default App;

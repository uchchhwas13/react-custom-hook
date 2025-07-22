import {useReducer} from 'react'

const Content = () => {
    const initiaState = {count:0};

    const reducer = (state, action) => {
        switch(action.type) {
            case 'increase': 
                return {count: state.count + 1};
            case 'decrease':
                return {count: state.count - 1};
            case 'input':
                return {count: action.payload}
            default: {
                return state;
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initiaState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type: 'increase'})}>Increase</button>
      <button onClick={()=>dispatch({type: 'decrease'})}>Decrease</button>
      <input type='number' value = {state.count}
      onChange={(e) => {
        dispatch({type: 'input', payload: Number(e.target.value)});
      }} 
      />
    </div>
  )
}
export default Content

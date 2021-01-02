import React, { useReducer } from 'react'

const initialState = 0 //初期値を設定
const reducer =  (state, action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}//何を実行するかを保存できる
function CounterReducer() {
  const [count, dispatch] = useReducer( reducer, initialState)
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => dispatch('increment')}>increment</button>
      <button onClick={() => dispatch('decrement')}>decrement</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  )
}

export default CounterReducer
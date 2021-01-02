import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 1,
  secondCounter: 10
} //初期値を設定

const reducer =  (state, action) => {
  switch(action.type){//なぜtypeにしたのか-オブジェクトにし複数管理するようにした、
    case 'increment1':
      return {...state, firstCounter: state.firstCounter + action.value}
    case 'decrement1':
      return {...state, firstCounter: state.firstCounter - action.value}
    case 'increment2':
      return {...state, secondCounter: state.secondCounter + action.value}
    case 'decrement2':
      return {...state, secondCounter: state.secondCounter - action.value}
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
      <h1>count: {count.firstCounter}</h1>
      <h1>count: {count.secondCounter}</h1>
      <button onClick={() => dispatch({type: 'increment1', value: 1})}>increment1</button>
      <button onClick={() => dispatch({type: 'decrement1', value: 1})}>decrement1</button>
      <button onClick={() => dispatch({type: 'increment2', value: 10})}>increment2</button>
      <button onClick={() => dispatch({type: 'decrement2', value: 10})}>decrement2</button>
      <button onClick={() => dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default CounterReducer
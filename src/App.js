import React, { useReducer, createContext, useState }from 'react';
import './App.css';
// import Counter from './components/Counter';
// import CounterHooks from './components/CounterHook';
// import FormHook from './components/FormHook'
// import ItemHook from './components/ItemHook'
// import EffectHooks from './components/EffectHook'
// import MouseEventEffect from './components/MouseEvent'
// import ComponentC from './components/ComponentC'
// import CounterReducer from './components/CounterReducer'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

export const CountContext = createContext()

const initialState = {
  firstCounter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
      case 'increment1':
        return {...state, firstCounter: state.firstCounter + action.value}
      case 'decrement1':
        return {...state, firstCounter: state.firstCounter - action.value}
      case 'reset':
        return initialState
      default:
        return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  //Contextを使用する場合でもProviderを使用するのは変わらない
  return (
    <div className="App">
      <h1>count:{count.firstCounter}</h1>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}
//CountProviderで囲うことによって、Component間でvalueを共有できる
//つまりグローバルコンテキストとしてできる

export default App;
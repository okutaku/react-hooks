import React, { createContext, useState}from 'react';
import './App.css';
// import Counter from './components/Counter';
// import CounterHooks from './components/CounterHook';
// import FormHook from './components/FormHook'
// import ItemHook from './components/ItemHook'
// import EffectHooks from './components/EffectHook'
// import MouseEventEffect from './components/MouseEvent'
// import ComponentC from './components/ComponentC'
import CounterReducer from './components/CounterReducer'

export const UserContext = createContext()
export const LanguageContext = createContext()

function App() {
  //Contextを使用する場合でもProviderを使用するのは変わらない
  return (
    <div className="App">
      <CounterReducer />
    </div>
  );
}

export default App;

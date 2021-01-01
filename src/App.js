import React, { createContext, useState}from 'react';
import './App.css';
// import Counter from './components/Counter';
// import CounterHooks from './components/CounterHook';
// import FormHook from './components/FormHook'
// import ItemHook from './components/ItemHook'
// import EffectHooks from './components/EffectHook'
// import MouseEventEffect from './components/MouseEvent'
import ComponentC from './components/ComponentC'

export const UserContext = createContext()
export const LanguageContext = createContext('日本語')

function App() {
  const [user, setUser] = useState({name: 'yamada', age: '32'})
  const [language, setLanguage] = useState('日本語')

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC/> 
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

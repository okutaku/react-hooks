// import Counter from './components/Counter';
// import CounterHooks from './components/CounterHook';
// import FormHook from './components/FormHook'
// import ItemHook from './components/ItemHook'
// import EffectHooks from './components/EffectHook'
// import MouseEventEffect from './components/MouseEvent'
// import ComponentC from './components/ComponentC'
// import CounterReducer from './components/CounterReducer'
// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB'
// import ComponentC from './components/ComponentC'
import React, { useReducer, useEffect }from 'react';
import './App.css';
import axios from 'axios'
//HTTPをリクエストするもの

const initialState = {
  loading: true,
  error: '', 
  post:{}
}

//データが取得したときの処理できないときの処理
const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return{
        loading: false,
        post: action.payload,
        error:''
      }
    case 'FETCH_ERROR':
      return{
        loading: false,
        post:{},
        error:'データの取得に失敗しました。'
      }
    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      //データを取得してくる
      .then(res => {
        dispatch({type: 'FETCH_SUCCESS', payload: res.data})
      })
      //成功したときはthen
      .catch(err => {
        dispatch({type:'FETCH_ERROR'})
      })
      //失敗したときはcatchに入ってくる
  })
  return (
    <div className="App">
      <h1>{state.loading ? 'Loading... ':state.post.title}</h1>
      <h2>{state.error ? state.error: null}</h2>
    </div>
  );
}
//CountProviderで囲うことによって、Component間でvalueを共有できる
//つまりグローバルコンテキストとしてできる

export default App;
import React, {useState} from 'react';
//関数コンポーネント内でステートを扱えるようにuseStateをimport
function CounterHooks() {
  const [count, setCount] = useState(0)
  //state宣言
  //[state値、更新値]任意の値を設定
  //setCountにはstateの更新していく値となる、countはstateになる use state(初期値)
  const incrementCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>count</button>
    </div>
  )
}
//thisは書かなくていい
//フックを呼び出すのはトップのみ
//毎回レンダーされてコンポーネントが呼び出される順番が保証されるため、
//Reactの関数内のみ

export default CounterHooks
//useEffectの使い方
//renderが走りすぎてしまう最適化でrenderを少なくしていく
//useEffectの引数にある値が変更したときしか走らないようにする処理を加える
import React, { useState, useEffect } from 'react'

function EffectHooks() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    document.title = `クリック数：${count}回`
  },[count])
  return (
    <div>
      <p>クリック数:{count}回</p>
      <p>名前:{name}</p>
      <input 
      type="text" 
      value={name}
      onChange={(event => setName(event.target.value))}
      />
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  )
}

export default EffectHooks
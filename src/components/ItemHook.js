//配列操作の仕方
//何番目かを管理するためにkeyを使う
import React, { useState } from 'react';

function ItemHook() {
  const[items, setItems] = useState([])
  const addItem = () => {
    setItems([...items,{id: items.length, value: Math.floor( Math.random() * 11)}])
  }
  return(
    <div>
      <button onClick={addItem}>追加</button>
      <ul>
        {
        items.map(item => (
          <li key={item.id}>
            {item.value}
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default ItemHook
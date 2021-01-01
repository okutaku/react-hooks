//EventLisnerの使い方
//最初だけのときは引数に[]をわたしてあげる

import React, { useState, useEffect} from 'react'

function MouseEventEffect(){
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const getMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('mousemove', getMousePosition)
    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }
  }, [])
  //処理を一回だけにするときはからカッコにして始めていく

  return (
    <div>
      <ul>
        <li>x座標：{x}</li>
        <li>y座標：{y}</li>
      </ul>
    </div>
  )
}

export default MouseEventEffect
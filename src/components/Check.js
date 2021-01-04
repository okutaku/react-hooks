import React, { useState,useMemo} from 'react'

function Check() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const incrementOne = () => {
    setCountOne(countOne + 1)
  }

  const incrementTwo = () => {
    setCountTwo(countTwo + 1)
  }
  
  const isEven = useMemo(() => {
    let i = 0
    while( i < 20000000) i ++//isEvenの処理を遅くするもの
    return countOne % 2 === 0
  },[countOne])
  //この処理が重いのをuseMemoを用いて最適化する

  return (
    <div>
      <h2>count {isEven() ? '偶数':'奇数'}</h2>
      <button onClick={incrementOne}>count1 {countOne}</button>
      <button onClick={incrementTwo}>count2 {countTwo}</button>
    </div>
  )
}

export default Check
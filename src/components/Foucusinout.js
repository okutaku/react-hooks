import React, {useEffect, useRef} from 'react'

function FocusInput(){

  const inputRef = useRef(null)
  useEffect( () => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input ref={inputRef}type="text" />
    </div>
  )
}

export default FocusInput

//useRefの使い方
//JSX内のノードに対してミュータブルな状態にし、アクションを起こせるようにする
//domを操作したい場合
//クロージャー内でアクセスしたい値を使いたいとき
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

//useRef
//JSX内のノードに対してミュータブルな状態にし、アクションを起こせるようにする
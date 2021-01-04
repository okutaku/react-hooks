import React from 'react'

function Title() {
  console.log(`Title`)
  return (
    <div>
      <h1> useCallback hooksによる最適化</h1>
    </div>
  )
}

export default React.memo(Title)
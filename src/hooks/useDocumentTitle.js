//カスタムフック作成時はuseを使用する
//hookをつかい同じ関数処理は書き別々のコンポーネントで使用できる
import {useEffect} from 'react'

function useDocumentTitle(count){
  useEffect(() => {
    document.title = `count ${count}`
  }, [count])
}

export default useDocumentTitle
import React,{ useState} from 'react'
import TestNumber from'./TestNumber'

const FuncCounter = ({num}) => {
  const [count, setCount]=useState(55)
  const [odd,setOdd]=useState(false)

  const plus=()=>{
    setCount(count+1)
  }
  const minus=()=>{
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0)
  }
  return (
    <div>
        <h1>Functional Component Counter</h1>
        <h3>{num}</h3>
        <button onClick={plus}>+</button>
        <button onClick={reset}>reset</button>
        <button onClick={minus}>-</button>
        <TestNumber san={num}/>
    </div>
  )
}

export default FuncCounter
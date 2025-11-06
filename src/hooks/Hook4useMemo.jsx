import { useMemo, useState } from "react"
import "../App.css"
import Child from "./Child"
const Hook4useMemo = () => {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)
  const heavyCal = useMemo(() => {
    console.log("heavy cal")
    let result = 0
    for (let i = 0; i <= 100000; i++) {
      result += i
    }
    return result + add
  } , [add ])
  return (
    <div>
      <p>{heavyCal}</p>
      <button onClick={() => setAdd(add + 1)}>Addition</button> {add}
      <br />
      <button onClick={() => setMinus(minus - 1)}>Minus</button> {minus}
      <br />
      <Child heavyCal={heavyCal}/>
    </div>
  )
}

export default Hook4useMemo
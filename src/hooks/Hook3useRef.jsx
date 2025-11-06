import { useEffect, useRef, useState } from "react"
import "../App.css"
const Hook3useRef = () => {

  /*
  const currentRef = useRef(0)
  // console.log(currentRef, "currentref")
  const handleClick = () => {
    currentRef.current += 1
    console.log(currentRef.current)
  }

  */

  /*
  const inputRef = useRef();
  const [name, setName] = useState("Ankit")
  const handleReset = () => {
    setName("")
    inputRef.current.focus()
  }

  const handleChange = () => {
    inputRef.current.style.color = "red"
  }
  */



  // Tracking previous state
  const [count  , setCount] = useState(0)
  const prevCount = useRef()
  useEffect(()=>{
    prevCount.current = count
  },[count])
  return (

    /*
    <>

      <div>count : {currentRef.current}</div> // this UI part will not be changed
      <button onClick={handleClick}>Click</button>

    </>

    */


    /*
    <>
    <input 
    type="text"
    placeholder="Type something..."
    value={name}
    onChange={(e) => setName(e.target.value)}
    ref={inputRef}
    />
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleChange}>Chnage Input</button>
    </>

    */

  // Tracking previous state
    <>
      <div>Count : {count}</div>
      <div>Prev count : {prevCount.current}</div>
    <button onClick={()=> setCount(count + 1)}>Increment Count</button>

    </>
  )
}

export default Hook3useRef
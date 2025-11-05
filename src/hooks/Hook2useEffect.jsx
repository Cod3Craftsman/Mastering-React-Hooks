import "../App.css"
import { useEffect, useState } from "react"
function Hook2useEffect() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(10)


  /*
  useEffect(() => {
    // runs one time by default
    console.log("Learning useEffect hook")
  }, [number])
  */

  /*
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1)
      }, 1000)
      return () => { clearInterval(interval) }
    }, [])
  */


  // Advance usecase of useEffect
  /*
  const [data, setData] = useState("")
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log("Error in fetch api"))
  }, [])

  console.log(data, "data")
*/

  // advance usecase (debouncing)
  const [searchTerm, setSearchTerm] = useState("")
  const [debounceTerm, setDebounceTerm] = useState("")
  useEffect(()=>{
    // api call
    const timeout = setTimeout(() => {
      setDebounceTerm(searchTerm)
    }, 1000);
    return () => {clearTimeout(timeout)}
  },[searchTerm])

  return (
    /*
    <div>
      <h1>useEffect Hook</h1>
      <div>{count}</div>
      <div>{number}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
    </div>
    */


    /*
    <>
      <div>timer : {count}</div>
    </>
    */


    /*
    <>
      {data ? data[0].title : <p>No data found</p>}

    </>
    */


    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <p>{debounceTerm}</p>
    </div>
  )
}

export default Hook2useEffect
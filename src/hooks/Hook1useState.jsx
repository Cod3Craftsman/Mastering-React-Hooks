import { useState } from 'react'
import "../App.css"

function App() {
  // const [count , setCount] = useState(0)  // primitive value
  // const [state , setState] = useState({ count: 0, clicks: 0 }) // non-primitive value
  // const [allVAlues, setAllValues] = useState({ firstName: "Ankit", lastName: "Gupta" })
  // const handleClick = () => {
  //   setAllValues({ ...allVAlues, firstName: "Aman" })
  // }

  // useState with arrays
  // const [task, setTask] = useState(["Learn React", "Build Project"])

  // const handleTask = () => {
  //   setTask([...task, 'Practice react'])
  // }


  // lazy Initialization
  // function expensive() {
  //   console.log("expensive")
  //   return 10;
  // }
  // const [count, setCount] = useState(() => expensive())


  // nested state 
  const [allVAlues, setAllValues] = useState({
    firstName: "Ankit", lastName: "Gupta", address: {
      city: "Pune",
      country: "India",
    }
  })

  const handleClick = () => {
    setAllValues({ ...allVAlues, lastName: 'Pal', address: { ...allVAlues.address, city: "Bhopal" } })
  }


  return (
    // <div>
    //   {/* <div>Button clicked - {count} time</div> */}
    //   {/* <button onClick={() => { setCount((prev) => prev + 1); setCount((prev) => prev + 1) }}>Click</button> */}

    //   {/* useState for non-primitive */}
    //   <button>Button clicked - {state.count} time</button>
    //   <div>clicks - {state.clicks}</div>
    //   <button onClick={() => setState({ ...state, count: state.count + 1, clicks: state.clicks + 1 })}>Click</button>
    // </div>

    // useState with objects
    // <>
    //   <div>
    //     {`My firstname is ${allVAlues.firstName} and lastname is ${allVAlues.lastName}`}
    //   </div>
    //   <button onClick={handleClick}>Update Name</button>
    // </>

    // useState with arrays
    // <>
    //   {task.map((val, index) => (
    //     <li key={index}>{val}</li>
    //   ))}
    //   <button onClick={handleTask}>Add Task</button>
    // </>




    // lazy Initialization
    // <>
    //   {count}
    //   <button onClick={() => setCount(count + 1)}>Click</button>

    // </>




    // nested state 
    <>
      <div>
        {`My firstname is ${allVAlues.firstName} and lastname is ${allVAlues.lastName} and city is ${allVAlues.address.city} and country is ${allVAlues.address.country}`}
      </div>
      <button onClick={handleClick}>Update Name</button>
    </>

  )
}

export default App

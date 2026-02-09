// import { useState } from 'react'
// import "../App.css"

// function App() {
//   // const [count , setCount] = useState(0)  // primitive value
//   // const [state , setState] = useState({ count: 0, clicks: 0 }) // non-primitive value
//   // const [allVAlues, setAllValues] = useState({ firstName: "Ankit", lastName: "Gupta" })
//   // const handleClick = () => {
//   //   setAllValues({ ...allVAlues, firstName: "Aman" })
//   // }

//   // useState with arrays
//   // const [task, setTask] = useState(["Learn React", "Build Project"])

//   // const handleTask = () => {
//   //   setTask([...task, 'Practice react'])
//   // }


//   // lazy Initialization
//   // function expensive() {
//   //   console.log("expensive")
//   //   return 10;
//   // }
//   // const [count, setCount] = useState(() => expensive())


//   // nested state 
//   // const [allVAlues, setAllValues] = useState({
//   //   firstName: "Ankit", lastName: "Gupta", address: {
//   //     city: "Pune",
//   //     country: "India",
//   //   }
//   // })

//   // const handleClick = () => {
//   //   setAllValues({ ...allVAlues, lastName: 'Pal', address: { ...allVAlues.address, city: "Bhopal" } })
//   // }


//   return (
//     // <div>
//     <h1>useState Hook</h1>
//     //   {/* <div>Button clicked - {count} time</div> */}
//     //   {/* <button onClick={() => { setCount((prev) => prev + 1); setCount((prev) => prev + 1) }}>Click</button> */}

//     //   {/* useState for non-primitive */}
//     //   <button>Button clicked - {state.count} time</button>
//     //   <div>clicks - {state.clicks}</div>
//     //   <button onClick={() => setState({ ...state, count: state.count + 1, clicks: state.clicks + 1 })}>Click</button>
//     // </div>

//     // useState with objects
//     // <>
//     //   <div>
//     //     {`My firstname is ${allVAlues.firstName} and lastname is ${allVAlues.lastName}`}
//     //   </div>
//     //   <button onClick={handleClick}>Update Name</button>
//     // </>

//     // useState with arrays
//     // <>
//     //   {task.map((val, index) => (
//     //     <li key={index}>{val}</li>
//     //   ))}
//     //   <button onClick={handleTask}>Add Task</button>
//     // </>




//     // lazy Initialization
//     // <>
//     //   {count}
//     //   <button onClick={() => setCount(count + 1)}>Click</button>

//     // </>




//     // nested state 
//     // <>
//     //   <div>
//     //     {`My firstname is ${allVAlues.firstName} and lastname is ${allVAlues.lastName} and city is ${allVAlues.address.city} and country is ${allVAlues.address.country}`}
//     //   </div>
//     //   <button onClick={handleClick}>Update Name</button>
//     // </>

//   )
// }

// export default App




import React from 'react';
import { useState , useEffect } from 'react'

function App() {
  const [users , setUsers ] = useState([])
  const [character , setCharacter ] = useState("")
  const [count , setCount ] = useState(30)

  
  useEffect(() => {
    async function getProfile() {
    
    const response = await fetch(`https://api.github.com/users?per_page=${count}`)
    const data = await response.json()
    setUsers(data) 
  }
  getProfile()
  } , [count])
  
  
  function handleChange(e) {
    let ans = e.target.value.toUpperCase()
    setCharacter(ans)
  }
  
  function handleCount(e) {
    setCount(e.target.value)
  }

  return (
    <>
      <h1>GitHub Profiles</h1>
      // <input type="text" value={character} onChange={handleChange}></input>
      <input type="number" value={count} onChange={handleCount}></input>
      {
        users.map((user , index) => (
          <img key={user.login} src={user.avatar_url} height={"100px"} width={"100px"}/>
        ))
      }
    </>
  )
}
export default App

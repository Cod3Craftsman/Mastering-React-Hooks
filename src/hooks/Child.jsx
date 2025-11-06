import React from "react"

function Child ({heavyCal}) {
  console.log("Child component rendered")
  return (
    <div>
      {heavyCal}
    </div>
  )
}

export default React.memo(Child)
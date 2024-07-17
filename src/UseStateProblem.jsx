// use state has a problem    in every click page reload and clg run every reload than slow our website 
import React from 'react'

const UseStateProblem = () => {
    let [count,SetCount]=useState("Bhopal")
    console.log("hy");//run every timew when click see in console   for prevent this problem use useEffect 
    function fun(){ 
    SetCount("Indore")
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={fun}>add</button>
    </div>
  )
}

export default UseStateProblem
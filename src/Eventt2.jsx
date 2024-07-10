import React, { useState } from 'react'

function Eventt2() {
    
    let  i=0;
    let [count,SetCount]=useState("Bhopal")
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

export default Eventt2
import React from 'react'
import { useState } from 'react'

const Form = () => {
    let [Input,SetInput]=useState('')
    let [data,SetData]=useState([])
    function fun1(e){
        SetInput(e.target.value)
    }
    function fun2(){
        SetData([...data,Input])
        SetInput('')
    }
    // ... called spread operator which store the whole value of array
  return (
    <div>
        <p>{data}</p>

        <fieldset>
       <input type='text' placeholder='enter your name ' value={Input} onChange={fun1} />
       <br/>
       <br />
       {/* <input  type='email' placeholder='enter your email' value={Input} onChange={fun1}/> */}
       <br />
       <br />
       <button onClick={fun2}> add</button>
       </fieldset>
    </div>
  )
}

export default Form
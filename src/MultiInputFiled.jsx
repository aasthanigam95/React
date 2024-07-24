import React, { useState } from 'react'
import './App.css'

const MultiInputFiled = () => {
    let [Input,SetInput]=useState({
        name:"",
        email:"",
        password:""
    })
    function fun1(e){
        let {name,value}=e.target
        // console.log(name,value);
        SetInput({...Input,[name]:value})
        console.log(Input);
    }
    function done(){
        // localStorage.setItem('user',Input) //data store in object object so convert the data in string use json.strignfy
        localStorage.setItem('user',JSON.stringify(Input));
        // for check the data in localstorage go in inspect application localstorage

    }
    let data=localStorage.getItem('user');
    console.log(data);
    // for convet data into json fromet
    console.log(JSON.parse(data),"hhyhbhgv");
  return (
    <div id='div'>
  <fieldset>
    <input type="text" name='name'  value={Input.name} placeholder='enter your name' onChange={fun1}/>
    <input type="email" name="email" value={Input.email} placeholder='enter your email'  onChange={fun1}/>
    <input type="password" name="password" value={Input.password} placeholder='enter your password'  onChange={fun1}/>
     <br />
     <br /> 
     <button onClick={done}>add</button>
     </fieldset>
    </div>
  )
}

export default MultiInputFiled 
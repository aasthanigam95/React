import React, { useState,useEffect } from 'react'

const UseEffectt = () => {
    let [count ,Setcount]=useState(0);
    let [city,SetCity]=useState("bhopal");
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((data) => console.log(data))
    },[])
    function fun1(){
     Setcount(count+1);
    }
    function fun2(){
        SetCity("indore");
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={fun1}>add</button>
        <p>{city}</p>
        <button onClick={fun2}>add</button>
    </div>
  )
}

export default UseEffectt
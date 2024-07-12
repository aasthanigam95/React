import React, { useState } from 'react'

const Datte = () => {
  
    let [time,SetTime]=useState()
    setInterval(()=>{
      let date=new Date().toLocaleTimeString()
      SetTime(date);
    })

    //  Setinterval fun cll automaticlly in every 1000 (1s) 
  return (
    <div>
      <p>{time}</p>
    </div>
  )
}

export default Datte
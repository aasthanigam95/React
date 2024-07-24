import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const FetchApi = () => {
    let [data,Setdata]=useState([])
    
    useEffect(()=>{
      fetch('https://dummyapi.online/api/movies')
        .then((response) => response.json())
        .then((json) =>{
             console.log(json)
        Setdata(json)
     } );
       
    },[])
    function fun1(id){
       let nd=data.filter((a)=>{
        return a.id!=id
       })
       Setdata(nd)
    }
  
  return (
    <div>
        {
            data.map((a)=>{
                return(<>
                <p>{a.id}</p>
                <p>{a.movie}</p>
                <img src={a.image} height='400px '/>
                <button onClick={()=>{
                    fun1(a.id)
                }}>delete</button>
                </>)
            })
        }
    </div>
  )
}

export default FetchApi
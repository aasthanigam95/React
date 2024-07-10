import React, { useState } from 'react'

const Eventt = () => {
    let [count,SetCount]=useState(0);// 0 is intial value of count
    function fun1(){
       SetCount(count+1);//SetCount(++count) its a function which set the value of count and internally return the value to count so new value of  count is 1and so one
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={fun1}>add</button>
        {/* after click count is ++  but function based react is static so count value changed but not shown in  display 
        so we use reactjs+ look + function pased=dynamic in reactJS Look use usestate
        array de structure 
        let arr=[1,2,3,5,4]
        let [a,b,c,d]=arr  a refers to 1,b=2,c=3,d=4
        let obj={
        id:123}
        let {id}=obj  refer id=123 */}
    </div>
  )
}

export default Eventt
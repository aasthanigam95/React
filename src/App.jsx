import React from 'react'
import Home from './Home'
import Eventt from './Eventt';
import Eventt2 from './Eventt2';
import Datte from './Datte';
import UseEffectt from './UseEffectt';
import UserProfile from './UserProfile';



const App = (obj) => {
  console.log(obj,"hyy");
  let user="rahul"
  return (
    <div>
      <h1>hello {user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima quas quasi ad ducimus perferendis alias, aut quod eum iure!</p>
     {/* called prons property sharing .....share the value in only one diraction parent to child  */}
     {/* <Home a={obj.s} /> */}
      {/* <Eventt/> */}
      {/* <Eventt2/> */}
      {/* <Datte/> */}
   
      {/* <UseEffectt/> */}
      <UserProfile/>
    </div>
  )
}

export default App

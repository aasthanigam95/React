import React from 'react'
// import Home from './Home'
// import Eventt from './Eventt';
// import Eventt2 from './Eventt2';
// import Datte from './Datte';
// import UseEffectt from './UseEffectt';
// import UserProfile from './UserProfile';
// import NavBar from './NavBar';
// import { Route, Routes } from 'react-router-dom';
// import Homee from './Homee';
// import About from './About';
// import Contact from './Contact';
// import Form from './Form';
import MultiInputFiled from './MultiInputFiled';
import FetchApi from './FetchApi';




const App = (obj) => {
  console.log(obj,"hyy");
  let user="rahul"
  return (
    <div>
      {/* <h1>hello {user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima quas quasi ad ducimus perferendis alias, aut quod eum iure!</p> */}
     {/* called prons property sharing .....share the value in only one diraction parent to child  */}
     {/* <Home a={obj.s} /> */}
      {/* <Eventt/> */}
      {/* <Eventt2/> */}
      {/* <Datte/> */}
   
      {/* <UseEffectt/> */}
      {/* <UserProfile/> */}

      {/* if you want to show navbar every time ....use navbar tag outside the Routers ....but if you want that navbar show only in condition put insidr the  routers 
      and give the path / its show when we open page but when path routes its will hide  */}

      
     {/* <NavBar/> */}
     {/* <Routes>
      <Route path='/' element={<NavBar/>}/>
      <Route path='/home' element={<Homee/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes> */}
     {/* <Form/> */}
     {/* <MultiInputFiled/> */}
     <FetchApi/>
    </div>
  )
}

export default App

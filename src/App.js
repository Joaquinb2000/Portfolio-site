import React, { useState} from 'react';
import Content from './Components/Content/Content'
import NavBar from  './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer';

const App= () =>{
  const [route, routeChange]= useState(0);

  const onClick= (event) =>{
   routeChange(Number(event.target.id));
  }

  return (
    <div id="App">
        <NavBar route={route} click={onClick}/>
        <Content click={onClick} route={route}/>
        <Footer route={route}/>
    </div>
  );
}

export default App;

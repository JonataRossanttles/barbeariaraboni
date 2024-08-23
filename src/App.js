import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

//useEffect(()=>{
  //fetch('https://barbeariaraboni-eb7b4-default-rtdb.firebaseio.com/Pedro.json',{method:'POST',
   // headers:{'Content-Type':'Application/json'},
 // body:JSON.stringify({nome:'Carlos',celular:'986919984',corte:'degradê'})}).then(response=>response.json()).
  // then(data=>console.log(data))
//},[])
  
useEffect(()=>{
  fetch('https://barbeariaraboni-eb7b4-default-rtdb.firebaseio.com/Pedro.json'
  ).then(response=>response.json()).
   then(data=>console.log(data))
},[])


  return (
   <></>
  );
}

export default App;

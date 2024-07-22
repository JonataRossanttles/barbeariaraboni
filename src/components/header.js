import React, {useContext} from "react";
import { MyContext } from "../datacontext"

function Header() {

  const {curso} = useContext(MyContext) 

console.log(curso.current)

  function cursoscrool(){
    curso.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
     
 <header>
    <img src='imagens/logo-sem-fundo.png' alt='logo' className='logo'></img>
    <ul className='menu-desktop'>
      <li className='option-menu' onClick={cursoscrool}>Curso</li> 
      <li className='option-menu' >Serviços</li>
      <li className='option-menu'>Localização</li>
    </ul>

 </header>
    </>

  );
}

export default Header;

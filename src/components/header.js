import React, {useContext, useEffect, useState} from "react";
import { MyContext } from "../datacontext"

function Header() {

  const {inicio,curso,cortes,servicos,localizacao} = useContext(MyContext) 
  const [alturaview,Setalturaview] = useState() 


 

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        Setalturaview(window.scrollY)
        
      })

    },[])
    

    function inicioscrool(){
      inicio.current.scrollIntoView({ behavior: 'smooth' })
    }

  function cursoscrool(){
    curso.current.scrollIntoView({ behavior: 'smooth' })
  }
  function cortesscrool(){
    cortes.current.scrollIntoView({ behavior: 'smooth' })
  }
  function servicoscrool(){
    servicos.current.scrollIntoView({ behavior: 'smooth' })
  }
  function localizacaoscrool(){
    localizacao.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
     
 <header style={{background: alturaview > 100 ? 'rgba(0, 0, 0, 0.575)' :  'transparent' , fontWeight: alturaview > 100 ? '600' :  '400'}} >
    <img src='imagens/logo-sem-fundo.png' alt='logo' className='logo'></img>
    <ul className='menu-desktop'>
    <li className='option-menu' onClick={inicioscrool}  >Início</li> 
      <li className='option-menu' onClick={cursoscrool} style={{color: alturaview > 630  && alturaview < 1240 ? '#e8c871' :  'white'}}>Curso</li> 
      <li className='option-menu' onClick={cortesscrool}  style={{color: alturaview > 1240  && alturaview < 2470 ? '#e8c871' :  'white'}}>Cortes</li>
      <li className='option-menu' onClick={servicoscrool} style={{color: alturaview > 2470  && alturaview < 3000 ? '#e8c871' :  'white'}} >Serviços</li>
      <li className='option-menu'onClick={localizacaoscrool} style={{color: alturaview >= 3238 ? '#e8c871' :  'white'}} >Localização</li>
    </ul>

 </header>
    </>

  );
}

export default Header;

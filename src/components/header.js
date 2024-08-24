import React, {useContext, useEffect, useState} from "react";
import { MyContext } from "../datacontext"

function Header() {

  const {inicio,curso,cortes,servicos,localizacao} = useContext(MyContext) 
  const [alturaview,Setalturaview] = useState() 
  const [menumobile,setMenumobile] = useState(false)

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        Setalturaview(window.scrollY)
        
      })

    },[])
   


    function openclose(){
      setMenumobile(!menumobile)
    }
// Funções onclick de scroll para as opções do menu desktop
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
// Funções onclick de scroll para as opções do menu mobile
function inicioscroolmob(){
  inicio.current.scrollIntoView({ behavior: 'smooth' })
  setMenumobile(!menumobile)
}
function cursoscroolmob(){
  curso.current.scrollIntoView({ behavior: 'smooth' })
  setMenumobile(!menumobile)
}
function cortesscroolmob(){
  cortes.current.scrollIntoView({ behavior: 'smooth' })
  setMenumobile(!menumobile)
}
function servicoscroolmob(){
  servicos.current.scrollIntoView({ behavior: 'smooth' })
  setMenumobile(!menumobile)
}
function localizacaoscroolmob(){
  localizacao.current.scrollIntoView({ behavior: 'smooth' })
  setMenumobile(!menumobile)
}

  return (
    <>
     
 <header style={{backgroundColor: alturaview > 100 || menumobile == true ? 'rgba(0, 0, 0, 0.575)' :  'transparent' , fontWeight: alturaview > 100 ? '600' :  '400'}} >
    <img src='imagens/logo-sem-fundo.png' alt='logo' className='logo' onClick={inicioscrool} ></img>
    <ul className='menu-desktop'>
    <li className='option-menu'   onClick={inicioscrool}  >Início</li> 
      <li className='option-menu' onClick={cursoscrool} style={{color: alturaview > 630  && alturaview < 1240 ? '#e8c871' :  'white'}}>Curso</li> 
      <li className='option-menu' onClick={cortesscrool}  style={{color: alturaview > 1240  && alturaview < 2253 ? '#e8c871' :  'white'}}>Cortes</li>
      <li className='option-menu' onClick={servicoscrool} style={{color: alturaview > 2253  && alturaview < 3000 ? '#e8c871' :  'white'}} >Serviços</li>
      <li className='option-menu' onClick={localizacaoscrool} style={{color: alturaview >= 3139 ? '#e8c871' :  'white'}} >Localização</li>
    </ul>

<img src={`${menumobile ?"/imagens/icon-close.svg" :"/imagens/icon-hamburger.svg" }`}  alt="" className="icon-menu" onClick={openclose}></img>


<ul className='menu-mobile' style={{display: menumobile ? 'flex' : 'none'}}>
    <li className='option-menu-mobile' onClick={inicioscroolmob}  >Início</li> 
      <li className='option-menu-mobile' onClick={cursoscroolmob} >Curso</li> 
      <li className='option-menu-mobile' onClick={cortesscroolmob}  >Cortes</li>
      <li className='option-menu-mobile' onClick={servicoscroolmob}  >Serviços</li>
      <li className='option-menu-mobile'onClick={localizacaoscroolmob}  >Localização</li>
    </ul>

     </header>

    </>

  );
}

export default Header;

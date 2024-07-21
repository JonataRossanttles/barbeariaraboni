import React from "react";


function Header() {
  return (
    <>
     
 <header>
    <img src='imagens/logo.png' alt='logo' className='logo'></img>
    <ul className='menu-desktop'>
      <li className='option-menu'>Sobre</li>
      <li className='option-menu' >Serviços</li>
      <li className='option-menu'>Localização</li>
    </ul>

 </header>
    </>

  );
}

export default Header;
